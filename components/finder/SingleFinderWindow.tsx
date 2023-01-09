import { useState } from "react";
import styled from "styled-components";
import { folderInterface } from "../../interfaces/folder.interface";
import LightBulb from "../os-components/LightBulb";
import FinderNavigation from "./FinderNavigation";
import FinderItems from "./FinderItems";

export default function SingleFinderWindow({
  data,
  removeFolder,
}: {
  data: folderInterface;
  removeFolder: (data: folderInterface) => void;
}) {
  const [folderStack, setFolderStack] = useState<folderInterface[]>([data]);
  const [folderIndex, setFolderIndex] = useState<number>(0);
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

  const removeThisFolder = (data: folderInterface) => {
    removeFolder(data);
  };

  const pushFolder = (folder: folderInterface) => {
    setFolderStack((prev) => [...prev, folder]);
    setFolderIndex((prev) => prev + 1);
  };

  console.log(folderStack);

  return (
    <Container x={x} y={y}>
      <Left>
        <LightBulb removeFolder={() => removeThisFolder(data)} />
      </Left>
      <Right>
        <FinderNavigation
          foldersLength={folderStack.length}
          folderIndex={folderIndex}
          setFolderIndex={setFolderIndex}
          setPosition={setPosition}
          x={x}
          y={y}
          name={data.name}
        />
        <FinderItems data={folderStack[folderIndex]} pushFolder={pushFolder} />
      </Right>
    </Container>
  );
}

const Container = styled.div<{ x: number; y: number }>`
  position: absolute;
  transform: translate(${({ x }) => x}px, ${({ y }) => y}px);
  overflow: hidden;
  border-radius: 0.6rem;
  top: 10rem;
  left: 5rem;
  width: 30rem;
  height: 15rem;
  display: flex;
`;

const Left = styled.div`
  width: 6rem;
  height: 100%;
  background-color: rgba(206, 206, 206, 0.95);
  padding-left: 0.6rem;
  padding-top: 0.6rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: start;
  justify-content: flex-start;
`;

const Right = styled.div`
  width: 100%;
  height: 100%;
`;
