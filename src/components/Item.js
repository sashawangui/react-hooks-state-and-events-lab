import React, { useState } from "react";



function Item({ name, category }) {
  
  const [isOn, setIsOn] = useState(false)
  function handleClick(event) {
    setIsOn(!isOn)
  }
  const cart = isOn ? "Remove From Cart" : "Add to Cart"

  const classNameState = isOn ? "in-cart" : ""

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={classNameState}>{cart}</button>
    </li>
  );
}

export default Item;
