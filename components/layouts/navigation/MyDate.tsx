import { useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

export default function MyDate() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    setDate(dayjs().format());
  }, []);

  setInterval(() => {
    setDate(dayjs().format());
  }, 250);

  const days = ["일", "월", "화", "수", "목", "금", "토"];

  if (!date) {
    return <>1월 1일 (월) 00:00</>;
  }

  return (
    <Container>
      {dayjs(date).format("M월 D일") + " (" + days[dayjs(date).day()] + ")"}
      <Time>{dayjs(date).format("HH:mm:ss")}</Time>
    </Container>
  );
}

const Container = styled.div`
  font-size: 0.7rem;
  display: flex;
`;

const Time = styled.div`
  width: 3rem;
  margin-left: 0.4rem;
`;
