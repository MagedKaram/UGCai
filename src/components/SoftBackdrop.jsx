import React from "react";

const SoftBackdrop = () => {
  return (
    <div className="fixed inset-0 -z-1 pointer-events-none">
      <div className="absolute left-1/2 top-20 w-240 -translate-x-1/2 h-120 bg-linear-to-tr from-violet-800/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute right-12 bottom-20 w-105 h-60  bg-linear-to-tr from-fuchsia-700/40 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default SoftBackdrop;
