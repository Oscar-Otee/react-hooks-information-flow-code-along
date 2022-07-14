import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

  function handleChangeColor(newChildColor) {
    const randomColor = getRandomColor();
    setColor(randomColor); // update color state to a new value
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;

