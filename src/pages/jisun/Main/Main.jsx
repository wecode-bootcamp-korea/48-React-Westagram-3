import React from "react";
import "./Main.scss";
import { Link, useNavigate } from "react-router-dom";
import "../../../style/reset.scss";

const Main = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/jisun-main");
  };

  return (
    <div className="main">
      <nav>
        <Link to="/jisun-main" className="goHome">
          <span className="logo"></span>
          <p>Westagram</p>
        </Link>
        <div className="inputWrap">
          <input type="search" placeholder="검색" />
        </div>
        <div className="icons">
          <a href="" className="icon1"></a>
          <a href="" className="icon2 on"></a>
          <a href="" className="icon3"></a>
        </div>
      </nav>
      <div className="contentsWrap">
        <div className="feeds">
          <article>
            <div className="accountWrap">
              <a className="accountPicture">
                <img alt="계정 프로필 사진" src="../../../../images/jisun/img_profile.png" />
              </a>
              <a className="accountName">hanccino</a>
              <a className="moreMenu">
                <img alt="더보기 아이콘" src="../../../../images/jisun/icon_more.png" />
              </a>
            </div>
            <div className="image">
              <img alt="웰시코기 한강" src="../../../../images/jisun/img_feed.png" />
            </div>
            <div className="text">
              <div className="buttons">
                <span className="like on"></span>
                <span className="dm"></span>
                <span className="share"></span>
                <span className="bookMark"></span>
              </div>
              <div className="likedStatus">
                <a className="accountPicture">
                  <img
                    alt="위코드 프로필 사진"
                    src="../../../../images/jisun/img_profile_wecode.png"
                  />
                </a>
                <a className="accountName">wecode_life</a>님 <a>외 10명</a>이 좋아합니다.
              </div>
              <div className="mention">
                <a className="accountName mr5">hanccino</a>
                우리집 강아지 츄르를 좋아해...
                <span className="viewMore">더 보기</span>
              </div>
              <div className="currentComments">
                <a className="accountName mr5">wecode_bootcamp</a>졸귀탱!
              </div>
              <div className="addComments">
                <textarea aria-label="댓글 달기..." placeholder="댓글 달기..."></textarea>
              </div>
            </div>
          </article>
        </div>
        <div className="mainRight">
          <div className="myAccount accountWrap">
            <a className="accountPicture">
              <img alt="계정 프로필 사진" src="../../../../images/jisun/img_profile.png" />
            </a>
            <span>
              <a className="accountName">hanccino</a>
              Jisun lives with a corgi
            </span>
          </div>
          <div className="recommandList">
            <div>
              <strong>회원님을 위한 추천</strong>
              <span className="viewAll">모두 보기</span>
            </div>
            <div className="accountWrap">
              <a className="accountPicture">
                <img
                  alt="위워크 계정 프로필 사진"
                  src="../../../../images/jisun/img_profile_wework.jpeg"
                />
              </a>
              <span>
                <a className="accountName">wework</a>
                wecode_bootcamp님 외 3명이 팔로우합니다
              </span>
              <span className="follow">팔로우</span>
            </div>
            <div className="accountWrap">
              <a className="accountPicture">
                <img
                  alt="넷플릭스 계정 프로필 사진"
                  src="../../../../images/jisun/img_profile_netflix.jpeg"
                />
              </a>
              <span>
                <a className="accountName">netflixkr</a>
                wecode_premium님 외 6명이 팔로우합니다
              </span>
              <span className="follow">팔로우</span>
            </div>
            <div className="accountWrap">
              <a className="accountPicture">
                <img
                  alt="갱더코기 계정 프로필 사진"
                  src="../../../../images/jisun/img_profile_corgi.jpeg"
                />
              </a>
              <span>
                <a className="accountName">gang_the_corgi</a>
                회원님을 팔로우합니다
              </span>
              <span className="follow">팔로우</span>
            </div>
            <div className="accountWrap">
              <a className="accountPicture">
                <img
                  alt="밤비 계정 프로필 사진"
                  src="../../../../images/jisun/img_profile_bambi.jpeg"
                />
              </a>
              <span>
                <a className="accountName">bambi__jeju</a>
                gdragon님 외 4명이 팔로우합니다
              </span>
              <span className="follow">팔로우</span>
            </div>
            <div className="accountWrap">
              <a className="accountPicture">
                <img
                  alt="피식대학 계정 프로필 사진"
                  src="../../../../images/jisun/img_profile_psickuniv.jpeg"
                />
              </a>
              <span>
                <a className="accountName">psickuniv</a>
                dev_gag님 외 6명이 팔로우합니다
              </span>
              <span className="follow">팔로우</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
