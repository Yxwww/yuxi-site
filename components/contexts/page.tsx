// page context for page title

import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { pipe, T, equals, cond, always, startsWith, prop } from 'ramda';
import { removeFirstChar, captalizeFirstChar } from '@/utils/index';
import { POST_PATH, PROFILE_IMAGE_URL } from '@/src/contents/constants';
// pages/_app.js
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
if (typeof window !== 'undefined') {
  // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug(); // debug mode in development
    },
  });
}
/**
 * Seemingly duplication
 */
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
  pageContext: PageContextState;
  setPostContext: (context: PostContext) => void;
}
const PageContext = createContext<PageContextProps>({
  pageContext: {
    title: "Yuxi's Space",
    description: 'Personal website of Yuxi Wang',
    image: PROFILE_IMAGE_URL,
    tags: [],
  },
  setPostContext() {
    console.warn('set context setter is not initialized ');
  },
});

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
    <PostHogProvider client={posthog}>
      <PageContext.Provider value={{ pageContext, setPostContext }}>
        {children}
      </PageContext.Provider>
    </PostHogProvider>
  );
};

export const usePage = () => useContext(PageContext);
