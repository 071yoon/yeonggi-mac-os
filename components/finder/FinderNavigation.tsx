import React, { SetStateAction } from "react";
import styled from "styled-components";

export default function FinderNavigation({
  setPosition,
  x,
  y,
}: {
  setPosition: React.Dispatch<
    SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  x: number;
  y: number;
}) {
  const onMouseDown = (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.screenX - clickEvent.screenX;
      const deltaY = moveEvent.screenY - clickEvent.screenY;
      setPosition({
        x: x + deltaX,
        y: y + deltaY,
      });
    };
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, { once: true });
  };

  return <Container onMouseDown={(clickEvent) => onMouseDown(clickEvent)} />;
}

const Container = styled.div`
  width: 100%;
  height: 2.4rem;
  background-color: rgba(241, 241, 241, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
