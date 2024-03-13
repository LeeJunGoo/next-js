// export async function GET(request: Request) {
//   const response = await fetch(`http://localhost:4000/companyInfo`);
//   const companyInfo = await response.json();

//   if (!companyInfo) {
//     return new Response("company not found", { status: 404 });
//   }

//   return Response.json({ companyInfo });
// }

export async function GET(request: Request) {
  const response = await fetch(`http://localhost:4000/companyInfo`);
  const company = await response.json();

  if (!company) {
    return new Response("todos not found", { status: 404 });
  }
  return Response.json({ company });
}
