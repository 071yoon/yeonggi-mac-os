import React, { SetStateAction } from "react";
import styled from "styled-components";
import { folderInterface } from "../../interfaces/folder.interface";

export default function FinderNavigation({
  foldersLength,
  setPosition,
  folderIndex,
  setFolderIndex,
  x,
  y,
  name,
}: {
  foldersLength: number;
  setPosition: ({ newX, newY }) => void;
  folderIndex: number;
  setFolderIndex: React.Dispatch<SetStateAction<number>>;
  x: number;
  y: number;
  name: string;
}) {
  const onMouseDown = (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.screenX - clickEvent.screenX;
      const deltaY = moveEvent.screenY - clickEvent.screenY;
      setPosition({
        newX: x + deltaX,
        newY: y + deltaY,
      });
    };
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, { once: true });
  };

  const onLeft = () => {
    setFolderIndex((prev) => prev - 1);
  };

  const onRight = () => {
    setFolderIndex((prev) => prev + 1);
  };

  return (
    <Container onMouseDown={(clickEvent) => onMouseDown(clickEvent)}>
      <Left>
        <ArrowButton onClick={onLeft} disabled={folderIndex === 0}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </ArrowButton>
        <ArrowButton
          onClick={onRight}
          disabled={folderIndex === foldersLength - 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </ArrowButton>
        <Name>{name}</Name>
      </Left>
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
  background-color: rgba(242, 237, 235, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: bold;
`;

const Left = styled.div`
  display: flex;
`;

const ArrowButton = styled.button<{ disabled: boolean }>`
  width: 1.2rem;
  height: 1.2rem;
  border: none;
  border-radius: 0.2rem;
  background-color: inherit;
  font-size: 1.2rem;
  color: ${({ disabled }) => (disabled ? "rgba(0, 0, 0, 0.2)" : "black")};
  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "inherit" : "rgba(0, 0, 0, 0.06)"};
  }
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transform: scale(2);
  }
`;

const Name = styled.div`
  margin-left: 0.6rem;
`;
