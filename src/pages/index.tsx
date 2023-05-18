import { Box, Container, Columns, Progress, Notification, Heading, Content, Element } from 'react-bulma-components';
import { skills } from '../lib/static';
import Slideshow from '../components/Projects-Slideshow';
import Layout from '../components/Layout';





const about_me: string = `<p>I'm Hynek Kydlíček, a passionate software developer with over four years of professional experience. Currently, I am pursuing my studies at MFF UK, where I continue to expand my knowledge and skills.
</p>
<h4>My interests</h4>
<p>
My expertise extends across various programming languages and paradigms, empowering me to tackle diverse software development challenges. My main interests is Artifical Inteligence, especially the areas of <strong>Natural Language Processing</strong> and <strong>Voice Synthesis</strong>.
</p>
<p>
Furthermore, I am interested in <strong>Distributed Systems</strong> and <strong>Cloud Computing</strong>.
</p>
`



export default function About() {
  return (
    <Layout>
      <Container>
        <Box>
          <Heading>Welcome!</Heading>
          <Content><div dangerouslySetInnerHTML={{ __html: about_me }} /></Content>
        </Box>
        <Box>
          <Heading textAlign='center' size={3}>Skills</Heading>
          <Columns>
            {Object.entries(skills).map(([category, skills], index) => (
              <Columns.Column
                widescreen={{ size: 4 }}
                tablet={{ size: 6 }}

                key={index}>
                <Box key={index}>
                  <Heading textAlign='center' size={4}>{category}</Heading>
                  <Columns>
                    {skills.map((skill, index) => (
                      <Columns.Column key={index} size={12}>
                        <Heading subtitle size={5}>{skill.name}</Heading>
                        <Progress color={'primary'} max={100} value={skill.proficiency} />
                        <Notification>{skill.commentary}</Notification>
                      </Columns.Column>
                    ))}
                  </Columns>
                </Box>
              </Columns.Column>
            ))}
          </Columns>
        </Box>
        <Box paddingless pt={2} pb={6}>
          <Heading textAlign='center' size={3}>Projects</Heading>
          <Slideshow/>
        </Box>
        <Box>
          <Heading textAlign='center' size={3}>Education</Heading>
          <Columns mx={'auto'}>
            <Columns.Column textAlign='center'>
                <Heading size={4}>Charles University</Heading>
                <Heading subtitle size={5}>Bachelor's degree, Computer Science</Heading>
                <Content>
                  <p>2020-2023</p>
                  <p>Prague, Czech Republic</p>
                  <p><a href="/thesis/thesis.pdf">Thesis</a>: Implicit information extraction from news stories</p>
                </Content>
            </Columns.Column>
            <Columns.Column textAlign='center'>
                <Heading size={4}>Prg.ai</Heading>
                <Heading subtitle size={5}>Minor</Heading>
                <Content>
                  <p>2022-2023</p>
                  <p>Prague, Czech Republic</p>
                </Content>
            </Columns.Column>
            </Columns>
          </Box>
      </Container>
    </Layout>
  );
}
