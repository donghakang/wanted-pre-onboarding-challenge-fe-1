import React from "react";
import * as S from "./style";

interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const IdInput: React.FC<InputProps> = ({ handleChange }) => {
  return <S.IdInput type="email" onChange={handleChange} />;
};

export const PasswordInput: React.FC<InputProps> = ({ handleChange }) => {
  return <S.PasswordInput type="password" onChange={handleChange} />;
};
