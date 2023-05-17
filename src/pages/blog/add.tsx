import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Form, Heading, Modal } from 'react-bulma-components';
import Layout from '../../components/Layout';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from 'next/dynamic';

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

const CreateBlog = () => {
  const [title, setTitle] = useState<string | undefined>('');
  const [brief, setBrief] = useState<string | undefined>('');
  const [content, setContent] = useState<string | undefined>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState< string | null >(null);

  const router = useRouter();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleBriefChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBrief(event.target.value);
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // Convert data to json
    const blogPost = {
      title,
      brief,
      content
    };
    // Send data to API endpoint
    try{
      const result = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogPost)
      });
      if (result.ok) {
        const data = await result.json();
        router.push(data.url);
      }
      else{
        setError("Error creating blog post");
      }

    }
    catch(fetchError){
      setError("Error creating blog post");
    }
    setIsLoading(false);

  };

  return (
    <Layout>
      <Box>
        <Heading size={3}>Create a Markdown Blog</Heading>
        <form onSubmit={handleSubmit}>
          <Form.Field>
            <Form.Label>Title:</Form.Label>
            <Form.Control>
              <Form.Input type="text" value={title} onChange={handleTitleChange} />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label>Brief Description:</Form.Label>
            <Form.Control>
              <Form.Textarea value={brief} onChange={handleBriefChange} />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label>Content:</Form.Label>
            <MDEditor value={content} onChange={setContent} />
          </Form.Field>
          <Form.Field>
            <Form.Control>
              <Button color="primary" type="submit" loading={isLoading}>
                Create Blog
              </Button>
            </Form.Control>
          </Form.Field>
        </form>
      </Box>
      <Modal show={error !== null} onClose={() => {setError(null)}} showClose={true}>
        <Modal.Card>
          <Modal.Card.Header>
            <Modal.Card.Title>Error</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            {error}
          </Modal.Card.Body>
          <Modal.Card.Footer/>
        </Modal.Card>
      </Modal>
    </Layout>
  );

};

export default CreateBlog;
