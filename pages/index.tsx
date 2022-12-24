import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import FinderWindow from "../components/finder/SingleFinderWindow";
import Folders from "../components/folders/Folders";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>yeonggi's desktop</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Folders />
        <FinderWindow />
      </main>
      <Background />
    </>
  );
};

export default Home;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(/assets/images/monterey-wallpaper.jpg);
`;
