import React from 'react'
import * as S from './style'

interface InputProps {
  placeholder?: string
  value?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface TextAreaProps {
  placeholder?: string
  value?: string
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const IdInput: React.FC<InputProps> = ({
  handleChange,
  placeholder,
}) => {
  return (
    <S.IdInput type="email" placeholder={placeholder} onChange={handleChange} />
  )
}

export const PasswordInput: React.FC<InputProps> = ({
  handleChange,
  placeholder,
}) => {
  return (
    <S.PasswordInput
      type="password"
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export const Input: React.FC<InputProps> = ({
  handleChange,
  placeholder,
  value,
}) => {
  return (
    <S.PasswordInput
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export const TextArea: React.FC<TextAreaProps> = ({
  handleChange,
  placeholder,
  value,
}) => {
  return (
    <S.TextArea
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}
