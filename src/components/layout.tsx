import { FC } from 'react';
import Link from 'next/link'

export const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <header>This is a header</header>
      <nav>
        <Link href="/blog"><a>Blog</a></Link>
      </nav>
      {children}
      <footer>This is a footer</footer>
    </>
  );
};

export default Layout;
