import { useState } from "react";
import { dockData } from "../../../utils/dock-data";
import styled from "styled-components";
import SingleDock from "./SingleDock";

export default function Dock() {
  const [focus, setFocus] = useState<number | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [enabledDocks, setEnabledDocks] = useState<number[]>([]);

  const onFocus = (index: number) => {
    setFocus(index);
  };

  const enableDock = (index: number) => {
    setEnabledDocks([...enabledDocks, index]);
  };

  const onHoverDock = () => {
    setIsReady(true);
  };

  const onLeaveDock = () => {
    setIsReady(false);
  };

  return (
    <Container>
      <DockBar>
        {dockData.map((item, index) => (
          <SingleDock
            key={index}
            item={item}
            index={index}
            onFocus={onFocus}
            focus={focus}
            enableDock={enableDock}
            isEnabled={enabledDocks.includes(index)}
            isReady={isReady}
          />
        ))}
      </DockBar>
    </Container>
  );

  return (
    <Container onMouseOver={onHoverDock} onMouseLeave={onLeaveDock}>
      <DockBar>
        {dockData.map((item, index) => (
          <SingleDock
            key={index}
            item={item}
            index={index}
            onFocus={onFocus}
            focus={focus}
            enableDock={enableDock}
            isEnabled={enabledDocks.includes(index)}
            isReady={isReady}
          />
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
