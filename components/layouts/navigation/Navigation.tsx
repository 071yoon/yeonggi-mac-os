import styled from "styled-components";
import Image from "next/image";

export default function Navigation() {
  // get finder data

  return (
    <Container>
      <Align>
        <Image
          src="/assets/svg/apple-logo.svg"
          alt="apple logo"
          width={14.652}
          height={18}
        />
        Finder 파일 편집 보기 이동 윈도우 도움말
      </Align>
      <Align>12월 15일 (목) 오전 12:21</Align>
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
  gap: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0 0.5rem;
`;
