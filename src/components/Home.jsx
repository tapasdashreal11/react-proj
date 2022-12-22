import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";

const Home = () => {
  const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
  const img2 =
    "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
  const productList = [
    {
      name: "Macbook Pro",
      price: 120000,
      imgSrc: img1,
      id: 1,
    },
    {
      name: "Black Shoes",
      price: 3500,
      imgSrc: img2,
      id: 2,
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({
      type: "addToCart",
      payload: options,
    });
    console.log(options);
    toast.success("Added to cart");
  };

  return (
    <div className="home">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imgSrc={product.imgSrc}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Home;
