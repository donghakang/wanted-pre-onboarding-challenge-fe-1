import React from "react";
import { Link } from "react-router-dom";
import { logout, useLogin } from "../../helper/login";
import * as S from "./style";

const Header = () => {
  const isLogin = useLogin();



  return (
    <S.Header>
      <div className="logo">
        <Link to="/">Home</Link>
      </div>

      {isLogin ? (
        <ul>
          <li className="login">
            <div onClick={logout}>로그아웃</div>
          </li>
          <li className="register">
            <Link to="/register">회원가입</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li className="login">
            <Link to="/auth">로그인</Link>
          </li>

          <li className="register">
            <Link to="/register">회원가입</Link>
          </li>
        </ul>
      )}
    </S.Header>
  );
};

export default Header;
