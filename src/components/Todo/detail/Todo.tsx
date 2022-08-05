import React, { useEffect, useState } from 'react'
import { TodoProps } from '../../../@types/todo'
import { useLoginState } from '../../../context/LoginContext'
import { getTodoById } from '../../../helper/api'
import { diffTime, toDate } from '../../../helper/time'
import * as S from '../style'
const Todo: React.FC<{ id: string }> = ({ id }) => {
  const { token } = useLoginState()
  const [data, setData] = useState<TodoProps | null>(null)

  useEffect(() => {
    if (id && token) {
      getTodoById(id, token)
        .then((res) => res.json())
        .then((data: { data: TodoProps } | undefined) => {
          if (data !== undefined) {
            setData(data.data)
          }
        })
    }
  }, [token, id])

  return (
    <S.Todo>
      {data && (
        <>
          <h2>{data.title}</h2>
          <div className="time-container">
            <span>등록시간: {toDate(Date.parse(data.createdAt))}</span>
            {data.updatedAt && (
              <span>수정: {diffTime(Date.parse(data.updatedAt))}</span>
            )}

            {/* {data.createdAt} {data?.updatedAt} */}
          </div>
          <div className="todo-item-content">{data.content}</div>
        </>
      )}
    </S.Todo>
  )
}

export default Todo
