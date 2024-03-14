import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-screen flex justify-center  gap-10 p-5">
      <Link
        className=" w-1/4 h-20 flex justify-center items-center border-solid border-1 shadow-2xl border-violet-600 border-ra rounded-lg  hover:bg-violet-600"
        href={"/about"}
      >
        about
      </Link>
      <Link
        className=" w-1/4 h-20 flex justify-center items-center border-solid border-1 shadow-2xl  border-violet-600 border-ra rounded-lg  hover:bg-violet-600"
        href={"/report"}
      >
        report
      </Link>
      <Link
        className=" w-1/4 h-20 flex justify-center items-center border-solid border-1 shadow-2xl border-violet-600 border-ra rounded-lg  hover:bg-violet-600"
        href={"/todos-csr"}
      >
        todos-CSR
      </Link>
      <Link
        className=" w-1/4 h-20 flex justify-center items-center border-solid border-1 shadow-2xl border-violet-600 border-ra rounded-lg  hover:bg-violet-600"
        href={"/todos-ssr"}
      >
        todos-SSR
      </Link>
    </nav>
  );
};

export default NavBar;
