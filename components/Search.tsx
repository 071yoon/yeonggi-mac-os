import React, { useState } from "react";
import styled from "styled-components";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");

  const changeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchIconContainer>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.0004 21L16.6504 16.65"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SearchIconContainer>
      <Input
        placeholder="나의 정보를 검색해보아요"
        onChange={changeSearchInput}
        value={searchInput}
      />
    </SearchContainer>
  );
}

const Input = styled.input`
  padding: 1rem;
  width: 90%;
  height: 100%;
  font-size: 1rem;
  color: black;
  background-color: transparent;
  outline: none;
  border: none;
  font-family: IBMPlexSansKRRegular;
`;

const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;

const SearchContainer = styled.div`
  overflow: hidden;
  width: 80%;
  border-radius: 10rem;
  border: solid 0.1rem #dee1e5;
  display: flex;
  align-items: center;
`;
