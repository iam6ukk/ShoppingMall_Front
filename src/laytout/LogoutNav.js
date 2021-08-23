import React from "react";

function LogoutNav() {
  return (
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
            <a className="nav-link active" href="/signin">
              로그인
            </a>
            {/* 로그인 페이지 이동 */}
            <a className="nav-link active" href="/cart">
              장바구니
            </a>
            {/* 장바구니 페이지 이동 */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default LogoutNav;
