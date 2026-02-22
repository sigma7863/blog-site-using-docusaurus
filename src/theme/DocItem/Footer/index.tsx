import React, { type ReactNode } from 'react';
import Footer from '@theme-original/DocItem/Footer';
import GiscusComponent from '@site/src/components/GiscusComponent';
import type FooterType from '@theme/DocItem/Footer';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <Footer {...props} />
      <GiscusComponent />
    </>
  );
}
