import { useState } from "react";

const Cart = () => {
// Add To Cart  - how to increase count of items 
    const [cartCount,setCartCount]=useState(0)
    const HandleClick=()=>{setCartCount(cartCount+1)}
    return (<>
    <h1 >ADD cart items :{cartCount} </h1>
    <button onClick={HandleClick}>Add To Cart</button>
    </>);
}

export default Cart;