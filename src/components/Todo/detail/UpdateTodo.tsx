import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TodoProps } from '../../../@types/todo'
import { useLoginState } from '../../../context/LoginContext'
import { getTodoById, updateTodo } from '../../../helper/api'
import { Button } from '../../Button'
import { Input, TextArea } from '../../Input'
import * as S from '../style'
export const UpdateTodo: React.FC<{ refresh: () => void }> = ({ refresh }) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const { token } = useLoginState()

  const navigate = useNavigate()
  const urlParams = new URLSearchParams(location.search)
  const id = urlParams.get('id')

  useEffect(() => {
    if (id && token) {
      getTodoById(id, token)
        .then((res) => res.json())
        .then((data: { data: TodoProps } | undefined) => {
          if (data !== undefined) {
            setTitle(data.data.title)
            setContent(data.data.content)
          }
        })
    }
  }, [token, id])

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }

  function handleContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value)
  }

  function handleUpdateTodo() {
    if (id !== null) {
      updateTodo(id, title, content, token)
        .then((res) => res.json())
        .then((data: { data: TodoProps | undefined }) => {
          refresh()
        })
        .then(() => navigate('/'))
    }
  }

  return (
    <S.UpdateTodo>
      <h1>Update Todo</h1>
      <Input
        placeholder="제목"
        value={title}
        handleChange={handleTitleChange}
      />
      <TextArea
        placeholder="내용"
        value={content}
        handleChange={handleContentChange}
      />
      <Button handleClick={handleUpdateTodo}>등록하기</Button>
    </S.UpdateTodo>
  )
}
