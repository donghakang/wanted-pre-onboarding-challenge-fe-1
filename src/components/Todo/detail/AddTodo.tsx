import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TodoProps } from '../../../@types/todo'
import { useLoginState } from '../../../context/LoginContext'
import { createTodo } from '../../../helper/api'
import { Button } from '../../Button'
import { Input, TextArea } from '../../Input'
import * as S from '../style'
export const AddTodo: React.FC<{ refresh: () => void }> = ({ refresh }) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const { token } = useLoginState()
  const navigate = useNavigate()

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }

  function handleContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value)
  }

  function handleCreateTodo() {
    createTodo(title, content, token)
      .then((res) => res.json())
      .then((data: { data: TodoProps | undefined }) => {
        refresh()
      })
      .then(() => navigate('/'))
  }

  return (
    <S.AddTodo>
      <h1>무슨일을 해야하나요?</h1>
      <Input placeholder="제목" handleChange={handleTitleChange} />
      <TextArea placeholder="내용" handleChange={handleContentChange} />
      <Button handleClick={handleCreateTodo}>등록하기</Button>
    </S.AddTodo>
  )
}
