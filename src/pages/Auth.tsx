import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { IdInput, PasswordInput } from '../components/Input'
import Layout from '../components/Layout/Layout'
import { fetchLogin } from '../helper/api'
import { isEmail, isPassword, useLogin } from '../helper/login'
import * as S from './style'

const AuthPage = () => {
  const [emailCheck, setEmailCheck] = useState<boolean>(false)
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const isLogin = useLogin()

  function handleChangeId(e: React.ChangeEvent<HTMLInputElement>) {
    const email = e.target.value
    if (isEmail(email)) {
      setEmailCheck(true)
    } else {
      setEmailCheck(false)
    }
    setEmail(email)
  }

  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    const password = e.target.value
    if (isPassword(password)) {
      setPasswordCheck(true)
    } else {
      setPasswordCheck(false)
    }
    setPassword(password)
  }

  function handleClick() {
    fetchLogin(email, password)
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          // 데이터 토큰을 제대로 받아왔습니다.
          localStorage.setItem('token', JSON.stringify(data.token))
          alert(data.message)
          window.location.reload()
        } else {
          // 로그인 실패
          alert(data.details)
        }
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <>
      {isLogin ? (
        <Navigate to="/" />
      ) : (
        <Layout>
          <S.Auth>
            <div className="login-card">
              <h2>로그인</h2>
              <IdInput handleChange={handleChangeId} placeholder="ID" />
              <PasswordInput
                handleChange={handleChangePassword}
                placeholder="Password"
              />
              {emailCheck && passwordCheck ? (
                <Button handleClick={handleClick}>Submit</Button>
              ) : (
                <Button>Cancel</Button>
              )}
              <Link className="register-link" to={'/register'}>
                처음이신가요?
              </Link>
            </div>
          </S.Auth>
        </Layout>
      )}
    </>
  )
}

export default AuthPage
