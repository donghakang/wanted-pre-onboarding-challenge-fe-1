import React, { useEffect, useState } from 'react'
import { TodoProps } from '../../../@types/todo'
import { useLoginState } from '../../../context/LoginContext'
import { createTodo, getTodoById, updateTodo } from '../../../helper/api'
import { Button } from '../../Button'
import { Input } from '../../Input'

export const UpdateTodo: React.FC<{ id: string; refresh: () => void }> = ({
  id,
  refresh,
}) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const { token } = useLoginState()

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

  function handleContentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value)
  }

  function handleUpdateTodo() {
    updateTodo(id, title, content, token)
      .then((res) => res.json())
      .then((data: { data: TodoProps | undefined }) => {
        refresh()
      })
  }

  return (
    <div>
      <h1>Update Todo</h1>
      <Input
        placeholder="제목"
        value={title}
        handleChange={handleTitleChange}
      />
      <Input
        placeholder="내용"
        value={content}
        handleChange={handleContentChange}
      />
      <Button handleClick={handleUpdateTodo}>등록하기</Button>
    </div>
  )
}
