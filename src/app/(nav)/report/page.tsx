import CustomButton from "@/components/Button";
import { Todo } from "@/interface/types";
import React from "react";

const ISRPage = async () => {
  const response = await fetch("http://localhost:3000/api/todos", {
    next: {
      revalidate: 10,
    },
  });
  const { todos }: { todos: Todo[] } = await response.json();

  const WorkingTodo = todos.filter((item) => (item.isDone ? true : false)).length;
  const DoneTodo = todos.filter((item) => (!item.isDone ? true : false)).length;

  return (
    <>
      <p>전체 총 todo:{todos.length}</p>
      <p>완료 todo:{WorkingTodo}</p>
      <p>작업중인 todo:{DoneTodo}</p>
    </>
  );
};

export default ISRPage;
