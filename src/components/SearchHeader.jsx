import React, { memo, useRef } from "react";
import { Link } from "react-router-dom";

const SearchHeader = memo(({ onSearch }) => {
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
    <header className="header">
      <Link to="/">
        <img src="/assets/lg.png" alt="밍튜브 로고" />
      </Link>
      <h1 className="sr-only">덕후를 위한 유투브입니당 'ㅅ'</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <legend className="sr-only">검색 입력 창</legend>
        <fieldset>
          <input
            className="header__input"
            ref={inputRef}
            onKeyPress={(event) => onKeyPress(event)}
          />
          <button className="header__btn" onClick={() => onClick}>
            검색
          </button>
        </fieldset>
      </form>
    </header>
  );
});

export default SearchHeader;
