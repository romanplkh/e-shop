import React from "react";

const PreviewList = ({ title, items }) => {
  return (
    <div>
      <h1>{title}</h1>

      <div>
        {items
          .filter((el, i) => i < 4)
          .map(item => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
    </div>
  );
};

export default PreviewList;
