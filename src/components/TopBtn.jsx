import React from "react";
import useTopPage from "../hooks/topPage";
import "../styles/components/topbtn.scss";

const TopBtn = () => {
  const scrollTop = useTopPage();

  return (
    <button className="top-btn" onClick={scrollTop}>
      TOP
    </button>
  );
};

export default TopBtn;
