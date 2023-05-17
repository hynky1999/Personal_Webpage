import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';


export default async function createBlog(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { title, brief, content } = req.body;

  try {
    const blog = await prisma.blogPost.create({
      data: {
        title,
        brief,
        content,
      },
    });
    const blog_url = `/blog/${blog.id}`;

    return res.status(201).json({...blog, url: blog_url });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
