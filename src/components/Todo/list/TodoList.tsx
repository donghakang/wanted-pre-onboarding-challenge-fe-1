import React, { useEffect, useState } from 'react'
import { TodoProps } from '../../../@types/todo'
import { useLoginState } from '../../../context/LoginContext'
import { deleteTodo, getTodos } from '../../../helper/api'

interface TodoListProps {
  data: TodoProps[]
  // 아이템 한개를 클릭하면 변하는 현상
  handleItemClick: React.Dispatch<React.SetStateAction<string>>
  setMode: React.Dispatch<
    React.SetStateAction<'' | 'detail' | 'update' | 'create'>
  >
  refresh: () => void
}

const TodoList: React.FC<TodoListProps> = ({
  data,
  handleItemClick,
  setMode,
  refresh,
}) => {
  const { token } = useLoginState()

  function handleDeleteTodo(id: string) {
    deleteTodo(id, token)
      .then((res) => res.json())
      .then((data) => {
        refresh()
      })
  }

  return (
    <div>
      {data.length > 0 ? (
        data.map((todo: TodoProps) => (
          <div key={todo.id}>
            <h2
              onClick={() => {
                handleItemClick(todo.id)
                setMode('detail')
              }}
            >
              {todo.title}
            </h2>
            <span>{todo.content}</span>
            <button
              onClick={() => {
                setMode('update')
              }}
            >
              수정하기
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>휴지통</button>
          </div>
        ))
      ) : (
        <div>Todo List empty</div>
      )}{' '}
    </div>
  )
}

export default TodoList
