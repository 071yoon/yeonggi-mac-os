import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import FinderWindows from "../components/finder/FinderWindows";
import Folders from "../components/folders/Folders";
import { useClickNavigation } from "../hooks/useClickNavigation";
import Navigation from "../components/layouts/navigation/Navigation";
import Dock from "../components/layouts/dock/Dock";

const Home: NextPage = () => {
  const { clickedNavigation, handleClickNavigation, onDisable } =
    useClickNavigation();

  return (
    <div
      style={{ width: "100vw", height: "100vh", userSelect: "none" }}
      onDrag={(e) => e.preventDefault()}
    >
      <Head>
        <title>yeonggi's desktop</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main
        onClick={() => {
          if (clickedNavigation) {
            onDisable();
          }
        }}
      >
        <Folders />
        <FinderWindows />
      </main>
      <Background />
      <Navigation
        handleClickNavigation={handleClickNavigation}
        clickedNavigation={clickedNavigation}
      />
      <Dock />
    </div>
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
