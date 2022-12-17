import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import finderData from "../../../data/finderData.json";

export default function Navigation() {
  const [date, setDate] = useState(new Date());
  setInterval(() => {
    setDate(new Date());
  }, 1000);
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  return (
    <Container>
      <Align>
        <Image
          src="/assets/svg/apple-logo.svg"
          alt="apple logo"
          width={14.652}
          height={18}
          style={{ marginRight: "0.6rem" }}
        />
        {finderData.map((item, index) => (
          <NavigationButton key={index}>{item.name}</NavigationButton>
        ))}
      </Align>
      <Align>
        {date.getMonth() + 1}월 {date.getDate()}일 ({days[date.getDay() - 1]}){" "}
        {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
      </Align>
    </Container>
  );
}

const NavigationButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0 0.6rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

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
`;
