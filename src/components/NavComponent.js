import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Container } from "react-bootstrap";

// 헤더 네비게이션
function Navigation() {
  return (
    <div>
      {/* <Navbar>
        <Container>
          <Navbar.Brand href="#home">Book Store</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/main">
              Book Store
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  회원가입
                </a>
                <a className="nav-link active" href="#">
                  로그인
                </a>
                <a className="nav-link active" href="#">
                  장바구니
                </a>
                {/* <a class="nav-link disabled" href="#" tabindex="-1">
                  Disabled
                </a> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
