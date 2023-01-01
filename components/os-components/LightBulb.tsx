import styled from "styled-components";
import Image from "next/image";

export default function LightBulb({
  removeFolder,
}: {
  removeFolder: () => void;
}) {
  const onClose = () => {
    removeFolder();
  };

  const onMinimize = () => {
    console.log("minimize");
  };

  const onMaximize = () => {
    console.log("maximize");
  };

  return (
    <Container>
      <Button style={{ backgroundColor: "#ff0000" }}>
        <Image
          src="/assets/svg/x.svg"
          alt="apple logo"
          width={10}
          height={10}
          onClick={onClose}
        />
      </Button>
      <Button style={{ backgroundColor: "rgb(255, 191, 0)" }}>
        <Image
          src="/assets/svg/minimize.svg"
          alt="apple logo"
          width={8}
          height={8}
        />
      </Button>
      <Button style={{ backgroundColor: "#15cf37" }}>
        <Image
          src="/assets/svg/maximize.svg"
          alt="apple logo"
          width={6}
          height={6}
        />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    img {
      visibility: visible;
    }
  }
`;

const Button = styled.button`
  position: relative;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  margin: 0.2rem;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    visibility: hidden;
  }
`;
