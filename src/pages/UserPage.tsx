// libraries
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

// images
import logo from "/image/logo.svg";
import singmonkey from "/image/monkey/singmonkey.svg";

const UserPage = () => {
  return (
    <>
      <div
        className={css`
          display: flex;
          align-items: center;
          flex-direction: column;
          height: calc(50vh - 20px);
          width: 100%;
          background-color: white;
        `}
      >
        <Link to="/">
          <img
            className={css`
              margin: 10px;
              width: 60px;
              background-color: transparent;
            `}
            src={logo}
            alt="logo"
          />
        </Link>
        <Image src={singmonkey} />
        <div
          className={css`
            display: flex;
            justify-content: center;
            width: 100%;
            margin-bottom: 30px;
            font-size: 60px;
            font-weight: 500;
          `}
        >
          안녕하세요 학회원님!
        </div>
        <div
          className={css`
            width: 50%;
            height: 100px;
            display: flex;
            justify-content: space-around;
            padding: 10px;
            align-items: center;
          `}
        >
          <Link to="/book">
            <Nav>연습실</Nav>
          </Link>
          <Link to="/book">
            <Nav>게시판</Nav>
          </Link>
          <Nav>마이페이지</Nav>
        </div>
      </div>
    </>
  );
};

export default UserPage;

const Nav = styled.a`
  font-size: 22px;
  font-weight: 500;
  width: 100px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #ffaa00;
    border-bottom: 4px solid #ffaa00;
  }
`;
const Image = styled.img`
  width: 400px;
  height: 400px;
  margin-top: 70px;
`;
