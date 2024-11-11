import React from "react";

const FlashMessage = ({ message }) => {
  return (
    <div>
      {message?.success && <div className="bg-emerald-100 border border-emerald-400 text-black font-bold p-4 rounded-b">{message.success}</div>}

      {message?.error && <div className="bg-rose-300 border border-rose-500 text-black font-bold p-4 rounded-b">{message.error}</div>}
    </div>
  );
};

export default FlashMessage;
