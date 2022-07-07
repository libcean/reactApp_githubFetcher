import React, { useRef } from "react";
import "jquery"

const SearchBox = ({ handleSearch }) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="search" id="myForm" placeholder="UserName eg: Libcean" />
        <button type="submit">Fetch User</button>
      </form>

      <h3>App Developed By: <a href="https://wa.me/2348033368982?text=Hello%20FastLink,%20.%20You%20did%20great%20job." className="fastLink">FAST LINK WEB SEVICES</a></h3>
    </div>
  );
};


export default SearchBox;
