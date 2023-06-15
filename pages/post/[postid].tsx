// import fetch from 'isomorphic-unfetch'
import Markdoc, { Config } from '@markdoc/markdoc';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import path from 'path';
import yaml from 'js-yaml'; // or 'toml', etc.
import { promises as fs } from 'fs';
import { Page } from '../../components/layouts/main';
import { heading } from '@/markdoc/schema/Heading';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-tomorrow.min.css';
import { Fence } from '@/components/markdoc/Fence';
import { fence } from '@/markdoc/schema/Fence';
import Head from 'next/head';
import Link from 'next/link';
import { InferGetStaticPropsType } from 'next';
import { FrontmatterParsed, FrontmatterSerialized } from 'src/types';
import { AUTHOR_NAME, PROFILE_IMAGE_URL } from 'src/contents/constants';
import dayjs from 'dayjs';
import { processFrontmatter } from 'src/utils/serverside';
import {
  META_OG_DESCRIPTION_KEY,
  META_OG_IMAGE_KEY,
  META_OG_TITLE_KEY,
  META_TITLE_KEY,
} from '@/constants';
import useScript, { UseScriptsAttributes } from '@/utils/hooks/useScript';
import useEl from '@/utils/hooks/useEl';
import { usePage } from '@/components/contexts/page';
import Image from 'next/image';

const config: Config = {
  nodes: {
    heading,
    fence,
  },
};
const UTTERANCES_SCRIPT_SETUP: UseScriptsAttributes = {
  src: 'https://utteranc.es/client.js',
  crossOrigin: 'anonymous',
  repo: 'Yxwww/yuxi-site',
  'issue-term': 'pathname',
  theme: 'preferred-color-scheme',
  async: true,
};

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = await fs.readdir(postsDirectory);

  const paths = filenames.map((name) => ({
    params: { postid: name.split('.')[0], name },
  }));

  return {
    paths,
    fallback: false,
  };
}

const postsDirectory = path.join(process.cwd(), 'posts');

interface PostPagePropType {
  frontmatter: FrontmatterSerialized;
  content: string;
}

export async function getStaticProps({ params }) {
  const filePath = path.join(postsDirectory, params.postid);
  const fileContents = await fs.readFile(`${filePath}.md`, 'utf8');
  const ast = Markdoc.parse(fileContents);
  const frontmatter: FrontmatterParsed = ast.attributes.frontmatter
    ? yaml.load(ast.attributes.frontmatter)
    : {};

  return {
    props: {
      post: {
        frontmatter: processFrontmatter(frontmatter),
        content: fileContents,
      } as PostPagePropType,
    },
  };
}

function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const ast = Markdoc.parse(post.content);
  const { setPostContext } = usePage();
  const content = Markdoc.transform(ast, config);
  const components = Markdoc.renderers.react(content, React, {
    components: {
      Fence,
    },
  });
  const [renderComments, setRenderComments] = React.useState(false);
  useEffect(() => {
    setRenderComments(true);
  }, []);

  const { title, image, description, published, updated, tags } =
    post.frontmatter;
  const [el, ref] = useEl();

  useScript(renderComments ? el : null, UTTERANCES_SCRIPT_SETUP);

  useEffect(() => {
    setPostContext({
      title,
      description,
      image,
      tags: tags ? tags.split(',').map((v) => v.trim()) : [],
    });
  }, [title, description, published, updated, tags, setPostContext, image]);

  return (
    <Page>
      <Head>
        <title key={META_TITLE_KEY}>{`${title} |  Yuxi's Blog`}</title>
        <meta property="og:title" content={title} key={META_OG_TITLE_KEY} />
        <meta
          property="og:description"
          content={description}
          key={META_OG_DESCRIPTION_KEY}
        />
        <meta
          property="og:image"
          content={image || PROFILE_IMAGE_URL}
          key={META_OG_IMAGE_KEY}
        />
      </Head>
      <div className="text-sm breadcrumbs pb-4 sm:pb-8 truncate">
        <ul>
          <li>
            <Link href="/blogs" className="link link-hover">
              Blogs
            </Link>
          </li>
          <li>{title}</li>
        </ul>
      </div>
      <div
        className={`font-article prose prose-slate mx-auto max-w-2xl lg:max-w-5xl dark:prose-invert`}
      >
        <>
          <h1 className="capitalize">{post.frontmatter.title}</h1>
          <div className="flex justify-between text-md text-slate-500 dark:text-slate-400 sm:mb-8 mb-4">
            {updated ? (
              <time>Updated: {dayjs(updated).format('MMM DD, YYYY')}</time>
            ) : (
              <time>Published: {dayjs(published).format('MMM DD, YYYY')}</time>
            )}

            <span className="italic">Written by: {AUTHOR_NAME}</span>
          </div>

          {false && (
            <div className="h-[200px] sm:h-[400px] w-full relative">
              <Image
                className="object-contain md:object-cover my-0"
                src={post.frontmatter.image}
                alt={`image of post`}
                fill
              />
            </div>
          )}
        </>
        {components}
        <hr />
        <h2>Comments ☕️</h2>
        <div ref={ref}></div>
      </div>
    </Page>
  );
}

export default Post;
