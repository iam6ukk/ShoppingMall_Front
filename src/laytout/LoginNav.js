import { Typography } from "@material-ui/core";
import React from "react";
import MallService from "../service/MallService";

const LoginNav = (props) => {
  const onClickLogout = () => {
    sessionStorage.removeItem("LoginUser");
    // Loginuser 세션 삭제 (remtoeItem = 특정 세션 삭제)
    MallService.logOutUser();
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/main">
            Book Store
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="/signup">
                {/*aria-current="page" */}
                회원가입
              </a>
              {/* 회원가입 페이지 이동 */}
              <a
                className="nav-link active"
                href="/main"
                onClick={onClickLogout}
              >
                로그아웃
              </a>
              {/* 로그아웃 */}
              <a className="nav-link active" href="/cart">
                장바구니
              </a>
              {/* 장바구니 페이지 이동 */}
            </div>
            <div>
              <Typography>{props.custid}님 반갑습니다.</Typography>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LoginNav;
