import styled from "styled-components";

export default function SingleNavDetail({ item }) {
  return (
    <Container>
      {item.options?.map((singleItem, index) => (
        <>
          {singleItem.border === true ? (
            <div
              style={{
                width: "calc(100% - 1rem)",
                height: "1px",
                backgroundColor: "#93939386",
                margin: "0 0.5rem",
              }}
            />
          ) : (
            <NavDetail key={index}>{singleItem.content}</NavDetail>
          )}
        </>
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;

  top: 1.215rem;
  left: 0;
  background-color: #ffffff87;
  border-radius: 0.2rem;
  inline-size: max-content;
`;

const NavDetail = styled.div`
  margin: 0.2rem;
  padding: 0.2rem 0.6rem;
  font-weight: 400;
  font-size: 0.7rem;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgb(81, 136, 255);
  }
`;
