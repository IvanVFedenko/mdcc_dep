import React, { FC } from 'react';
import { Footer } from './footer';
import { Header } from './header';

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <section>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
};
