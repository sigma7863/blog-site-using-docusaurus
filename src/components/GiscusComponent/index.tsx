import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="sigma7863/blog-site-using-docusaurus"
      repoId="R_kgDOQi4wSw"
      category="Comments"
      category-id="DIC_kwDOQi4wS84C27eP"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="1"
      input-position="top"
      theme={ colorMode === 'dark' ? 'dark' : 'light' }
      lang="ja"
    />
  );
}