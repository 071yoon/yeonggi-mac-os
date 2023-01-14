import styled from "styled-components";

export default function DockDetail({ item }) {
  return (
    <Container>
      <NameContainer>
        <Name>{item.name}</Name>
      </NameContainer>
      <Down>
        <svg
          width="326"
          height="174"
          viewBox="0 0 326 174"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M315.411 0.776692C324.32 0.776692 328.782 11.5481 322.482 17.8478L169.848 170.482C165.943 174.388 159.611 174.388 155.706 170.482L3.07111 17.8478C-3.22854 11.5481 1.23313 0.776692 10.1422 0.776692L315.411 0.776692Z"
            fill="white"
            fill-opacity="0.4"
          />
        </svg>
      </Down>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: -3.8rem;
  display: flex;
  gap: 0rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NameContainer = styled.div`
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
  background-color: rgba(255, 255, 255, 0.4);
`;

const Name = styled.div`
  font-size: 0.8rem;
`;

const Down = styled.div`
  width: 1rem;
  margin-top: -1px;
  svg {
    fill: rgba(255, 255, 255, 0.2);
    width: 100%;
    height: 100%;
  }
`;
