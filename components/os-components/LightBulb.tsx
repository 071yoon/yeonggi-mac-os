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
          backgroundColor: "#ff0000",
        }}
      >
        <Image
          src="/assets/svg/close.svg"
          alt="close"
          width={9}
          height={9}
          onClick={onClose}
        />
      </Button>
      <Button style={{ backgroundColor: "rgb(255, 191, 0)" }}>
        <Image
          src="/assets/svg/minimize.svg"
          alt="minimize"
          width={9}
          height={9}
        />
      </Button>
      <Button style={{ backgroundColor: "#15cf37" }}>
        <Image
          src="/assets/svg/expand.svg"
          alt="maximize"
          width={12}
          height={12}
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
  width: 0.8rem;
  height: 0.8rem;
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
