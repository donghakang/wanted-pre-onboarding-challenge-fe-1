import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { IdInput, PasswordInput } from "../components/Input";
import { isEmail, isPassword } from "../helper/login";
import * as S from "./style";

const AuthPage = () => {
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);

  function handleChangeId(e: React.ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;
    if (isEmail(email)) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  }

  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    if (isPassword(password)) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('button')
  }

  return (
    <S.Auth>
      <IdInput handleChange={handleChangeId} />
      <PasswordInput handleChange={handleChangePassword} />
      {emailCheck && passwordCheck ? (
        <Button handleClick={handleClick}>Submit</Button>
      ) : (
        <Button>Cancel</Button>
      )}
      <Link to={"/register"}>처음이신가요?</Link>
    </S.Auth>
  );
};

export default AuthPage;
