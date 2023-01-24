import Image from "next/image";
import styled from "styled-components";
import DockDetail from "./DockDetail";
import { useState, useRef } from "react";

const CONTAINER_SIZE = 2.8;

const getZoomRatio = (focus: number | null, index: number) => {
  return 1;
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

export default function SingleDock({
  item,
  index,
  onFocus,
  focus,
  enableDock,
  isEnabled,
  isReady,
}) {
  const zoomRatio = getZoomRatio(focus, index);
  const [isClicked, setIsClicked] = useState(false);
  const [width, setWidth] = useState(CONTAINER_SIZE);
  const imgRef = useRef(null);

  const onMove = (e) => {
    if (isReady && e) {
      // get my current x and y position and compare with icon
      // scale the icon based on the distance

      const left = imgRef.current.getBoundingClientRect().left;
      const right = imgRef.current.getBoundingClientRect().right;
      let distance = Math.abs((left + right) / 2 - e.clientX) * 0.03;
      distance = Math.max(0.7, distance);
      distance = Math.min(1, distance);
      setWidth(CONTAINER_SIZE / distance);
    }
  };

  const onLeave = () => {
    onFocus(null);
  };

  const onHover = () => {
    onFocus(index);
  };

  const onClick = () => {
    if (isEnabled) return;
    setIsClicked(true);
    enableDock(index);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <Container
      onMouseLeave={onLeave}
      onMouseOver={onHover}
      onClick={onClick}
      onMouseMove={onMove}
      ref={imgRef}
      style={{
        width: `${width}rem`,
        height: `${width}rem`,
        marginBottom: `${width - CONTAINER_SIZE}rem`,
      }}
    >
      <OnLight isEnabled={isEnabled} />
      {focus === index ? <DockDetail item={item} /> : null}
      <ImgContainer zoomRatio={zoomRatio} isClicked={isClicked}>
        <Image src={`/assets/app-icons/${item.image}`} alt={item.name} fill />
      </ImgContainer>
    </Container>
  );
}

const OnLight = styled.div<{ isEnabled: boolean }>`
  position: absolute;
  display: ${({ isEnabled }) => (isEnabled ? "block" : "none")};
  transform: none;
  bottom: 0.2rem;
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
`;

const ImgContainer = styled.div<{ zoomRatio: number; isClicked: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.05s ease-in-out;
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
        transform: scale(0.9, 1.1) translateY(-30px);
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
`;

const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  font-size: 0.7rem;
  padding: 0.1rem 0.2rem;
  border-radius: 1rem;
`;
