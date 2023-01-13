import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";

const getZoomRatio = (focus: number | null, index: number) => {
  if (focus === null) return 1;
  const diff = Math.abs(focus - index);
  switch (diff) {
    case 0:
      return 1.6;
    case 1:
      return 1.4;
    case 2:
      return 1.1;
    default:
      return 1;
  }
};

export default function SingleDock({ item, index, onFocus, focus }) {
  const zoomRatio = getZoomRatio(focus, index);
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);

  const bounceApp = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <Container
      onMouseLeave={() => onFocus(null)}
      onMouseOver={() => onFocus(index)}
      onClick={bounceApp}
      zoomRatio={zoomRatio}
      isClicked={isClicked}
    >
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
  background-color: rgba(255, 255, 255, 0.5);
`;

const Container = styled.button<{ zoomRatio: number; isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  font-size: 0.7rem;
  padding: 0.1rem 0.6rem;
  border-radius: 1rem;
  transition: transform 0.05s ease-in-out;
  margin-bottom: ${({ zoomRatio }) => (zoomRatio - 1) * 3}rem;
  transform: scale(${({ zoomRatio }) => zoomRatio});
  img {
    animation: ${({ isClicked }) => (isClicked ? `bounce 1s infinite` : "")};

    @keyframes bounce {
      0% {
        transform: scale(1, 1) translateY(0);
      }
      10% {
        transform: scale(1.1, 0.9) translateY(0);
      }
      30% {
        transform: scale(0.9, 1.1) translateY(-50px);
      }
      50% {
        transform: scale(1, 1) translateY(0);
      }
      57% {
        transform: scale(1, 1) translateY(-7px);
      }
      64% {
        transform: scale(1, 1) translateY(0);
      }
      100% {
        transform: scale(1, 1) translateY(0);
      }
    }
  }

  /* &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  } */
`;
