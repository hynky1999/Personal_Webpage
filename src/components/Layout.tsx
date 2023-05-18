import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { BsCodeSquare } from 'react-icons/bs'
import { Columns, Navbar, Element, Footer, Container, Content } from 'react-bulma-components'
import LoginButton from './LoginButton'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'hynky - personal web' }: Props) => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar fixed="top" p={4} color="link" active={activeMenu}>
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="/">
              <BsCodeSquare size={32} />
            </Navbar.Item>
            <Navbar.Burger onClick={() => {() => {
              setActiveMenu(!activeMenu)}}
            }
            />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item renderAs="div" textColor='success'>
                <Link href="/"><Element textWeight='bold' textSize={5} textColor='white'>About Me</Element></Link>
              </Navbar.Item>
              <Navbar.Item renderAs="div">
                <Link href="/blog"><Element textWeight='bold' textSize={5} textColor='white'>Blog</Element></Link>
              </Navbar.Item>
              <Navbar.Item renderAs="div">
                <Link href="/contact-me"><Element textWeight='bold' textSize={5} textColor='white'>Contact me</Element></Link>
              </Navbar.Item>
            </Navbar.Container>
            <Navbar.Container align="right" alignItems='center'>
            <LoginButton />
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </header>
      <Columns.Column mt={6} />
      {children}
      <Footer>
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>
              Developed by Hynek Kydlíček using <a href="https://nextjs.org/" >Next.js</a> and <a href="https://bulma.io/" > Bulma UI</a>.
            </p>
          </Content>
        </Container>
      </Footer>
    </div>
  );
};

export default Layout
