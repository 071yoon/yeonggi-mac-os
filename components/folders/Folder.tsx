import styled from "styled-components";
import Image from "next/image";

export default function Folder({ data }) {
  const onPage = () => {
    window.open(data.link, "_blank");
  };

  return (
    <Container onClick={onPage}>
      <SingleFolder>
        <Image
          src={`/assets/app-icons/${data.icon}`}
          alt={data.name}
          width={65}
          height={65}
        />
        <Name>{data.name}</Name>
      </SingleFolder>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 5rem;
`;

const SingleFolder = styled.div`
  position: absolute;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Name = styled.p`
  color: white;
  font-size: 0.6rem;
  font-weight: bold;
  margin: 0.1rem 0;
`;
