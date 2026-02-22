import React, { type ReactNode } from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import GiscusComponent from '@site/src/components/GiscusComponent';
import type BlogPostItemType from '@theme/BlogPostItem';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): ReactNode {
  const { isBlogPostPage } = useBlogPost();

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && <GiscusComponent />}
    </>
  );
}
