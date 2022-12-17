import { dockData } from "../../../utils/dock-data";
import styled from "styled-components";
import SingleDock from "./SingleDock";

export default function Dock() {
  return (
    <Container>
      <DockBar>
        {dockData.map((item, index) => (
          <SingleDock key={index} item={item} />
        ))}
      </DockBar>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
`;

const DockBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;
