import React from "react";
import { AiFillDelete } from "react-icons/ai";

const CartItem = ({
  imgSrc,
  name,
  qty,
  price,
  increment,
  decrement,
  deleteHandler,
  id,
}) => {
  console.log({ qty });
  return (
    <div className="cartItem">
      <img src={imgSrc} alt={name} />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>
      <div>
        <button onClick={() => increment(id)}>+</button>
        <p>{qty}</p>
        <button onClick={() => decrement(id)}>-</button>
      </div>
      <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
  );
};

export default CartItem;
