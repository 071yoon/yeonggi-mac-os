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
      <Button
        style={{
          backgroundColor: "#ff5a5a",
        }}
      >
        <Image
          src="/assets/svg/close.svg"
          alt="close"
          width={6}
          height={6}
          onClick={onClose}
        />
      </Button>
      <Button style={{ backgroundColor: "rgb(255, 191, 0)" }}>
        <Image
          src="/assets/svg/minimize.svg"
          alt="minimize"
          width={6}
          height={6}
        />
      </Button>
      <Button style={{ backgroundColor: "#41d45c" }}>
        <Image
          style={{ marginTop: "0.1rem" }}
          src="/assets/svg/expand.svg"
          alt="maximize"
          width={10}
          height={10}
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
