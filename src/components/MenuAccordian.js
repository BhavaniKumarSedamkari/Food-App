import { restroImage } from "../utils/constants";
import { additem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const MenuAccordian = ({e})=>{
    const dispatch = useDispatch();
    const addItemToCart=(cartcard)=>{
        dispatch(additem((cartcard)))
    }
    return(
        <div>
                        <div className="flex m-4">
                            <div className="w-9/12">
                                <h3 className="font-bold">{e.card.info.name}</h3>
                                <h3 className="font-bold">₹{e.card.info.price/100}</h3>
                                <h3 className="text-gray-600 text-sm">{e.card.info.description}</h3>
                            </div>
                            <div className="w-3/12">
                                <button className="border-1 border-solid border-black absolute px-2 hover:bg-amber-300 bg-amber-100 hover:cursor-pointer rounded-2xl" onClick={()=>addItemToCart(e)}>Add +</button>
                                <img src={restroImage+e.card.info.imageId} className="rounded-2xl"/>
                            </div>
                        </div>
                        <div className="bg-gray-200 w-12/12 h-1"></div>
            </div>
    )
};

export default MenuAccordian;