import React, { useState } from "react";
import "./Main.scss";

const Main = () => {
  const [reviewList, setReviewList] = useState([]);
  const [review, setReview] = useState("");

  const handleButton = () => {
    setReviewList([...reviewList, review]);
    setReview('')
  }

  console.log("review", review);
  console.log("----reviewList---", reviewList);

  return (
    <div className="main">
      {/* nav */}
      <nav>
        <ul id="navLeft">
          <li>
            <img src="images/jihye/logo.png" alt="logo"></img>
          </li>
          <li> | </li>
          <li>Westagram</li>
        </ul>

        <div id="navSearch">
          <input type="text" placeholder="검색"></input>
          <img src="images/jihye/search.png" alt="search"></img>
        </div>

        <div id="navRight">
          <ul className="naviRightImage">
            <li>
              <img src="images/jihye/compass.png" alt="compass"></img>
            </li>
            <li>
              <img src="images/jihye/heart.png" alt="heart"></img>
            </li>
            <li>
              <img src="images/jihye/user.png" alt="user"></img>
            </li>
          </ul>
        </div>
      </nav>

      {/* div #main */}
      <div id="main">
        <div className="feeds">
          <article>
            {/* #userSection */}
            <div id="userSection">
              <img src="images/jihye/lee.jpg" alt="프로필"></img>jihyelo
              <img
                className="more"
                src="images/jihye/more.png"
                alt="설정"
              ></img>
            </div>
            {/* #userImage */}
            <div id="userImage">
              <img src="images/jihye/leejihye.jpg" alt="업로드한 사진"></img>
            </div>
            {/* #guestSection */}
            <div id="guestSection">
              <div className="clickLike">
                <img src="images/jihye/HeartRed.png" alt="heartRed"></img>
                <img src="images/jihye/bubble.png" alt="bubble"></img>
                <img src="images/jihye/export.png" alt="export"></img>
                <img src="images/jihye/bookmark.png" alt="bookmark"></img>
              </div>

              <div className="likeCount">
                <img
                  class="friendprofile"
                  src="images/jihye/lee.jpg"
                  alt="프로필"
                ></img>
                <span className="bold">friend_00_ID</span>님{" "}
                <span className="bold">외 4명</span>이 좋아합니다
              </div>

              <div className="comment">
                <img src="images/jihye/heart.png" alt="heart"></img>
                <img src="images/jihye/heart.png" alt="heart"></img>
                <p>
                  <span className="bold">friend_00_ID</span> 강아지 너무 귀엽다!
                  어디서 찍은 사진... <span className="gray">더보기</span>
                </p>
                <p>
                  <span className="bold">friend_01_ID</span> 누구네
                  강아지야???🐶
                <p>{reviewList.map(review => 
                  <p>{review}</p>)}</p>
                </p>
                <p className="bold gray">42분 전</p>
              </div>

              <div className="commentPush">
                <input
                  className="bold"
                  type="text"
                  value={review}
                  placeholder="댓글 달기..."
                  onChange={(e) => setReview(e.target.value)}
                />
                <button className="bold" onClick={handleButton}>
                  게시
                </button>
              </div>
            </div>
          </article>
          {/* article 끝 */}
        </div>
        {/* .feeds 끝 */}

        {/* .right */}
        <div className="right">
          <table id="myprofile">
            <td>
              <img src="images/jihye/lee.jpg" alt="프로필"></img>
            </td>
            <td>
              <tr>jihyelo</tr>
              <tr className="gray">우당탕탕 굴러가는 지혜의 하루</tr>
            </td>
          </table>

          <table id="story">
            <th className="gray">스토리</th>
            <th>모두 보기</th>
            <tr>
              <td>
                <img src="images/jihye/lee.jpg" alt="프로필"></img>
              </td>
              <td>
                <tr>friend_1_ID</tr>
                <tr className="gray">16분 전</tr>
              </td>
            </tr>
            <tr>
              <td>
                <img src="images/jihye/lee.jpg" alt="프로필"></img>
              </td>
              <td>
                <tr>friend_2_ID</tr>
                <tr className="gray">3시간 전</tr>
              </td>
            </tr>
            <tr>
              <td>
                <img src="images/jihye/lee.jpg" alt="프로필"></img>
              </td>
              <td>
                <tr>friend_3_ID</tr>
                <tr className="gray">20시간 전</tr>
              </td>
            </tr>
            <tr>
              <td>
                <img src="images/jihye/lee.jpg" alt="프로필"></img>
              </td>
              <td>
                <tr>friend_4_ID</tr>
                <tr className="gray">16분 전</tr>
              </td>
            </tr>
          </table>

          <table id="commend">
            <th colspan="2" className="gray">
              회원님을 위한 추천
            </th>
            <th>모두 보기</th>
            <tr>
              <td>
                <img src="images/jihye/lee.jpg" alt="프로필"></img>
              </td>
              <td>
                <tr>commend_1_ID</tr>
                <tr className="gray">commend_1_ID 외 2명이 ...</tr>
              </td>
              <td className="falow">팔로우</td>
            </tr>
            <tr>
              <td>
                <img src="images/jihye/lee.jpg" alt="프로필"></img>
              </td>
              <td>
                <tr>commend_2_ID</tr>
                <tr className="gray">commend_2_ID 외 2명이 ...</tr>
              </td>
              <td className="falow">팔로우</td>
            </tr>
            <tr>
              <td>
                <img src="images/jihye/lee.jpg" alt="프로필"></img>
              </td>
              <td>
                <tr>commend_3_ID</tr>
                <tr className="gray">commend_3_ID 외 2명이 ...</tr>
              </td>
              <td className="falow">팔로우</td>
            </tr>
          </table>

          <footer>
            <p>
              Instagram 정보 · 지원 · 홍보 센터 · API ·채용 정보 ·
              개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
            </p>
            <br />
            <p>ⓒ 2019 INSTAGRAM</p>
          </footer>
        </div>
        {/* right 끝 */}
      </div>
      {/* main 끝 */}
    </div>
  );
};

export default Main;
