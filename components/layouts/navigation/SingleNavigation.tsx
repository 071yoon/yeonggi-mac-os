import styled from "styled-components";

export default function SingleNavigation({ item, isClicked }) {
  return (
    <Container>
      <SingleNav isClicked={isClicked}>{item.name}</SingleNav>
      {isClicked && (
        <SingleNavDetailContainer>
          {item.options?.map((item, index) => (
            <SingleNavDetail key={index}>{item}</SingleNavDetail>
          ))}
        </SingleNavDetailContainer>
      )}
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

const SingleNav = styled.button<{ isClicked: boolean }>`
  background-color: ${(props) =>
    props.isClicked ? "rgba(0, 0, 0, 0.1)" : "transparent"};
  border: none;
  height: 100%;
  font-size: 0.7rem;
  padding: 0.1rem 0.6rem;
  border-radius: 0.2rem;
`;

const SingleNavDetailContainer = styled.div`
  position: absolute;

  top: 1.2rem;
  left: 0;
  background-color: rgba(255, 255, 255, 0.623);
  border-radius: 0.2rem;
  inline-size: max-content;
`;

const SingleNavDetail = styled.div`
  margin: 0.2rem;
  padding: 0.2rem 0.6rem;
  font-size: 0.7rem;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgb(81, 136, 255);
  }
`;
