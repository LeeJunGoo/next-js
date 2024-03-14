"use client";
import useInput from "@/util/hooks/useInput";
import { useCreate } from "@/util/hooks/useMutation";
import React, { MouseEvent } from "react";

const FormTodos = () => {
  const { inputValue, onInputChangeHandler, onTextAreaChangeHandler, inputReset } = useInput({
    title: "",
    content: "",
  });
  const createMutate = useCreate();

  const formButtonEventHandler = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      title: inputValue.title,
      content: inputValue.content,
    };
    createMutate.mutate(newTodo);
    inputReset();
  };

  return (
    <form onSubmit={formButtonEventHandler}>
      <input
        name="title"
        value={inputValue.title}
        onChange={onInputChangeHandler}
        placeholder="제목을 입력해주세요"
        required
      ></input>
      <textarea
        name="content"
        value={inputValue.content}
        onChange={onTextAreaChangeHandler}
        placeholder="내용을 입력해주세요"
        required
      ></textarea>
      <button type="submit">생성</button>
    </form>
  );
};

export default FormTodos;
