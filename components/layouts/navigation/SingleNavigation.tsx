import styled from "styled-components";

export default function SingleNavigation({ item }) {
  return <Container>{item.name}</Container>;
}

const Container = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.7rem;
  padding: 0.1rem 0.6rem;
  border-radius: 0.2rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
