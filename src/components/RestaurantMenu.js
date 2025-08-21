import Shimmer from "./Shimmer";
import useRestaruantMenu from "../utils/useRestaurantMenu";
import MenuList from "./MenuList";
import { useState } from "react";

const RestaurantMenu=()=>{
    const resMenu = useRestaruantMenu();
    const [menuindex,setmenuindex]=useState();
    
if(resMenu===null){
    return <Shimmer/>
};

const menuinfo= resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards
const resinfo = resMenu?.data?.cards[2]?.card?.card?.info;
const menu = menuinfo.filter((res)=>{
   return res.card.card["@type"]===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
});

return(
    <div>
    <div className="justify-self-center">
        <h1 className="justify-self-start font-bold text-xl py-4">{resinfo.name}</h1>
        <div className="border-solid border-black border-1 p-2 rounded-2xl mb-6">
            <h2 className="font-bold">⭐{resinfo.avgRating} ({resinfo.totalRatingsString}) - {resinfo.costForTwoMessage}</h2>
            <h4 className="font-bold text-amber-500 underline text-s py-2">{resinfo.cuisines.join(", ")}</h4>
        </div>
    </div>
    <div className="justify-items-center">
        {menu.map((e,index)=>{
            return <MenuList e={e} key={index} openMenuList ={index===menuindex?true:false} setmenuindex={setmenuindex} index={index}/>
        })}
    </div>
    </div>
)
};

export default RestaurantMenu;