import React from "react";

const SSGPage = async () => {
  const response = await fetch(`${process.env.NEXT_SERVER_URL}/companyInfo`);
  const companyInfo = await response.json();

  console.log(companyInfo);
  return (
    <div>
      <p>{companyInfo.name}</p>
      <p>{companyInfo.description}</p>
    </div>
  );
};

export default SSGPage;
