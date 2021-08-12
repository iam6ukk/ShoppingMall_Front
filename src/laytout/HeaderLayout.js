import React from "react";
import "../App.css";
import Navigation from "../components/NavComponent";

const HeaderLayout = () => {
  return (
    <div className="header">
      <Navigation />
      <hr />
    </div>
    // 네비게이션바 + 수평선
  );
};

export default HeaderLayout;
