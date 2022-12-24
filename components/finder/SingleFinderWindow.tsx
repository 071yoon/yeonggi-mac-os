import styled from "styled-components";
import LightBulb from "../os-components/LightBulb";
import FinderNavigation from "./FinderNavigation";
import FinderItems from "./FinderItems";

export default function SingleFinderWindow() {
  return (
    <Container>
      <Left>
        <LightBulb />
      </Left>
      <Right>
        <FinderNavigation />
        <FinderItems />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  border-radius: 0.6rem;
  top: 10rem;
  left: 5rem;
  width: 30rem;
  height: 15rem;
  display: flex;
`;

const Left = styled.div`
  width: 6rem;
  height: 100%;
  background-color: rgba(206, 206, 206, 0.95);
  padding-left: 0.6rem;
  padding-top: 0.6rem;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: start;
  justify-content: flex-start;
`;

const Right = styled.div`
  width: 100%;
  height: 100%;
`;
