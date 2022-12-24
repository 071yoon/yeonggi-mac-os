import { useState } from "react";
import styled from "styled-components";
import Folder from "./Folder";
import { folderData } from "../../utils/folder-data";

export default function Folders() {
  const [clickedFolder, setClickedFolder] = useState<number | null>(null);

  const setClickedFolderHandler = (folderIndex: number | null) => {
    setClickedFolder(folderIndex);
  };

  const onDisable = () => {
    if (clickedFolder !== null) setClickedFolder(null);
  };

  return (
    <Container onClick={onDisable}>
      <FoldersContainer>
        {folderData.map((data, index) => (
          <Folder
            key={Symbol(index).toString()}
            data={data}
            index={index}
            clickedFolder={clickedFolder}
            setClickedFolderHandler={setClickedFolderHandler}
          />
        ))}
      </FoldersContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100% - 4.2rem);
`;

const FoldersContainer = styled.div`
  margin-top: 0.6rem;
`;
