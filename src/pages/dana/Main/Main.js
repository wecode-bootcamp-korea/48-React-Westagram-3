import React from "react";
import "./Main.scss";
import instagram from "../images/instagram.svg";
import compass from "../images/compass.svg";
import heart from "../images/heart.png";
import comment from "../images/comment.png";
import user from "../images/user.svg";
import bookmark from "../images/bookmark.png";
import share from "../images/share.png";
import search from "../images/search.svg";
import profilephoto from "../images/profile-photo.jpg";
import photo from "../images/profile-photo.jpg";

const Main = () => {
  return (
    <div className="container">
      <div className="nav-wrap">
        <div className="nav">
          <div className="nav-left">
            <img className="nav-icon" src={instagram} />
            <p>Westagram</p>
          </div>

          <div className="nav-center">
            <input></input>
            <div className="search-bar">
              <div className="search-bar-img">
                <img src={search} />
              </div>
              <div className="search-bar-text">
                <p>검색</p>
              </div>
            </div>
          </div>

          <div className="nav-right">
            <img className="nav-icon" src={compass} />
            <img className="nav-icon" src={heart} />
            <img className="nav-icon" src={user} />
          </div>
        </div>
      </div>

      <div className="main">
        <div className="feeds">
          <div className="article">
            <div className="article-head">
              <div className="article-head-left">
                <div className="user-profile-photo">
                  <img src={profilephoto} />
                </div>
                <div className="user-profile-name">
                  <p>canon_mj</p>
                </div>
              </div>
            </div>
            <div className="article-image">
              <img src={profilephoto} />
            </div>
            <div className="article-icons">
              <div className="article-icons-right">
                <img src={bookmark} />
              </div>
              <div className="article-icons-left">
                <img src={heart} />
                <img src={comment} />
                <img src={share} />
              </div>
            </div>
            <div className="article-likes">
              <div className="user-profile-photo">
                <img src={profilephoto} />
              </div>
              <p>
                <span>aineworld</span>님 <span>외 10명이</span> 좋아합니다
              </p>
            </div>
            <div className="article-comments">
              <ul>
                <li>
                  <span>canon_mj</span>
                  <p>위워크에서 진행한 베이킹 클래스</p>
                </li>
                <li>
                  <span>neceocesius</span>
                  <p>좋았잖아~~~~~~~</p>
                </li>
              </ul>
              <p className="time-stamp">45분전</p>
              <div className="write-comment">
                <input value={Text} placeholder="댓글 달기..."></input>
                <p>게시</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="my-profile">
          <div className="user-profile-photo">
              <img src={profilephoto} />
            </div>
            <div className="my-profile-name">
              <div className="user-profile-name"><p>wecode_bootcamp</p></div>
              <div className="user-profile-name2"><p>WeCode | 위코드</p></div>
                  
                  
                </div>
          </div>

          <div className="stories">

            <div className="stories-header">
            <div className="user-profile-name2"><p>스토리</p></div>
            <div className="user-profile-name"><p>모두보기</p></div>
            </div> 


            <ul className="stories-list">
              <li>
              <div className="user-profile-photo">
              <img src={profilephoto} />
            </div>
            <div className="stories-users">
            <div className="user-profile-name"><p>_yum_s_</p></div>
              <div className="user-profile-name2"><p>10분전</p></div>
              </div>
              </li>
              <li>
              <div className="user-profile-photo">
              <img src={profilephoto} />
            </div>
            <div className="stories-users">
            <div className="user-profile-name"><p>drink_eat_drink</p></div>
              <div className="user-profile-name2"><p>40분전</p></div>
              </div>
              </li>
              <li>
              <div className="user-profile-photo">
              <img src={profilephoto} />
            </div>
            <div className="stories-users">
            <div className="user-profile-name"><p>hykyc</p></div>
              <div className="user-profile-name2"><p>40분전</p></div>
              </div>
              </li>
            </ul>
          </div>
          <div className="footer">
            <p>
            About
Help
Press
API
Jobs
Privacy
Terms
Locations
Language
English
Meta Verified
<br/>
<br/>
© 2023 INSTAGRAM FROM META
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
