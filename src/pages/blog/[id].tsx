import ReactMarkdown from 'react-markdown';
import prisma from '../../lib/prisma';
import { Prisma, BlogPost } from '@prisma/client';
import Layout from '../../components/Layout';
import { Content, Hero, Section, Heading, Block } from 'react-bulma-components';
import { useRouter } from 'next/router';
import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';



export async function getStaticProps({ params }) {
    const { id } = params;
    const post = await prisma.blogPost.findUnique({
        where: {
            id: Number(id),
        },
    })
    let serializedPost = post ? {
            ...post,
            date: post?.date.toString()
        } : null;
    return {
        props: {
            post: serializedPost,
        },
    };
}


export default function Blog({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
    if (!post) {
        return (
            <Layout>
                <Heading textAlign={'center'}>Post not found</Heading>
            </Layout>
        );
    }
    // Load from string
    const date = new Date(post.date);

    return (
        <Layout>
            <Section>
                <Block>
                    <Heading>{post.title}</Heading>
                    <Heading subtitle>{post.brief}</Heading>
                    <Heading subtitle>{date.toLocaleDateString()}</Heading>
                </Block>
                <Block>
                    <Content>
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </Content>
                </Block>
            </Section>
        </Layout>
    );
};