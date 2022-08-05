import { useEffect, useState } from 'react'

export function isEmail(email: string) {
  return email.indexOf('@') !== -1 && email.indexOf('.') !== -1
}

export function isPassword(password: string) {
  return password.length >= 8
}

export function useLogin() {
  const [isLogin, setIsLogin] = useState<boolean>(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // Login 이 되어 있는 상태, / 메인 페이지로 이동한다.
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [window.localStorage])

  return isLogin
}

export function logout() {
  localStorage.removeItem('token')
  alert('로그아웃 되었습니다')
  window.location.reload()
}
