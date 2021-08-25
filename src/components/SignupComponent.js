import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import { LoginHeaderLayout, LogoutHeaderLayout } from "../laytout/HeaderLayout";
import LogoutNav from "../laytout/LogoutNav";
import LoginNav from "../laytout/LoginNav";
import { useHistory } from "react-router-dom";
import MallService from "../service/MallService";
// import { makeStyles } from "@material-ui/core/styles";
import DaumPostcode from "react-daum-postcode";
// import Modal from "@material-ui/core/Modal";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(2),
//       width: "100%",
//     },
//   },
// }));

const SignupComponent = () => {
  // const classes = useStyles();
  const history = useHistory();
  const [custname, setcustName] = useState("");
  const [custid, setcustId] = useState("");
  const [custpw, setcustPwd] = useState("");
  const [custpwdcheck, setcustPwdCheck] = useState(""); // 비밀번호 2차 확인
  const [address, setAddress] = useState(""); // 주소
  // const [addressDetail, setAddressDetail] = useState(""); // 상세 주소

  const [isOpenPost, setIsOpenPost] = useState(false); // post기본상태 false

  const changeNameHandler = (event) => {
    setcustName(event.target.value);
  };
  const changeIdHandler = (event) => {
    setcustId(event.target.value);
  };
  const changePwdHandler = (event) => {
    setcustPwd(event.target.value);
  };
  const changePwdCheckHandler = (event) => {
    setcustPwdCheck(event.target.value);
  };
  const changeAddressHandler = (event) => {
    setAddress(event.target.value);
  };
  // const changeAddressDetailHandler = (evnet) => {
  //   setAddressDetail(evnet.target.value);
  // };
  // 텍스트 필드 값 변경시 핸들러 실행 -> 각 값 set

  const custidCheckHandler = () => {
    MallService.custIdCheck(custid).then((res) => {
      console.log(res);
      if (res.data == 0) {
        alert("사용가능 한 아이디 입니다.");
      } else if (res.data == 1) {
        alert("사용할 수 없는 아이디 입니다.");
      }
    });
  };
  // 아이디 중복 검사

  const custpwdcheckHandler = (event) => {};
  // 패스워드 확인

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };
  // 주소창 true

  const onCompletePost = (data) => {
    console.log(data);

    setAddress(data.address);
    // let fullAddr = data.address; // 도로명 주소
    // let extraAddr = "";

    // if (data.addressType === "R") {
    //   // 도로명 주소 선택 시
    //   if (data.bname !== "") {
    //     extraAddr += data.bname;
    //     // 법정동명이 있을 경우
    //   }
    //   if (data.buildingName !== "") {
    //     extraAddr +=
    //       extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
    //   }
    //   // 건물명이 있고 공용 주택일 경우

    //   fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    // }

    // setAddress(fullAddr);
    // setAddressDetail(extraAddr);
    setIsOpenPost(false);
  };

  const SignUpHandler = (event) => {
    event.preventDefault();

    let custInfo = {
      custname: custname,
      custid: custid,
      custpwd: custpw,
      address: address,
    };
    console.log(
      "입력한 정보 => custname: " +
        custInfo.custname +
        " / custid: " +
        custInfo.custid +
        " / custpwd: " +
        custInfo.custpwd +
        " / address: " +
        custInfo.address
    );

    MallService.signUpUser(custInfo).then((res) => {
      console.log(res);
    });
    history.push("/signin");
  };

  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      SignUpHandler();
    }
    // 키 이벤트(엔터) 발생 시
    // SignUpHandler함수 실행
  };

  return (
    <div>
      {sessionStorage.getItem("LoginUser") == null ? (
        <LogoutNav />
      ) : (
        // 세션의 key값이 null이면 LogoutNav 출력
        <LoginNav />
        // 새션의 key값이 LoginUser이면 LoginNav 출력
      )}
      <div className="signin-contianer">
        <div className="card">
          <div className="card-body">
            <div className="card-haad">
              <h3>회원가입</h3>
              <hr />
            </div>
            <form onKeyPress={onCheckEnter}>
              <div className="card-name">
                <TextField
                  id="custname"
                  label="이름을 입력해주세요"
                  variant="outlined"
                  style={{ width: "30%" }}
                  onChange={changeNameHandler}
                />
              </div>

              <div className="card-id">
                <TextField
                  id="custid"
                  label="아이디를 입력해주세요"
                  variant="outlined"
                  style={{ width: "30%" }}
                  onChange={changeIdHandler}
                />
              </div>
              <div>
                <Button variant="contained" onClick={custidCheckHandler}>
                  중복 확인
                </Button>
              </div>
              <div className="card-pwd">
                <TextField
                  id="custpwd"
                  label="비밀번호를 입력해주세요"
                  variant="outlined"
                  type="password"
                  style={{ width: "30%" }}
                  onChange={changePwdHandler}
                />
              </div>
              <div className="card-pwdcheck">
                <TextField
                  id="custpwdCheck"
                  label="비밀번호를 다시 입력해주세요"
                  variant="outlined"
                  type="password"
                  style={{ width: "30%" }}
                  onChange={changePwdCheckHandler}
                />
              </div>
              <div className="card-address">
                <TextField
                  id="address"
                  label="주소"
                  variant="outlined"
                  style={{ width: "20%" }}
                  onChange={changeAddressHandler}
                />
                <Button variant="contained" onClick={onChangeOpenPost}>
                  우편번호검색
                </Button>
                {isOpenPost ? (
                  <DaumPostcode
                    style={postCodeStyle}
                    autoClose
                    onComplete={onCompletePost}
                  />
                ) : null}
              </div>

              {/* <div className="card-detailaddress">
                <TextField
                  id="addressDetail"
                  label="상세주소입력"
                  variant="outlined"
                  style={{ width: "30%" }}
                  onChange={changeAddressDetailHandler}
                />
              </div> */}

              <div className="signin-btn">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={SignUpHandler}
                >
                  sign up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const postCodeStyle = {
  display: "block",
  position: "relative",
  top: "0%",
  width: "400px",
  height: "400px",
  padding: "7px",
};

export default SignupComponent;
