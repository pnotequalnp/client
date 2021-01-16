import { FC } from 'react';
import { GetStaticProps, GetStaticPaths, GetStaticPropsResult, GetStaticPropsContext } from 'next'
import Layout from '../../components/layout'

export type PostData = {
  title: string,
  author: string,
  content: string,
  slug: string
};

type Props = {
  post: PostData
}

export const dummyPosts: PostData[] = [
  { title: "Post 1", author: "Author 1", content: "Content 1", slug: "1" },
  { title: "Post 2", author: "Author 2", content: "Content 2", slug: "2" },
  { title: "Post 3", author: "Author 3", content: "Content 3", slug: "3" },
  { title: "Post 4", author: "Author 4", content: "Content 4", slug: "4" },
  { title: "Post 5", author: "Author 5", content: "Content 5", slug: "5" },
  { title: "Post 6", author: "Author 6", content: "Content 6", slug: "6" },
  { title: "Post 7", author: "Author 7", content: "Content 7", slug: "7" },
  { title: "Post 8", author: "Author 8", content: "Content 8", slug: "8" },
  { title: "Post 9", author: "Author 9", content: "Content 9", slug: "9" },
  { title: "Post 10", author: "Author 10", content: "Content 10", slug: "10" }
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dummyPosts.map(post => `/blog/${post.slug}`);
  return {
    paths,
    fallback: false
  }
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (params === undefined) return { notFound: true };

  const post = dummyPosts.find(post => post.slug === params.slug);

  if (post === undefined) return { notFound: true };

  return { props: { post } };
}

export const Post: FC<Props> = ({ post }) => {
  return (
    <Layout>
      <h2>{post.title}</h2>
      <h3>{post.author}</h3>
      <p>{post.content}</p>
    </Layout>
  );
};

export default Post;
