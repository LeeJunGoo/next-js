import React from "react";

const ISRPage = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    next: {
      revalidate: 5,
    },
  });
  const { fact } = await response.json();

  return <div>{fact}</div>;
};

export default ISRPage;
