import React from 'react'
import { TodoProps } from '../../../@types/todo'
import { useLoginState } from '../../../context/LoginContext'
import { deleteTodo } from '../../../helper/api'
import { BiEdit, BiTrash } from 'react-icons/bi'
import * as S from '../style'
import { Link, useNavigate } from 'react-router-dom'

interface TodoListProps {
  data: TodoProps[]
  refresh: () => void
}

interface TodoItemProps {
  todo: TodoProps
  handleClick: () => void
  handleDelete: () => void
  handleUpdate: () => void
}

// 한개의 Todo Item
const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  handleClick,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <S.TodoItem key={todo.id}>
      <div onClick={handleClick} className="text-wrapper">
        <h4>{todo.title}</h4>
        <span>{todo.content}</span>
      </div>
      <div className="button-wrapper">
        <button onClick={handleUpdate}>
          <BiEdit size={20} />
        </button>
        <button onClick={handleDelete}>
          <BiTrash size={20} />
        </button>
      </div>
    </S.TodoItem>
  )
}

// Todo List
const TodoList: React.FC<TodoListProps> = ({ data, refresh }) => {
  const { token } = useLoginState()
  const navigate = useNavigate()

  function handleItemClick(id: string) {
    navigate(`/detail?id=${id}`)
  }

  function handleDeleteTodo(id: string) {
    deleteTodo(id, token)
      .then((res) => res.json())
      .then(() => {
        //data: { data: TodoProps | undefined }
        refresh()
      })
      .catch((err) => console.error(err))
    // navigate('/todo')
  }

  function handleUpdateTodo(id: string) {
    navigate(`/update?id=${id}`)
  }

  return (
    <S.TodoList>
      {data.length > 0 ? (
        <div className="todolist-container">
          {data.map((todo: TodoProps) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleClick={() => handleItemClick(todo.id)}
              handleDelete={() => handleDeleteTodo(todo.id)}
              handleUpdate={() => handleUpdateTodo(todo.id)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-container">
          <div>
            <h2>첫 해야 할 일을 등록하세요!</h2>
            <span>
              우측 하단에 <Link to="/create">추가하기</Link>버튼을 누르세요!
            </span>
          </div>
        </div>
      )}
    </S.TodoList>
  )
}

export default TodoList
