import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { IdInput, PasswordInput } from "../components/Input";
import { useLoginDispatch } from "../context/LoginContext";
import { fetchSignUp } from "../helper/api";
import { isEmail, isPassword } from "../helper/login";
import * as S from "./style";

const RegisterPage = () => {
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);
  const [repasswordCheck, setRePasswordCheck] = useState<boolean>(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRePassword] = useState<string>("");

  const dispatch = useLoginDispatch();

  function handleChangeId(e: React.ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;
    if (isEmail(email)) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
    setEmail(email);
  }

  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    const pw = e.target.value;
    if (isPassword(pw)) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
    setPassword(pw);

    // check with re password
    if (repassword === pw) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }
  }

  function handleChangeRePassword(e: React.ChangeEvent<HTMLInputElement>) {
    const re_pw = e.target.value;
    if (isPassword(re_pw)) {
      setRePasswordCheck(true);
    } else {
      setRePasswordCheck(false);
    }
    setRePassword(re_pw);

    // check with password
    if (password === re_pw) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    fetchSignUp(email, password)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_TOKEN", token: data.token });
        alert("회원가입이 완료되었습니다.");
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  return (
    <S.Register>
      <IdInput handleChange={handleChangeId} />
      <PasswordInput handleChange={handleChangePassword} />
      <PasswordInput handleChange={handleChangeRePassword} />
      {emailCheck && passwordCheck && repasswordCheck && isPasswordMatch ? (
        <Button handleClick={handleClick}>Submit</Button>
      ) : (
        <Button>Cancel</Button>
      )}
    </S.Register>
  );
};

export default RegisterPage;
