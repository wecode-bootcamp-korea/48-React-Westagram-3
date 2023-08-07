import React, { useState} from "react";
import "./Login.scss";
import { useNavigate } from 'react-router-dom';              

const Login = () => {
  const navigate = useNavigate();                           

  const goToMain = () => {                                    
    navigate('/main');
  };

const [saveId, setSaveId] = useState("");

  const saveUserId = (event) => {
    setSaveId (event.target.value); 
    console.log(saveId);  
};

const [savePw, setSavePw] = useState("");

  const saveUserPw = (event) => {
setSavePw (event.target.value);      
console.log(savePw);   
};

  return (

    <body>
    <div className="content-wrap">
    <div className="login">

      <p className="heading">Westagram</p>

      <div className="input-fields">
        <input name="id" type="text" placeholder="전화번호, 사용자 이름, 또는 이메일" value={saveId} onChange={(saveUserId)}></input>
        <input name="pw" type="password" placeholder="비밀번호" value={savePw} onChange={(saveUserPw)}></input>        
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