import { InputTodo, NewTodo, Todo } from "@/interface/types";
// server action

//todo 읽어오기
export async function getTodo(): Promise<Todo[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/todos`);
  const { todos } = await response.json();
  return todos;
}

//todo 생성
export async function postTodo(newTodo: InputTodo) {
  await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
}

//todo 삭제
export async function deleteTodo(id: string) {
  await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/todos`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });
}

//todo 수정
export const patchTodo = async (editTodo: NewTodo) => {
  await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/todos`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editTodo),
  });
};
