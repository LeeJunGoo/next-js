"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, patchTodo, postTodo } from "./useQuery";
import { queryKey } from "../queryKey/querykey";

// CREATE
export const useCreate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.todos] });
    },
  });
};

//UPDATE
export const useUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.todos] });
    },
  });
};

//DELETE
export const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.todos] });
    },
  });
};
