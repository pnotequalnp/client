import { FC } from 'react';
import Link from 'next/link'
import Layout from '../../components/layout'
import { dummyPosts } from './[slug]'

export const Blog: FC<{}> = () => {
  const posts = dummyPosts.map(post => (
    <li key={post.slug}><Link href={`/blog/${post.slug}`}>
      {`${post.author}: ${post.title}`}
    </Link></li>
  ));

  return (
    <Layout>
      <ul>
        {posts}
      </ul>
    </Layout>
  );
};

export default Blog;
