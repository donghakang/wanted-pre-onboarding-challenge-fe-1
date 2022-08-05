import React, { useEffect, useState } from 'react'
import { BiDetail } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'
import { TodoProps } from '../@types/todo'

import { Todo, TodoList } from '../components/Todo'
import { AddTodo } from '../components/Todo/detail/AddTodo'
import { UpdateTodo } from '../components/Todo/detail/UpdateTodo'
import { useLoginState } from '../context/LoginContext'
import { getTodos } from '../helper/api'
import * as S from './style'

const TodoPage: React.FC = () => {
  const { token } = useLoginState()
  const { mode } = useParams()
  const urlParams = new URLSearchParams(location.search)
  const id = urlParams.get('id')
  const [data, setData] = useState<TodoProps[]>([])

  function refresh() {
    getTodos(token)
      .then((res) => res.json())
      .then((data: { data?: TodoProps[]; detail?: string }) => {
        if (data !== undefined) {
          if (data.detail) {
            // 에러 메시지
          }
          if (data.data) {
            setData(data.data)
          }
        }
      })
  }

  // token이 바뀔때마다 업데이트 된다.
  useEffect(() => {
    if (token) {
      refresh()
    }
  }, [token])

  // RENDER
  const RenderTodo = () => {
    if (mode === undefined) {
      // query 없으면 TodoList 컴포넌트를 보여준다.
      return (
        <section className="list">
          <TodoList data={data} refresh={refresh} />
        </section>
      )
    } else {
      return (
        <section className="todo">
          {mode === 'detail' && id !== null && <Todo id={id} />}
          {mode === 'create' && <AddTodo refresh={refresh} />}
          {mode === 'update' && id !== null && <UpdateTodo refresh={refresh} />}
        </section>
      )
    }
  }

  return (
    <S.Todo>
      {mode !== undefined && (
        <Link to={'/'} className="todo-button menu-button">
          <BiDetail size={20} />
        </Link>
      )}
      <Link to={'/create'} className="todo-button create-button">
        추가하기
      </Link>
      <RenderTodo />
    </S.Todo>
  )
}

export default TodoPage
