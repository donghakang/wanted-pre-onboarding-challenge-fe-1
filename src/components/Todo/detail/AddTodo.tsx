import React, { useState } from 'react'
import { TodoProps } from '../../../@types/todo'
import { useLoginState } from '../../../context/LoginContext'
import { createTodo } from '../../../helper/api'
import { Button } from '../../Button'
import { Input } from '../../Input'

export const AddTodo: React.FC<{ refresh: () => void }> = ({ refresh }) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [data, setData] = useState<TodoProps[]>([])
  const { token } = useLoginState()

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }

  function handleContentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value)
  }

  function handleCreateTodo() {
    createTodo(title, content, token)
      .then((res) => res.json())
      .then((data: { data: TodoProps | undefined }) => {
        refresh()
      })
  }

  return (
    <div>
      <h1>Add Todo</h1>
      <Input placeholder="제목" handleChange={handleTitleChange} />
      <Input placeholder="내용" handleChange={handleContentChange} />
      <Button handleClick={handleCreateTodo}>등록하기</Button>
    </div>
  )
}
