import React from "react";
import Bar from "./Bar";

export default function BarContainer({ numbers, idx }) {
  return (
    <div className="bar-container">
      {numbers?.map((item, index) => {
        if (
          idx?.swapping == true &&
          (index == idx?.first || index == idx?.second)
        ) {
          return <Bar item={item} color={"limegreen"} />;
        } else if (index == idx?.first || index == idx?.second) {
          return <Bar item={item} color={"navy"} />;
        } else {
          return <Bar item={item} color={"lightcoral"} />;
        }
      })}
    </div>
  );
}
