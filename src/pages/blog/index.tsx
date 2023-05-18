import { Block, Button, Heading } from 'react-bulma-components';
// import { getBlogPosts } from './path-to-your-fetch-function';
import BlogPostQuick from '../../components/BlogPostQuick';
import Layout from '../../components/Layout';
import { useSession } from 'next-auth/react';
import prisma from '../../lib/prisma';
import { useRouter } from 'next/router';
import styles from './blog.module.css'
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  const blogPosts = await prisma.blogPost.findMany({
    take: 10,
  });

  let serializedPosts = blogPosts ? blogPosts.map((post) => {
      return {
        ...post,
        date: post.date.toString(),
      }
    }) : null;

  return { props: { serializedPosts },
      revalidate: 6000,
}
}

export default function BlogPage({ serializedPosts }:  InferGetStaticPropsType<typeof getStaticProps> ) {
  const { data: session } = useSession();
  const canAdd = session?.user?.claims?.includes('blogAdd') ?? false;
  const blogPosts = serializedPosts?.map((post) => {
    return {
      ...post,
      date: new Date(post.date),
    }
  });
  const router = useRouter();

  const handleBlogPostClick = (id: number) => {
    router.push(`/blog/${id}`);
  };



  return (
    <Layout>
      <Block>
        <Heading textAlign={'center'}>My Blog</Heading>
      </Block>
      {canAdd && (
      <Block display='flex' alignItems='center' justifyContent='center'>
        <Button color={'primary'} onClick={() => router.push('/blog/add')}>Create Blog Post</Button>
      </Block>
      )}
      {blogPosts && blogPosts.map((post, index) => (
        <Block key={index} onClick={() => handleBlogPostClick(post.id)}
          className={styles.post_quick}
        >
          <BlogPostQuick key={index} post={post} modMenu={null} />
        </Block>
      ))}
    </Layout>
  );
}
