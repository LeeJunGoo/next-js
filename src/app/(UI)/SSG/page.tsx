import React from "react";

const SSGPage = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const { fact } = await response.json();

  return <div>{fact}</div>;
};

export default SSGPage;
