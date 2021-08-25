import React from "react";
import LoginNav from "../laytout/LoginNav";
import LogoutNav from "../laytout/LogoutNav";

const PurchaseComponent = () => {
  return (
    <div>
      {sessionStorage.getItem("LoginUser") == null ? (
        <LogoutNav />
      ) : (
        // 세션의 key값이 null이면 LogoutNav 출력
        <LoginNav />
        // 새션의 key값이 LoginUser이면 LoginNav 출력
      )}
      <div>
        <h3>content</h3>
      </div>
    </div>
  );
};

export default PurchaseComponent;
