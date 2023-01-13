import Image from "next/image";
import styled from "styled-components";

const getZoomRatio = (focus: number | null, index: number) => {
  if (focus === null) return 1;
  const diff = Math.abs(focus - index);
  switch (diff) {
    case 0:
      return 1.6;
    case 1:
      return 1.4;
    case 2:
      return 1.1;
    default:
      return 1;
  }
};

export default function SingleDock({ item, index, onFocus, focus }) {
  const zoomRatio = getZoomRatio(focus, index);

  return (
    <Container
      onMouseLeave={() => onFocus(null)}
      onMouseOver={() => onFocus(index)}
      zoomRatio={zoomRatio}
    >
      <Image
        src={`/assets/app-icons/${item.image}`}
        alt={item.name}
        width={50}
        height={50}
      />
      <OnLight />
    </Container>
  );
}

const OnLight = styled.div`
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
`;

const Container = styled.button<{ zoomRatio }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  font-size: 0.7rem;
  padding: 0.1rem 0.6rem;
  border-radius: 1rem;
  transition: transform 0.05s ease-in-out;
  margin-bottom: ${({ zoomRatio }) => (zoomRatio - 1) * 3}rem;
  transform: scale(${({ zoomRatio }) => zoomRatio});

  /* &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  } */
`;
