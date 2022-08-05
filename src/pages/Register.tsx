import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { IdInput, PasswordInput } from '../components/Input'
import Layout from '../components/Layout/Layout'
import { fetchSignUp } from '../helper/api'
import { isEmail, isPassword } from '../helper/login'
import * as S from './style'

const RegisterPage = () => {
  const [emailCheck, setEmailCheck] = useState<boolean>(false)
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false)
  const [repasswordCheck, setRePasswordCheck] = useState<boolean>(false)
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(false)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repassword, setRePassword] = useState<string>('')

  const navigate = useNavigate()

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
    const pw = e.target.value
    if (isPassword(pw)) {
      setPasswordCheck(true)
    } else {
      setPasswordCheck(false)
    }
    setPassword(pw)

    // check with re password
    if (repassword === pw) {
      setIsPasswordMatch(true)
    } else {
      setIsPasswordMatch(false)
    }
  }

  function handleChangeRePassword(e: React.ChangeEvent<HTMLInputElement>) {
    const re_pw = e.target.value
    if (isPassword(re_pw)) {
      setRePasswordCheck(true)
    } else {
      setRePasswordCheck(false)
    }
    setRePassword(re_pw)

    // check with password
    if (password === re_pw) {
      setIsPasswordMatch(true)
    } else {
      setIsPasswordMatch(false)
    }
  }

  //NOTE: 회원 가입시, email, password, repassword를 체크하고 잘못 작성 되었을때 경고 메시지를 리턴한다.
  function getWarningText() {
    if (email === '' && password === '' && repassword === '') {
      return '\xA0'
    }
    if (!emailCheck) {
      return '이메일 주소를 입력해주세요 (@ . 포함)'
    }
    if (!passwordCheck) {
      return '비밀번호는 최소 8자 이상이어야해요'
    }
    if (!repasswordCheck || !isPasswordMatch) {
      return '비밀번호가 일치하는지 확인하세요'
    }
    return '회원가입 하세요!!'
  }

  function handleClick() {
    fetchSignUp(email, password)
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          // 데이터 토큰을 제대로 받아왔습니다.
          localStorage.removeItem('token')
          localStorage.setItem('token', JSON.stringify(data.token))
          alert(data.message)
          navigate('/')
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
    <Layout>
      <S.Register>
        <div className="register-card">
          <h2>회원 가입</h2>
          <IdInput
            handleChange={handleChangeId}
            placeholder="ID를 입력하세요"
          />
          <PasswordInput
            handleChange={handleChangePassword}
            placeholder="패스워드를 입력하세요"
          />
          <PasswordInput
            handleChange={handleChangeRePassword}
            placeholder="패스워드를 다시 입력하세요"
          />

          <span
            className={`warning-message ${
              emailCheck &&
              passwordCheck &&
              repasswordCheck &&
              isPasswordMatch &&
              'ready-to-register'
            }`}
          >
            {getWarningText()}
          </span>
          {emailCheck && passwordCheck && repasswordCheck && isPasswordMatch ? (
            <Button handleClick={handleClick}>Submit</Button>
          ) : (
            <Button>Cancel</Button>
          )}
        </div>
      </S.Register>
    </Layout>
  )
}

export default RegisterPage
