import React from "react";
import "./Login.scss";
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className="login">
      <div id= 'wrapper'>
        <div id='logo'>Westagram</div>
        <div id='input'>
          <input id='id' type = 'text' placeholder="전화번호, 사용자 이름 또는 이메일"></input>
          <input id='pw' type = 'password' placeholder="비밀번호"></input>
        </div>
        <Link to = '/jihye-main'><button id = 'loginBtn'>로그인</button></Link>
        <div id='miss'>비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
};

export default Login;
