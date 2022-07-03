import React from "react";
import { appWindow } from "@tauri-apps/api/window";

const TitleBar = () => {
  return (
    <div
      data-tauri-drag-region
      className="h-6 bg-black text-white flex justify-between z-50"
    >
      <p>speaq</p>

      <div className="flex">
        <button onClick={() => appWindow.minimize()} className="h-6 w-6">
          -
        </button>
        <button
          onClick={() => appWindow.toggleMaximize()}
          className="h-6 w-6"
        >
          o
        </button>
        <button onClick={() => appWindow.close()} className="h-6 w-6">
          x
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
