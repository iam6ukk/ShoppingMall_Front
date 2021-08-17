import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import MallService from "../service/MallService";

function SigninComponent() {
  const [id, setId] = useState("");
  const [pwd, setpwd] = useState("");

  const changeIdHandler = (event) => {
    setId(event.target.value);
  };
  const changePwdHandler = (event) => {
    setpwd(event.target.value);
  };

  const SignInHandler = (event) => {
    event.preventDefault();
    // 브라우저 고유 동작 막음
    // sign in 버튼 클릭 시 랜더링 막음
    let body = {
      id: id,
      pwd: pwd,
    };
    console.log("id: " + body.id + " / pwd: " + body.pwd);
    MallService.signInUser(body).then((res) => {});
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
                id="id"
                label="아이디를 입력해주세요"
                variant="outlined"
                onChange={changeIdHandler}
                style={{ width: "40%" }}
              />
            </div>
            <div className="card-pwd">
              <TextField
                id="pwd"
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
}

export default SigninComponent;
