// page context for page title

import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { pipe, T, equals, cond, always, startsWith, prop, evolve } from 'ramda';
import { removeFirstChar, captalizeFirstChar } from '@/utils/index';
import { POST_PATH } from '@/src/contents/constants';

interface PostContext {
  title: string;
  description: string;
  image: string;
  tags?: string[];
}
interface PageContextState {
  title: string;
  description: string;
  image: string;
  tags?: string[];
}
interface PageContextProps {
  pageContext: PageContextState | null;
  setPostContext: (context: PostContext) => void;
}
const PageContext = createContext<PageContextProps>({
  pageContext: null,
  setPostContext() {
    console.warn('set context setter is not initialized ');
  },
});

const processContext = evolve({});

const processNonBlogPath = pipe(removeFirstChar, captalizeFirstChar);

function processTitle(pathname: string, postContext: PostContext) {
  return cond([
    [equals('/'), always('Home')],
    [startsWith(`/${POST_PATH}`), always(prop('title', postContext))],
    [T, processNonBlogPath],
  ])(pathname);
}

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { pathname } = useRouter();
  const [pageContext, setPageContext] = useState<PageContextState>({
    title: '',
    description: '',
    image: '',
    tags: [],
  });
  const [postContext, setPostContext] = useState<PostContext>({
    title: '',
    description: '',
    image: '',
    tags: [],
  });

  useEffect(() => {
    setPageContext((context) => ({
      ...context,
      title: `${processTitle(pathname, postContext)} | Yuxi's Space`,
    }));
  }, [pathname, postContext]);

  return (
    <PageContext.Provider value={{ pageContext, setPostContext }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
