import { useEffect } from "react";
import styled from "styled-components";
import { useClickFolder } from "../../hooks/useClickFolder";
import { folderInterface } from "../../interfaces/folder.interface";
import Folder from "../folders/Folder";

export default function FinderItems({ data }: { data: folderInterface }) {
  const { clickedFolder, handleClickFolder, onDisable } = useClickFolder();

  useEffect(() => {
    onDisable();
  }, [data]);

  return (
    <Container onClick={onDisable}>
      {data.children?.map((item, index) => {
        return (
          <Folder
            key={Symbol(index).toString()}
            data={item}
            index={index}
            clickedFolder={clickedFolder}
            handleClickFolder={handleClickFolder}
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
