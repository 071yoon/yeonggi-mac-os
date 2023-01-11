import { useEffect, useState } from "react";
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
  const DEFAULT_W = 600;
  const DEFAULT_H = 300;
  const [folderStack, setFolderStack] = useState<folderInterface[]>([data]);
  const [folderIndex, setFolderIndex] = useState<number>(0);
  const [{ x, y, w, h }, setWindow] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  });

  useEffect(() => {
    setWindow({
      x: 0,
      y: 0,
      w: DEFAULT_W,
      h: DEFAULT_H,
    });
  }, []);

  const setPosition = ({ newX, newY }: { newX: number; newY: number }) => {
    setWindow({
      x: newX,
      y: newY,
      w,
      h,
    });
  };

  const setSize = ({ newW, newH }: { newW: number; newH: number }) => {
    setWindow({
      x,
      y,
      w: newW,
      h: newH,
    });
  };

  const onMouseDown = ({
    clickEvent,
    yAxis,
    xAxis,
  }: {
    clickEvent: React.MouseEvent<Element, MouseEvent>;
    yAxis: boolean;
    xAxis: boolean;
  }) => {
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.screenX - clickEvent.screenX;
      const deltaY = moveEvent.screenY - clickEvent.screenY;
      if (yAxis && xAxis) {
        setSize({
          newW: w + deltaX,
          newH: h + deltaY,
        });
      } else if (yAxis) {
        setSize({
          newW: w,
          newH: h + deltaY,
        });
      } else if (xAxis) {
        setSize({
          newW: w + deltaX,
          newH: h,
        });
      } else {
        return;
      }
    };
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, { once: true });
  };

  const removeThisFolder = (data: folderInterface) => {
    removeFolder(data);
  };

  const pushFolder = (folder: folderInterface) => {
    setFolderStack((prev) => [...prev, folder]);
    setFolderIndex((prev) => prev + 1);
  };

  console.log(folderStack);

  return (
    <Container x={x} y={y} w={w} h={h}>
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
      <RightBorder
        onMouseDown={(clickEvent) =>
          onMouseDown({ clickEvent, yAxis: false, xAxis: true })
        }
      />
      <DownBorder
        onMouseDown={(clickEvent) =>
          onMouseDown({ clickEvent, yAxis: true, xAxis: false })
        }
      />
      <RightDownCorner
        onMouseDown={(clickEvent) =>
          onMouseDown({ clickEvent, yAxis: true, xAxis: true })
        }
      />
    </Container>
  );
}

const Container = styled.div<{ x: number; y: number; w: number; h: number }>`
  position: relative;
  transform: translate(${({ x }) => x}px, ${({ y }) => y}px);
  overflow: hidden;
  border-radius: 0.6rem;
  top: 10rem;
  left: 5rem;
  width: ${({ w }) => w}px;
  height: ${({ h }) => h}px;
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

const RightDownCorner = styled.div`
  position: absolute;
  cursor: nwse-resize;
  height: 1rem;
  bottom: 0;
  right: 0;
  width: 1rem;
`;

const RightBorder = styled.div`
  position: absolute;
  cursor: ew-resize;
  height: 100%;
  bottom: 0;
  right: 0;
  width: 0.5rem;
`;

const DownBorder = styled.div`
  position: absolute;
  cursor: ns-resize;
  height: 0.5rem;
  bottom: 0;
  left: 0;
  width: 100%;
`;
