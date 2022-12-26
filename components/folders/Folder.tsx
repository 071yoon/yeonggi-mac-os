import styled from "styled-components";
import Image from "next/image";
import folderStore from "../../stores/folderStore";

export default function Folder({
  data,
  setClickedFolderHandler,
  clickedFolder,
  index,
}) {
  const alreadyClicked = clickedFolder === index;
  const { addFolder } = folderStore();

  const onPage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (alreadyClicked) {
      if (data.type === "folder") addFolder(data);
      else window.open(data.link, "_blank");
    } else {
      setClickedFolderHandler(index);
    }
  };

  return (
    <Container>
      <SingleFolder onClick={onPage} isClicked={index === clickedFolder}>
        <Image
          src={`/assets/app-icons/${data.icon}`}
          alt={data.name}
          width={65}
          height={65}
          style={{ borderRadius: "0.4rem" }}
        />
        <Name>{data.name}</Name>
      </SingleFolder>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 5rem;
`;

const SingleFolder = styled.div<{ isClicked: boolean }>`
  position: absolute;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 0.2rem;
    ${({ isClicked }) =>
      isClicked
        ? `
            border: 2px solid rgba(255, 255, 255, 0.3);
            background-color: rgba(0, 0, 0, 0.3);
          `
        : `
            border: 2px solid rgba(0, 0, 0, 0);
          `}
  }
  p {
    ${({ isClicked }) =>
      isClicked
        ? `
        background-color: rgb(29, 82, 253);
    `
        : `
        background-color: none;
    `}
  }
`;

const Name = styled.p`
  color: white;
  font-size: 0.6rem;
  font-weight: bold;
  margin: 0.1rem 0;
  padding: 0 0.2rem;
  border-radius: 0.2rem;
`;
