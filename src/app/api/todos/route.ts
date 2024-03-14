//읽기
export async function GET(request: Request) {
  const response = await fetch(`${process.env.NEXT_SERVER_URL}/todos`);
  const todos = await response.json();

  if (!todos) {
    return new Response("todos not found", { status: 404 });
  }

  return Response.json({ todos });
}

//생성
export async function POST(request: Request) {
  const { title, content } = await request.json();

  const response = await fetch(`${process.env.NEXT_SERVER_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, isDone: false }),
  });
  if (!response) {
    return new Response("todos not found", { status: 404 });
  }

  const data = response.json();
  return Response.json({ data });
}

//수정
export async function PATCH(request: Request) {
  const { id, isDone } = await request.json();

  const response = await fetch(`${process.env.NEXT_SERVER_URL}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isDone: isDone }),
  });
  const data = await response.json();

  if (!response) {
    return new Response("todos not found", { status: 404 });
  }

  return Response.json({ data });
}

//삭제
export async function DELETE(request: Request) {
  const id = await request.json();

  const response = await fetch(`${process.env.NEXT_SERVER_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (!response) {
    return new Response("todos not found", { status: 404 });
  }

  const data = await response.json();
  return Response.json({ data });
}
