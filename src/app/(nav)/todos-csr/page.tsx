"use client";

import { deleteTodo, getTodo, patchTodo, postTodo } from "@/components/useQuery/query";
import useInput from "@/hooks/useInput";
import { InputTodo, NewTodo } from "@/interface/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MouseEvent } from "react";

const CSRPage = () => {
  const { inputValue, onInputChangeHandler, onTextAreaChangeHandler, inputReset } = useInput({
    title: "",
    content: "",
  });

  const queryClient = useQueryClient();

  // C
  const { mutate: createMutate } = useMutation({
    mutationFn: (newTodo: InputTodo) => postTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  //R
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodo,
  });

  // U
  const { mutate: editMutate } = useMutation({
    mutationFn: (editTodo: NewTodo) => patchTodo(editTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  //D
  const { mutate: deleteMutate } = useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
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

  const formButtonEventHandler = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      title: inputValue.title,
      content: inputValue.content,
    };

    createMutate(newTodo);
  };

  const deleteButtonEventHandler = (id: string) => {
    deleteMutate(id);
  };

  const ToggleButtonEventHandler = ({ id, isDone }: NewTodo) => {
    const editTodo = {
      id,
      isDone: !isDone,
    };

    editMutate(editTodo);
  };

  const WorkingTodo = todos.filter((item) => (item.isDone ? true : false));
  const DoneTodo = todos.filter((item) => (!item.isDone ? true : false));
  return (
    <>
      <form onSubmit={formButtonEventHandler}>
        <input name="title" onChange={onInputChangeHandler} placeholder="제목을 입력해주세요"></input>
        <textarea name="content" onChange={onTextAreaChangeHandler} placeholder="내용을 입력해주세요"></textarea>
        <button type="submit">생성</button>
      </form>
      <ul>
        {WorkingTodo.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.content}</p>
            <button onClick={() => ToggleButtonEventHandler({ id: item.id, isDone: item.isDone })}>완료</button>
            <button onClick={() => deleteButtonEventHandler(item.id)}>삭제</button>
          </li>
        ))}
      </ul>

      <ul>
        {DoneTodo.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.content}</p>
            <button onClick={() => ToggleButtonEventHandler({ id: item.id, isDone: item.isDone })}>취소</button>
            <button onClick={() => deleteButtonEventHandler(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CSRPage;
