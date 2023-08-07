import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [ id, setId ] = useState();
  const [ pw, setPw ] = useState();

  const saveUserld = (event) => {
    setId(event.target.value);
    console.log(id);
  }

  const saveUserPw = (event) => {
    setPw(event.target.value);
    console.log(pw);
  }

  return (
    <div className="login">
      <div id= 'wrapper'>
        <div id='logo'>Westagram</div>
        <div id='input'>
          <input id='id' type = 'text' onChange = { saveUserld } value = { id } placeholder="전화번호, 사용자 이름 또는 이메일"></input>
          <input id='pw' type = 'password' onChange = { saveUserPw } value = { pw } placeholder="비밀번호"></input>
        </div>
        <button id = 'loginBtn' onClick={() => { navigate('/jihye-main');} }>로그인</button>
        <div id='miss'>비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
};

export default Login;
