import styled from "styled-components";
import SingleNavDetail from "./SingleNavDetail";

export default function SingleNavigation({ item, isClicked, isBold = false }) {
  return (
    <Container>
      <SingleNav isClicked={isClicked} isBold={isBold}>
        {item.name}
      </SingleNav>
      {isClicked && <SingleNavDetail item={item} />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SingleNav = styled.button<{ isClicked: boolean; isBold: boolean }>`
  background-color: ${(props) =>
    props.isClicked ? "rgba(0, 0, 0, 0.1)" : "transparent"};
  border: none;
  font-weight: ${(props) => props.isBold && "bold"};
  height: 100%;
  font-size: 0.7rem;
  padding: 0.1rem 0.6rem;
  border-radius: 0.2rem;
`;
