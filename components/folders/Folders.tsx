import styled from "styled-components";
import Folder from "./Folder";
import { folderData } from "../../utils/folder-data";

export default function Folders() {
  return (
    <Container>
      {folderData.map((data, index) => (
        <Folder key={Symbol(index).toString()} data={data} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 0.6rem;
`;
