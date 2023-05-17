import React, { ReactNode } from 'react';
import { Card, Columns, Content, Heading } from 'react-bulma-components';
import {BlogPost} from '@prisma/client';


export default function BlogPost({ post, modMenu }: {post: BlogPost, modMenu?: ReactNode}) {
  return (
    <Card>
      <Card.Content>
        <Content>
          <Columns>
          <Columns.Column size={10}>
          <Heading size={4} >{post.title}</Heading>
          <Heading size={6}>{post.date.toLocaleDateString()}</Heading>
          <p className="subtitle">{post.brief}</p>
          </Columns.Column>
          <Columns.Column size={2}>
            {modMenu}
          </Columns.Column>
          </Columns>
        </Content>
      </Card.Content>
    </Card>
  );
}