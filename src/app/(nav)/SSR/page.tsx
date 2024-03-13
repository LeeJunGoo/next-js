import React from "react";

const SSRPage = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    cache: "no-cache",

    //   <ul>
    //   {todos.map((item) => (
    //     <li key={item.id}>
    //       <p>{item.title}</p>
    //       <p>{item.contents}</p>
    //       <CustomButton id={item.id} isDone={item.isDone} />
    //       {item.isDone ? <p>true</p> : <p>false</p>}
    //     </li>
    //   ))}
    // </ul>
  });
  const { fact } = await response.json();
  return <div>{fact}</div>;
};

export default SSRPage;
