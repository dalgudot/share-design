import styled from "styled-components";
import { useRef } from "react";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Header>
      <h1>search header</h1>
      <input
        ref={inputRef}
        type="search"
        placeholder="search"
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onClick}>
        검색
      </button>
    </Header>
  );
};

export default SearchHeader;

const Header = styled.header`
  width: 100vw;
  height: 30vh;
  display: flex;
  justify-content: space-between;

  input {
    height: 16vh;
  }

  button {
    height: 16vh;
    font-size: 24px;
    font-weight: 100;
    color: var(--white);
    padding: 18px 36px;
    background-color: transparent;
    border: solid 1px var(--white);
  }
`;
