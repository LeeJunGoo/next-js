import React from "react";

const SSRPage = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    cache: "no-cache",
  });
  const { fact } = await response.json();
  return <div>{fact}</div>;
};

export default SSRPage;
