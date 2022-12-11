import type { NextPage } from "next";
import styled from "styled-components";
import Search from "../components/Search";

const Home: NextPage = () => {
  return (
    <div>
      <Main>
        <YeongGi>
          <p style={{ color: "red" }}>Y</p>
          <p style={{ color: "blue" }}>e</p>
          <p style={{ color: "orange" }}>o</p>
          <p style={{ color: "blue" }}>n</p>
          <p style={{ color: "green" }}>g</p>
          <p style={{ color: "red" }}>G</p>
          <p style={{ color: "orange" }}>i</p>
        </YeongGi>
        <Search />
        <BottomButtons>
          <SingleButton>Google 검색</SingleButton>
          <SingleButton>I'm Feeling Lucky</SingleButton>
        </BottomButtons>
      </Main>
    </div>
  );
};

export default Home;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const YeongGi = styled.div`
  display: flex;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;

const BottomButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SingleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  border: none;
  background-color: rgb(248, 249, 250);
  border-radius: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
`;
