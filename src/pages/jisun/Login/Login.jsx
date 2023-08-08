import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import react, { useState, useEffect } from "react";
import "../../../style/reset.scss";
import { getActiveElement } from "@testing-library/user-event/dist/utils";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isActive, setIsActive] = useState(false);

  let color = isActive ? "#2d94ef" : "#67b5fa";

  useEffect(() => {
    id.includes("@") && pw.length >= 5 ? setIsActive(true) : setIsActive(false);
  }, [id, pw]);

  const saveUserId = (event) => {
    setId(event.target.value);
  };

  const saveUserPw = (event) => {
    setPw(event.target.value);
  };

  const goToMain = () => {
    if (id.includes("@") && pw.length >= 5) {
      navigate("/jisun-main");
    } else {
      //document.getElementsByClassName("err").style.display = "block"; 이부분 해결하고싶습니다!
    }
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
        <button
          className="btnLogin"
          onClick={goToMain}
          disabled={!isActive}
          style={{ backgroundColor: color }}
        >
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
