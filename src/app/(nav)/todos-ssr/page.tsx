import { Todo } from "@/interface/types";
import Link from "next/link";

const SSRPage = async () => {
  const response = await fetch(`${process.env.NEXT_SERVER_URL}/todos`, {
    cache: "no-cache",
  });
  const todos: Todo[] = await response.json();

  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.content}</p>
            <p>{item.isDone}</p>
          </li>
        ))}
      </ul>

      <Link href={"/report"}>할일정보통계보러가기</Link>
    </div>
  );
};

export default SSRPage;
