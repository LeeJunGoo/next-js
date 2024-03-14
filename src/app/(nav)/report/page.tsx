import { Todo } from "@/interface/types";
import React from "react";

const ISRPage = async () => {
  const response = await fetch(`${process.env.NEXT_SERVER_URL}/todos`, {
    next: {
      revalidate: 10,
    },
  });

  const todos: Todo[] = await response.json();

  if (!todos) {
    return new Response("todos not found", { status: 404 });
  }

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
