import React from "react";
import "../App.css";

const FooterLayout = () => {
  return (
    <div className="footer">
      <footer className="footer">
        <span className="text-muted">ⓒ 2021 Copyright: </span>
        <span className="text-muted ">
          <a
            className="text-dark"
            href="https://fnsvalue.co.kr/"
            style={{ textDecoration: "none" }}
          >
            fnsvalue.co.kr
          </a>
        </span>
        <br />
        <span>All Rights Reserved.</span>
      </footer>
    </div>
  );
  // 단순 푸터
};

export default FooterLayout;
