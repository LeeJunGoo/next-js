"use client";

import { useQuery } from "@tanstack/react-query";

export default function Home() {
  //useQuery를 사용하여 fetch(request)를 전달하는 곳은  DB가 아닌 백엔드(api/practice/route.ts)에 요청하는 것이다.
  // const {
  //   data: todos,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: fetchData,
  // });

  // const { mutate: createMutate } = useMutation({
  //   mutationFn: PostData(NewTodo)
  // });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error</div>;
  // }

  // if (!todos) {
  //   return <div>null 값</div>;
  // }

  return (
    <>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="bg-blue-100 border border-blue-400 text-blue-700 p-8 m-2 rounded">
            <h2>{todo.title}</h2>
            <p>{todo.contents}</p>
            {todo.isDone ? <p>Done</p> : <p>isDone</p>}
          </li>
        ))}
      </ul> */}
    </>
  );
}
