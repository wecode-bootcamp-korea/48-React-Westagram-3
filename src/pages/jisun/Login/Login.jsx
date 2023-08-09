import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [userInfo, setUserInfo] = useState({
    userId: "",
    userPw: "",
  });

  const isActive = userInfo.userPw.length >= 5 && userInfo.userId.includes("@");

  useEffect(() => {}, [userInfo, showErrorMessage]);

  const handleInput = (event) => {
    const { value, id } = event.target;
    setUserInfo({ ...userInfo, [id]: value });
  };

  const goToMain = () => {
    if (isActive) {
      navigate("/jisun-main");
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="login">
      <div className="box">
        <h1>Westagram</h1>
        <input
          type="text"
          id="userId"
          onChange={handleInput}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input type="password" id="userPw" onChange={handleInput} placeholder="비밀번호" />
        <button
          className="btnLogin"
          onClick={goToMain}
          style={{ backgroundColor: isActive ? "#2d94ef" : "#67b5fa" }}
        >
          로그인
        </button>
        <span>또는</span>
        <button className="btnFacebook">Facebook으로 로그인</button>
        {showErrorMessage && <p className="err">잘못된 비밀번호입니다. 다시 확인하세요.</p>}
        <button className="findPassword">비밀번호를 잊으셨나요?</button>
      </div>
      <div className="box">
        계정이 없으신가요? <a href="/signup">가입하기</a>
      </div>
    </div>
  );
};

export default Login;
