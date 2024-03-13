import React from "react";

const SSGPage = async () => {
  const response = await fetch("http://localhost:3000/api/company");
  const { company } = await response.json();

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
    </div>
  );
};

export default SSGPage;
