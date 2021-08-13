import React from "react";
import "../App.css";
import Navigation from "../components/NavComponent";

const HeaderLayout = () => {
  return (
    <header>
      <Navigation />
      <hr />
    </header>
    // 네비게이션바 + 수평선
  );
};

export default HeaderLayout;
