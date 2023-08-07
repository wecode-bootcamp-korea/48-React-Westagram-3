import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import react, { useState } from "react";
import "../../../style/reset.scss";

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/jisun-main");
  };

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const saveUserId = (event) => {
    setId(event.target.value);
    console.log(event);
  };

  const saveUserPw = (event) => {
    setPw(event.target.value);
  };

  return (
    <div className="login">
      <div className="box">
        <h1>Westagram</h1>
        <input
          type="text"
          id="id"
          value={id}
          onChange={saveUserId}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input type="text" id="pw" value={pw} onChange={saveUserPw} placeholder="비밀번호" />
        <button className="btnLogin" onClick={goToMain}>
          로그인
        </button>
        <span>또는</span>
        <button className="btnFacebook">Facebook으로 로그인</button>
        <p className="err">잘못된 비밀번호입니다. 다시 확인하세요.</p>
        <a className="findPassword" href="">
          비밀번호를 잊으셨나요?
        </a>
      </div>
      <div className="box">
        계정이 없으신가요? <a>가입하기</a>
      </div>
    </div>
  );
};

export default Login;
