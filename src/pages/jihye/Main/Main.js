import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
{/* nav */}
      <nav>
        <ul id='navLeft'>
          <li><img src='images/logo.png' alt='logo'></img></li>
          <li></li>
          <li>Westagram</li>
        </ul>
        <img src='images/search.png' alt='search'></img>
        <input id='search' type= 'text' placeholder='검색' ></input>
        <ul id='navRight'>
        <img src='images/compass.png' alt='compass'></img>
        <img src='images/heart.png' alt='heart'></img>
        <img src='images/user.png' alt='user'></img>
        </ul>
      </nav>

{/* #main */}
      <div id= 'main'>
        <div className= 'feeds'>
          <article>
      {/* #userSection */}
            <div id= 'userSection'>
              <img src= 'images/lee.jpg' alt= '프로필'></img>
              jihyelo
              <img src= 'images/more.png' alt= '설정'></img>
            </div>
      {/* #userImage */}
            <div id= 'userImage'>
              <img src= 'images/leejihye.jpg' alt= '업로드한 사진'></img>
            </div>
      {/* #guestSection */}
            <div id= 'guestSection'>
              <img src='images/HeartRed.png' alt='heartRed'></img>
              <img src='images/bubble.png' alt='bubble'></img>
              <img src='images/export.png' alt='export'></img>
              <div class= 'like'>
              <p><img class = 'friendprofile' src= 'images/lee.jpg' alt= '프로필'></img>친구1아이디님 외 4명이 좋아합니다</p>
              <p>친구아이디 강아지 너무 귀엽다!</p>
              </div>
            </div>
          </article>{/* article 끝 */}
        </div>{/* .feeds 끝 */}
  {/* .right */}
        <div className='right'>
          <div id= 'myprofile'>
            <img src= 'images/lee.jpg' alt= '프로필'></img>
          </div>
          <div id= 'story'>
            <p>스토리 모두보기</p>
            <p><img class = 'friendprofile' src= 'images/lee.jpg' alt= '프로필'></img>친구1아이디</p>
            <p><img class = 'friendprofile' src= 'images/lee.jpg' alt= '프로필'></img>친구2아이디</p>
            <p><img class = 'friendprofile' src= 'images/lee.jpg' alt= '프로필'></img>친구3아이디</p>
            <p><img class = 'friendprofile' src= 'images/lee.jpg' alt= '프로필'></img>친구4아이디</p>
          </div>
          <div id= 'commend'>
          <p>회원님을 위한 추천 모두보기</p>
            <p><img class = 'friendprofile' src= 'images/lee.jpg' alt= '프로필'></img>추천1아이디팔로우</p>
            <p><img class = 'friendprofile' src= 'images/lee.jpg' alt= '프로필'></img>추천2아이디팔로우</p>
            <p><img class = 'friendprofile' src= 'images/lee.jpg' alt= '프로필'></img>추천3아이디팔로우</p>
            <p><img class = 'friendprofile' src= 'images/lee.jpg' alt= '프로필'></img>추천4아이디팔로우</p>
          </div>
          <footer>
            <p>Instagram 정보 · 지원 · 홍보 센터 · API ·채용 정보 · 개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어</p>
            <p>ⓒ 2019 INSTAGRAM</p>
          </footer>
        </div>{/* right 끝 */}
      </div>{/* main 끝 */}
    </div>
  );
};

export default Main;
