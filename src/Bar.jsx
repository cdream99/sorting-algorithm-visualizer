import React from "react";

export default function Bar({ item, color }) {
  return (
    <div
      className="bar-strip"
      style={{ height: `${item * 8}px`, backgroundColor: `${color}` }}
    ></div>
  );
}
