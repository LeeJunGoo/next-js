export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

export interface NewTodo {
  id: string;
  isDone: boolean;
}

export interface InputTodo {
  title: string;
  content: string;
}
