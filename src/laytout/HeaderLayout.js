import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoutNav from "./LogoutNav";
import LoginNav from "./LoginNav";

// const HeaderLayout = () => {
const LoginHeaderLayout = (props) => {
  return (
    <header>
      <LoginNav />
    </header>
  );
};

const LogoutHeaderLayout = () => {
  return (
    <header>
      <LogoutNav />
    </header>
  );
};

// export default HeaderLayout;

export { LoginHeaderLayout, LogoutHeaderLayout };

// return (
//   <header>
//     {sessionStorage.getItem("LoginUser") == null ? (
//       // 세션의 key값이 LoginUser가 아니면 LogoutNav를
//       // LoginUser가 맞으면 LoginNav를 출력한다.
//       <LogoutNav />
//     ) : (
//       <LoginNav />
//     )}
//     {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/main">
//           Book Store
//         </a>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <a className="nav-link active" href="/signup">
//               회원가입
//             </a>
//             <a className="nav-link active" href="/signin">
//               로그인
//             </a>
//             <a className="nav-link active" href="/cart">
//               장바구니
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav> */}
//   </header>
//   // 네비게이션바
// );
