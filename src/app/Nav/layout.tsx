import Link from "next/link";
import React from "react";

const NavLayout = () => {
  return (
    <nav className="w-screen flex justify-center  gap-10 p-5">
      <Link
        className=" w-1/4 h-20 flex justify-center items-center border-solid border-1 shadow-2xl border-violet-600 border-ra rounded-lg  hover:bg-violet-600"
        href={"/SSG"}
      >
        SSG이동
      </Link>
      <Link
        className=" w-1/4 h-20 flex justify-center items-center border-solid border-1 shadow-2xl  border-violet-600 border-ra rounded-lg  hover:bg-violet-600"
        href={"/ISR"}
      >
        ISR이동
      </Link>
      <Link
        className=" w-1/4 h-20 flex justify-center items-center border-solid border-1 shadow-2xl border-violet-600 border-ra rounded-lg  hover:bg-violet-600"
        href={"/SSR"}
      >
        SSR이동
      </Link>
      <Link
        className=" w-1/4 h-20 flex justify-center items-center border-solid border-1 shadow-2xl border-violet-600 border-ra rounded-lg  hover:bg-violet-600"
        href={"/CSR"}
      >
        CSR이동
      </Link>
    </nav>
  );
};

export default NavLayout;
