import React from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const SignupComponent = () => {
  return (
    <div className="signin-contianer">
      <div className="card">
        <div className="card-body">
          <div className="card-haad">
            <h3>회원가입</h3>
            <hr />
          </div>
          <form>
            <div className="card-name">
              <TextField
                id="oulined-basic"
                label="이름을 입력해주세요"
                variant="outlined"
                style={{ width: "40%" }}
              />
            </div>
            <div className="card-id">
              <TextField
                id="oulined-basic"
                label="아이디를 입력해주세요"
                variant="outlined"
                style={{ width: "40%" }}
              />
            </div>
            <div className="card-pwd">
              <TextField
                id="outlied-basic"
                label="비밀번호를 입력해주세요"
                variant="outlined"
                type="password"
                style={{ width: "40%" }}
              />
            </div>
            <div className="card-pwd2">
              <TextField
                id="outlied-basic"
                label="비밀번호를 다시 입력해주세요"
                variant="outlined"
                type="password"
                style={{ width: "40%" }}
              />
            </div>
            <div className="signin-btn">
              <Button variant="outlined" color="primary">
                sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
