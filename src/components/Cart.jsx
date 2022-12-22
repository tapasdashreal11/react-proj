import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
  const img2 =
    "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
  return (
    <div className="cart">
      <main>
        {cartItems.length ? (
          cartItems.map((i) => {
            <CartItem
              imgSrc={i.img1}
              name={i.name}
              qty={i.qty}
              price={i.price}
              id={i.id}
            />;
          })
        ) : (
          <h2>No Items Yet!</h2>
        )}
      </main>
      <aside>
        <h2>Subtotal: ${2000}</h2>
        <h2>Shipping: ${200}</h2>
        <h2>Tax: ${20}</h2>
      </aside>
    </div>
  );
};

export default Cart;
