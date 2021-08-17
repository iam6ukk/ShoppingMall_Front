import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";

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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/main">
              Book Store
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">
                  회원가입
                </a>
                <a class="nav-link active" href="#">
                  로그인
                </a>
                <a class="nav-link active" href="#">
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
