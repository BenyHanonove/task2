import React, { useState } from "react";
import "./resizable-table.css";

const ResizableTable = () => {
  const [width, setWidth] = useState("100%");

  const handleClick = () => {
    if (width === "100%") {
      setWidth("50%");
    } else {
      setWidth("100%");
    }
  };

  return (
    <table style={{ width: width }} onClick={handleClick}>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
      </tr>
      <tr>
        <td>Cell 4</td>
        <td>Cell 5</td>
        <td>Cell 6</td>
      </tr>
    </table>
  );
};

export default ResizableTable;
