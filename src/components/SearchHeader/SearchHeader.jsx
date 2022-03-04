import React, { useRef } from "react";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.key !== "Enter") return;
    handleSearch();
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      {/* 로고추가 */}
      <h1>덕후를 위한 유투브입니당 'ㅅ'</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <legend>검색 입력 창</legend>
        <fieldset>
          <input ref={inputRef} onKeyPress={(event) => onKeyPress(event)} />
          <button onClick={() => onClick}>검색이다옹</button>
        </fieldset>
      </form>
    </header>
  );
};

export default SearchHeader;
