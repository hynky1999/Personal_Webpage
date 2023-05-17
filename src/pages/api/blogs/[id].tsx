
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

async function deleteBlogPost(request: NextApiRequest,
    response: NextApiResponse) {
    const { id } = request.query;
    const result = await prisma.blogPost.delete({
        where: { id: Number(id) },
    });
    if (!result) {
        return response.status(404).json({ message: 'Post not found' });
    }
    return response.status(200).json({ message: 'Post deleted' });


}

async function createBlogPost(request: NextApiRequest,
    response: NextApiResponse) {

    const { title, brief, content } = request.body;

    try {
        const blog = await prisma.blogPost.create({
            data: {
                title,
                brief,
                content,
            },
        });
        const blog_url = `/blog/${blog.id}`;

        return response.status(201).json({ ...blog, url: blog_url });
    } catch (error) {
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}


export default async function manageBlog(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'DELETE') {
        return await deleteBlogPost(req, res);
    }

    return res.status(405).json({ message: 'Method not allowed' });



}