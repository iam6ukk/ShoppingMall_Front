import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import MallService from "../service/MallService";

const SigninComponent = () => {
  const [custid, setcustId] = useState("");
  const [custpwd, setcustpwd] = useState("");

  const changeIdHandler = (event) => {
    setcustId(event.target.value);
  };
  const changePwdHandler = (event) => {
    setcustpwd(event.target.value);
  };
  // TextField값 변경 시 핸들러 실행
  // 아이디, 패스워드 값 set

  const SignInHandler = async function (event) {
    event.preventDefault();
    // 브라우저 고유 동작 막음
    // sign in 버튼 클릭 시 랜더링 막음
    let logInfo = {
      custid: custid,
      custpwd: custpwd,
    };
    console.log("id: " + logInfo.custid + " / pwd: " + logInfo.custpwd);

    MallService.signInUser(logInfo).then((res) => {
      console.log(res);
      // 데이터 확인
    });
  };

  return (
    <div className="signin-contianer">
      <div className="card">
        <div className="card-body">
          <div className="card-haad">
            <h3>로그인</h3>
            <hr />
          </div>
          <form>
            <div className="card-id">
              <TextField
                id="custid"
                label="아이디를 입력해주세요"
                variant="outlined"
                onChange={changeIdHandler}
                style={{ width: "40%" }}
              />
            </div>
            <div className="card-pwd">
              <TextField
                id="custpwd"
                label="비밀번호를 입력해주세요"
                variant="outlined"
                type="password"
                onChange={changePwdHandler}
                style={{ width: "40%" }}
              />
            </div>
            <div className="signin-btn">
              <Button
                variant="outlined"
                color="primary"
                onClick={SignInHandler}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninComponent;
