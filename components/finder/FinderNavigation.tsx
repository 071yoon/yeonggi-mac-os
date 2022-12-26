import React, { SetStateAction } from "react";
import styled from "styled-components";
import { folderInterface } from "../../interfaces/folder.interface";

export default function FinderNavigation({
  setPosition,
  x,
  y,
  data,
}: {
  setPosition: React.Dispatch<
    SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  x: number;
  y: number;
  data: folderInterface;
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

  console.log(data);

  return (
    <Container onMouseDown={(clickEvent) => onMouseDown(clickEvent)}>
      {/* <div>&lt; &gt;</div> */}
      <div>{data.name}</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.6rem;
  background-color: rgba(241, 241, 241, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
