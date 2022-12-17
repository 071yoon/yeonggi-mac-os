import Image from "next/image";
import styled from "styled-components";

export default function SingleDock({ item }) {
  return (
    <Container>
      <Image
        src={`/assets/app-icons/${item.image}`}
        alt={item.name}
        width={50}
        height={50}
      />
      <OnLight />
    </Container>
  );
}

const OnLight = styled.div`
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
`;

const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  font-size: 0.7rem;
  padding: 0.1rem 0.6rem;
  border-radius: 1rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
