import { AiFillGithub, AiFillMail } from 'react-icons/ai';
import Layout from '../components/Layout';
import { Block, Box } from 'react-bulma-components';

const ContactMe = () => {
  return (
    <Layout>
    <Box alignItems='center' textAlign='center'>
      <Block>
        <a href="mailto:kydlicek.hynek@gmail.com"><AiFillMail /> kydlicek.hynek@gmail.com</a>
      </Block>
      <Block>
      <a href="https://github.com/hynky1999"><AiFillGithub /> hynky1999 </a>
      </Block>
    </Box>
    </Layout>
  );
};

export default ContactMe;
