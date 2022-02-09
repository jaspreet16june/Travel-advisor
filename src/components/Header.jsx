import React from "react";
import "../components/header.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const Header = () => {
  return (
    <div className="header">
      <div className="heading">
        <h3>Travel Advisor </h3>
      </div>
      <div className="side_option">
        <h3>Explore new Places</h3>
        <div className="input_box">
          <SearchOutlinedIcon className='icon' />
          <input placeholder="Search.." />
        </div>
      </div>
    </div>
  );
};

export default Header;
