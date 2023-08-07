import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  const [ id, setId ] = useState('');
  const [ pw, setPw ] = useState('');
  const inputValue = id.includes('@') && pw.length >=5

  console.log(inputValue)
 
  const saveUserld = (event) => {
    setId(event.target.value);  
  }
  console.log(id);

  const saveUserPw = (event) => {
    setPw(event.target.value);
  }
  console.log(pw);

  return (
    <div className="login">
      <div className= 'wrapper'>
        <div className='logo'>Westagram</div>
        <div className='input'>
          <input className='id' type = 'text' onChange = { saveUserld } value = { id } placeholder="전화번호, 사용자 이름 또는 이메일"/>
          <input className='pw' type = 'password' onChange = { saveUserPw } value = { pw } placeholder="비밀번호"/>
        </div>
        <button
          onClick={() => { navigate("/jihye-main") }} 
          className= { inputValue ? 'loginBtn buttonLogin' : 'loginBtn'}>로그인</button>
        <div className='miss'>비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
}
export default Login;
