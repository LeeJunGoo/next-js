"use client";

import { InputTodo } from "@/interface/types";
import { ChangeEvent, useState } from "react";

const useInput = (initialState: InputTodo) => {
  const [inputValue, setInputValue] = useState(initialState);

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const inputReset = () => {
    setInputValue(initialState);
  };

  return { inputValue, onInputChangeHandler, onTextAreaChangeHandler, inputReset };
};

export default useInput;
