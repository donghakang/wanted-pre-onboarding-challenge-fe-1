import React, { useEffect, useState } from "react";
import { TodoProps } from "../../../@types/todo";
import { useLoginState } from "../../../context/LoginContext";
import { getTodoById } from "../../../helper/api";

const Todo: React.FC<{ id: string }> = ({ id }) => {
  const { token } = useLoginState();
  const [data, setData] = useState<TodoProps | null>(null);

  useEffect(() => {
    if (id && token) {
      getTodoById(id, token)
        .then((res) => res.json())
        .then((data: { data: TodoProps } | undefined) => {
          if (data !== undefined) {
            setData(data.data);
          }
        });
    }
  }, [token, id]);

  return (
    <div>
      {data?.title} {data?.content}
    </div>
  );
};

export default Todo;
