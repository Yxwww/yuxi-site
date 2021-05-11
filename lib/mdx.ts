import path from 'path'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const root = process.cwd()

export async function getFiles(type: string) {
    return fs.readdirSync(path.join(root, 'data', type), 'utf8')
}

export function getBlogDir() {
    return path.join(root, 'data', 'blog')
}

export function trimMdx(s: string) {
    return s.replace(/\.mdx/, '')
}

export async function getBlogMetaInfo(slug: string) {
    const source = fs.readFileSync(path.join(root, 'data', 'blog', `${slug}.mdx`), 'utf8')
    const result = matter(source);
    const { content, data } = result;
    return {
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug: slug || null,
            ...data,
        }
    }
}

export async function getFileBySlug(type, slug) {
    const source = slug ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8') : fs.readFileSync(path.join(root, 'data', type, `${type}.mdx`), 'utf8');
    const result = matter(source);
    const { content, data } = result;
    const mdxSource = await serialize(content);
    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug: slug || null,
            ...data,
        }
    }
}
