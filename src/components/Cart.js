import { useDispatch, useSelector } from "react-redux";
import {clear} from "../utils/cartSlice"
import MenuAccordian from "./MenuAccordian";

const Cart =()=>{
    const dispatch = useDispatch();
   const clearcart = ()=>{
        dispatch(clear());

    }

    const cartItems = useSelector((e)=>e.cart.items);
    return(
        <div className="justify-self-center w-6/12 p-2">
            <div className="">
              <div>
                <h1 className="text-center text-amber-500 font-bold text-xl p-2 m-2 underline">Cart</h1>
              </div>
              {cartItems.map((item,index)=>{console.log(item)
                    return (
                        <MenuAccordian e={item} key={index}/>
                    )
                })}
            </div>
            <div className="justify-self-center">
             <button className="font-bold text-xs p-2 border-solid border-1 m-4 border-black rounded-lg bg-amber-100 hover:bg-amber-400" onClick={clearcart}>Clear Cart</button>
             </div>
        </div>
    )
};

export default Cart;