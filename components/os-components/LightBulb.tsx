import styled from "styled-components";

export default function LightBulb() {
  const onClose = () => {
    console.log("close");
  };

  const onMinimize = () => {
    console.log("minimize");
  };

  const onMaximize = () => {
    console.log("maximize");
  };

  return (
    <Container>
      <button style={{ backgroundColor: "#ff0000" }} />
      <button style={{ backgroundColor: "rgb(255, 213, 0)" }} />
      <button style={{ backgroundColor: "#15cf37" }} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    margin: 0.2rem;
    border: none;
  }
`;
