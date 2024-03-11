"use client";

import test from "node:test";
import React, { useEffect, useState } from "react";

const CSRPage = () => {
  const [content, setContent] = useState("");
  console.log("test");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const { fact } = await response.json();
    setContent(fact);
  };

  if (!content) {
    return <div>로딩중....</div>;
  }

  return <div>{content}</div>;
};

export default CSRPage;
