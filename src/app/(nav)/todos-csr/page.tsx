"use client";

import { NewTodo } from "@/interface/types";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useDelete, useUpdate } from "../../../util/hooks/useMutation";
import { getTodo } from "../../../util/hooks/useQuery";
import FormTodos from "@/components/FormTodos";

const CSRPage = () => {
  const router = useRouter();
  const deleteMutate = useDelete();
  const editMutate = useUpdate();

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodo,
  });

  if (isLoading) {
    return <div>로딩중....</div>;
  }

  if (isError) {
    return <div>Error 발생</div>;
  }

  if (!todos) {
    return <div>todos undefined</div>;
  }

  const deleteButtonEventHandler = (id: string) => {
    deleteMutate.mutate(id);
  };

  const toggleButtonEventHandler = ({ id, isDone }: NewTodo) => {
    const editTodo = {
      id,
      isDone: !isDone,
    };
    editMutate.mutate(editTodo);
  };

  const WorkingTodo = todos.filter((item) => (item.isDone ? true : false));
  const DoneTodo = todos.filter((item) => (!item.isDone ? true : false));
  return (
    <>
      <FormTodos />
      <ul>
        {WorkingTodo.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.content}</p>
            <button onClick={() => toggleButtonEventHandler({ id: item.id, isDone: item.isDone })}>완료</button>
            <button onClick={() => deleteButtonEventHandler(item.id)}>삭제</button>
          </li>
        ))}
      </ul>

      <ul>
        {DoneTodo.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.content}</p>
            <button onClick={() => toggleButtonEventHandler({ id: item.id, isDone: item.isDone })}>취소</button>
            <button onClick={() => deleteButtonEventHandler(item.id)}>삭제</button>
          </li>
        ))}
      </ul>

      <button onClick={() => router.push("/report")}>할일정보통계보러가기</button>
    </>
  );
};

export default CSRPage;
