import React from "react";
import "../App.css";
// import Navigation from "../components/NavComponent";
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderLayout = () => {
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
      {/* <hr /> */}
    </header>
    // 네비게이션바
  );
};

export default HeaderLayout;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Container } from "react-bootstrap";

// // 헤더 네비게이션
// function Navigation() {
//   return (
//     <div>
//       {/* <Navbar>
//         <Container>
//           <Navbar.Brand href="#home">Book Store</Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-end">
//             <Navbar.Text>
//               Signed in as: <a href="#login">Mark Otto</a>
//             </Navbar.Text>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar> */}
//       <div>
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//           <div class="container-fluid">
//             <a class="navbar-brand" href="/main">
//               Book Store
//             </a>
//             <button
//               class="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNavAltMarkup"
//               aria-controls="navbarNavAltMarkup"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//               <div class="navbar-nav">
//                 <a class="nav-link active" aria-current="page" href="#">
//                   회원가입
//                 </a>
//                 <a class="nav-link active" href="#">
//                   로그인
//                 </a>
//                 <a class="nav-link active" href="#">
//                   장바구니
//                 </a>
//                 {/* <a class="nav-link disabled" href="#" tabindex="-1">
//                   Disabled
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Navigation;
