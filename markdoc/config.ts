import { Heading as HeadingNodeRenderer } from '@/components/markdoc/Heading';
import { Image as ImageNodeRenderer } from '@/components/markdoc/Image';
import { fence, callout, heading, image } from '@/markdoc/schema';
import Markdoc, { Config } from '@markdoc/markdoc';
import CalloutTag from '@/components/markdoc/Callout';
import { Fence } from '@/components/markdoc/Fence';
import React from 'react';

const config: Config = {
  nodes: {
    heading,
    fence,
  },
  tags: {
    callout,
    image,
  },
};

export const RENDER_OPTION = {
  components: {
    Fence,
    Heading: HeadingNodeRenderer,
    Callout: CalloutTag,
    Image: ImageNodeRenderer,
  },
};

export function mdRenderToTreeNodes(mdContent: string) {
  const ast = Markdoc.parse(mdContent);
  return Markdoc.transform(ast, config);
}
export function mdRenderToReact(mdContent: string) {
  return Markdoc.renderers.react(
    mdRenderToTreeNodes(mdContent),
    React,
    RENDER_OPTION
  );
}

export function mdRenderToHtml(mdContent: string) {
  return Markdoc.renderers.html(mdRenderToTreeNodes(mdContent));
}
