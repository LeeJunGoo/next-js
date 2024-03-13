//Route handler:
//1) 프론트엔드에서 request =>  백엔드는 DB에 requset => DB에서는 데이터를 다시 response => 백엔드에 전달 => 서버에서 전달받은 내용을 프론트 엔드에게 response =>
//2) react component가 아니다.!
//3) 현재 파일 경로가 백엔드 URL이다. ==> (api/practice/get()
//4) //서버와 접속

//읽기
export async function GET(request: Request) {
  const response = await fetch("http://localhost:4000/todos");
  const todos = await response.json();

  if (!todos) {
    return new Response("todos not found", { status: 404 });
  }

  return Response.json({ todos });
}

//생성
//500 백엔드 에러 발생 튜터님에게 물어보기!!
export async function POST(request: Request) {
  //body에서 값을 가져온다.
  const newTodo = await request.json();

  const response = await fetch(`http://localhost:4000/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  if (!response) {
    return new Response("todos not found", { status: 404 });
  }

  // return Response.json({ data });
}

//수정
export async function PATCH(request: Request) {
  const { id, isDone } = await request.json();

  const response = await fetch(`http://localhost:4000/todos/${id}`, {
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

  const response = await fetch(`http://localhost:4000/todos/${id}`, {
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
