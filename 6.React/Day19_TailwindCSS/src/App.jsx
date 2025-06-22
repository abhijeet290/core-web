import React from "react";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold underline bg-cyan-300 border-t-2 border-b-4 ">
          Hello from tailwind
        </h2>
        <h2 className="text-3xl font-bold underline bg-cyan-300 border-4 border-red-500">
          Hello from tailwind
        </h2>
      </div>
      <button className="bg-cyan-200 rounded-2xl m-3 p-[10px]">
        click me
      </button>
    </>
  );
}
