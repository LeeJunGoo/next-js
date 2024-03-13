import React from "react";

const UILayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full h-svh flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="h-56 w-300 p-10  text-align: left">
          <div className=" border-spacing-11 text-4xl">{children}</div>
        </div>
      </div>
    </>
  );
};

export default UILayout;
