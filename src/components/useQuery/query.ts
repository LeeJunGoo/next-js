import { InputTodo, NewTodo, Todo } from "@/interface/types";

//회사 읽어오기
export async function companyGetData(): Promise<Todo[]> {
  const response = await fetch(`http://localhost:3000/api/company`);
  const { company } = await response.json();
  return company;
}

//todo 읽어오기
export async function getTodo(): Promise<Todo[]> {
  const response = await fetch(`http://localhost:3000/api/todos`);
  const { todos } = await response.json();
  return todos;
}

//todo 생성
export async function postTodo(newTodo: InputTodo) {
  const response = await fetch(`http://localhost:3000/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  // server action
}

//todo 삭제
export async function deleteTodo(id: string) {
  const response = await fetch(`http://localhost:3000/api/todos`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });
}

export const patchTodo = async (editTodo: NewTodo) => {
  const response = await fetch("http://localhost:3000/api/todos", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editTodo),
  });
};
