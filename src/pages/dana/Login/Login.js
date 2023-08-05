import React from "react";
import "./Login.scss";
import { useNavigate } from 'react-router-dom';              

const Login = () => {
  const navigate = useNavigate();                           

  const goToMain = () => {                                    
    navigate('/main');
  };

  return (

    <body>
    <div className="content-wrap">
    <div className="login">

      <p className="heading">Westagram</p>

      <div className="input-fields">
        <input type="text" placeholder="전화번호, 사용자 이름, 또는 이메일"></input>
        <input type="text" placeholder="비밀번호"></input>        
        <button className='loginBtn' onClick={goToMain}>       
      로그인
    </button>
        </div>

        <div className="forget-pw">
        <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
        
        </div>
    </div>
    </body>
  );
}

export default Login;