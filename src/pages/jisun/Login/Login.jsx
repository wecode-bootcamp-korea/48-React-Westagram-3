import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import "../../../style/reset.scss";

const Login = () => {
  const navigate = useNavigate();
  //const [userId, setUserId] = useState(""); //string
  //const [userPw, setUserPw] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [userInfo, setUserInfo] = useState({
    userId: "",
    userPw: "",
  });

  useEffect(() => {
    const condition = userInfo.userId.length >= 5 && userInfo.userId.includes("@");
    setIsActive(condition);
  }, [userInfo]);

  console.log(userInfo);

  const handleId = (event) => {
    //setUserId(event.target.value);
    const { value } = event.target;
    setUserInfo({ ...userInfo, userId: value }); // 스프레드 연산자. 특정 대상의 코드를 분해함.
  };

  const handlePw = (event) => {
    //setUserPw(event.target.value);
    const { value } = event.target;
    setUserInfo({ ...userInfo, userPw: value });
  };

  const handleInput = (event) => {
    const { value, id } = event.target;
    setUserInfo({ ...userInfo, [id]: value }); // [계속해서 변하는 객체 속성명] 대괄호 안에 계속해서 변하는 객체의 속성명 넣어주는 것을 계산된 속성명이라고 한다
  };

  console.log(userInfo.length);

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
        <input type="text" id="userPw" onChange={handleInput} placeholder="비밀번호" />
        <button
          className="btnLogin"
          onClick={goToMain}
          //disabled={!isActive}
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
