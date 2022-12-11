import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Me from "../assets/yeonggi-icon.png";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "yeonggi portfolio" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav>
        <Left>
          <Link href="/">YeongGi 정보</Link>{" "}
          <Link href="https://github.com/071yoon" target="_blank">
            Github
          </Link>
        </Left>
        <Right>
          <Link href="mailto:yeonggi@kakao.com">이메일</Link>
          <Image
            src={Me}
            alt="me"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />
        </Right>
      </Nav>
    </header>
    {children}
    <Footer>
      <p>yeonggi portfolio</p>
      <Line />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "10rem",
        }}
      >
        <p>광고 문의</p>
        <p>비즈니스</p>
        <p>설정</p>
      </div>
    </Footer>
  </div>
);

export default Layout;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  background-color: #f5f5f5;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
  font-size: 0.8rem;
  a {
    margin: 0 0.5rem;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
  font-size: 0.8rem;
  a {
    margin: 0 0.5rem;
  }
`;

const Footer = styled.footer`
  position: fixed;
  padding: 0.2rem 1rem;
  bottom: 0;
  width: 100%;
  background-color: #f2f2f2;
  color: #707579;
`;

const Line = styled.hr`
  margin: 0.5rem 0;
  border: 1px solid #e5e5e5;
`;
