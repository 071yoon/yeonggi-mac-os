import styled from "styled-components";
import Image from "next/image";
import MyDate from "./MyDate";
import { finderData } from "../../../utils/finder-data";
import SingleNavigation from "./SingleNavigation";

export default function Navigation() {
  return (
    <Container>
      <Align>
        <div
          style={{
            width: "1.2rem",
            height: "0.8rem",
            position: "relative",
            marginRight: "0.4rem",
          }}
        >
          <Image
            src="/assets/svg/apple-logo.svg"
            alt="apple logo"
            sizes="0.8rem"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        {finderData.map((item, index) => (
          <SingleNavigation key={index} item={item} />
        ))}
      </Align>
      <Align>
        <MyDate />
      </Align>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  height: 1.2rem;
  width: 100%;
`;

const Align = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0 0.5rem;
  height: 100%;
  align-items: center;
`;
