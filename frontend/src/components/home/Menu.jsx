import React from 'react'
import MenuCard from "./MenuCard.jsx";
import burger1 from "../../assests/burger1.jpg";
import burger2 from "../../assests/burger2.webp";
import burger3 from "../../assests/burger3.jpg";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

const Menu = () => {

  const dispatch = useDispatch();
  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "hamBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "creamyBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
  };
  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard itemNum={1} burgerSrc={burger1} price={200} title="cheese burger" handler={addToCartHandler} delay={0.1} />
        <MenuCard itemNum={2} burgerSrc={burger2} price={500} title="ham burger" handler={addToCartHandler} delay={0.5} />
        <MenuCard itemNum={3} burgerSrc={burger3} price={1800} title="creamy burger" handler={addToCartHandler} delay={0.8} />
      </div>
    </section>
  );
};

export default Menu
