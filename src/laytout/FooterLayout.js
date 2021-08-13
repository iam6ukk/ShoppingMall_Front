import React from "react";
import "../App.css";

const FooterLayout = () => {
  return (
    <footer>
      <span className="text-muted">ⓒ 2021 Copyright: </span>
      <span className="text-muted ">
        <a
          className="text-dark"
          href="https://fnsvalue.co.kr/"
          style={{ textDecoration: "none" }}
        >
          fnsvalue.co.kr
        </a>
      </span>{" "}
      <span>All Rights Reserved.</span>
    </footer>
  );
  // 단순 푸터
};

export default FooterLayout;
