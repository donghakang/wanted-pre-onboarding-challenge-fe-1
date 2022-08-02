import React, { useEffect, useState } from "react";
import { TodoProps } from "../@types/todo";
import { Todo, TodoList } from "../components/Todo";
import { AddTodo } from "../components/Todo/detail/AddTodo";
import { UpdateTodo } from "../components/Todo/detail/UpdateTodo";
import { useLoginState } from "../context/LoginContext";
import { getTodos } from "../helper/api";

const TodoPage: React.FC = () => {
  const { token } = useLoginState();
  const [data, setData] = useState<TodoProps[]>([]);
  const [mode, setMode] = useState<"detail" | "update" | "create" | "">("");
  const [currentData, setCurrentData] = useState<string>("");

  function refresh() {
    getTodos(token)
      .then((res) => res.json())
      .then((data: { data?: TodoProps[]; detail?: string }) => {
        if (data !== undefined) {
          if (data.detail) {
            // 에러 메시지
          }
          if (data.data) {
            setData(data.data);
          }
        }
      });
  }

  useEffect(() => {
    if (token) {
      refresh();
    }
  }, [token]);

  return (
    <div>
      <TodoList
        data={data}
        handleItemClick={setCurrentData}
        setMode={setMode}
        refresh={refresh}
      />
      <button onClick={() => setMode("create")}>추가하기</button>
      {mode === "detail" && <Todo id={currentData} />}
      {mode === "create" && <AddTodo refresh={refresh} />}
      {mode === "update" && <UpdateTodo id={currentData} refresh={refresh} />}
      {/* <UpdateTodo id={currentData} refresh={refresh} /> */}
    </div>
  );
};

export default TodoPage;
