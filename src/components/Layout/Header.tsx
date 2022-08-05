import React from 'react'
import { Link } from 'react-router-dom'
import { logout, useLogin } from '../../helper/login'
import * as S from './style'

const Header = () => {
  const { pathname } = location
  const isLogin = useLogin()

  const isHome =
    pathname === '/' ||
    pathname === '/detail' ||
    pathname === '/create' ||
    pathname === '/update'

  return (
    <S.Header>
      <div className={`logo ${isHome && 'active'}`}>
        <Link to="/">Home</Link>
      </div>

      {isLogin ? (
        <ul>
          <li className={`login ${pathname === '/auth' && 'active'}`}>
            <div onClick={logout}>로그아웃</div>
          </li>
          <li className={`register ${pathname === '/register' && 'active'}`}>
            <Link to="/register">회원가입</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li className={`login ${pathname === '/auth' && 'active'}`}>
            <Link to="/auth">로그인</Link>
          </li>

          <li className={`register ${pathname === '/register' && 'active'}`}>
            <Link to="/register">회원가입</Link>
          </li>
        </ul>
      )}
    </S.Header>
  )
}

export default Header
