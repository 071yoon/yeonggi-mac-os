import { useState } from "react";
import styled from "styled-components";
import { folderInterface } from "../../interfaces/folder.interface";
import Folder from "../folders/Folder";

export default function FinderItems({ data }: { data: folderInterface }) {
  const [clickedFolder, setClickedFolder] = useState<number | null>(null);

  const setClickedFolderHandler = (folderIndex: number | null) => {
    setClickedFolder(folderIndex);
  };

  const onDisable = () => {
    if (clickedFolder !== null) setClickedFolder(null);
  };

  return (
    <Container onClick={onDisable}>
      {data.children?.map((item, index) => {
        return (
          <Folder
            key={Symbol(index).toString()}
            data={item}
            index={index}
            clickedFolder={clickedFolder}
            setClickedFolderHandler={setClickedFolderHandler}
            titleColor={"black"}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 2.4rem);
  background-color: rgba(255, 255, 255, 0.95);
  padding: 0.2rem;
  display: flex;
  flex-wrap: wrap;
`;
