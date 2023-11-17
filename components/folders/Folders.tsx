import { useState } from "react";
import styled from "styled-components";
import Folder from "./Folder";
import { useClickFolder } from "../../hooks/useClickFolder";
import { folderData } from "../../utils/folder-data";

export default function Folders() {
  const { clickedFolder, handleClickFolder, onDisable } = useClickFolder();

  return (
    <Container onClick={onDisable}>
      <FoldersContainer>
        {folderData.map((data, index) => (
          <Folder
            key={Symbol(index).toString()}
            data={data}
            index={index.toString()}
            clickedFolder={clickedFolder}
            handleClickFolder={handleClickFolder}
            titleColor={"white"}
          />
        ))}
      </FoldersContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 1rem;
  width: 100vw;
  height: calc(100% - 4.2rem);
`;

const FoldersContainer = styled.div`
  margin-top: 0.6rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;
