import React from "react";
import * as S from "./style";

interface ButtonProps {
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ handleClick, children }) => {
  return (
    <>
      {handleClick ? (
        <S.PrimaryButton onClick={handleClick}>{children}</S.PrimaryButton>
      ) : (
        <S.SecondaryButton>{children}</S.SecondaryButton>
      )}
    </>
  );
};
