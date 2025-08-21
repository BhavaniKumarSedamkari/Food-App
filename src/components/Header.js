import { headerLogo } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import userInfo from "../utils/userInfo.js";

const Header =()=>{
    const {username} = useContext(userInfo);
    const [loginData,setloginData] = useState("Log in");
    const onlineStatus=useOnlineStatus();
    const cartitems = useSelector((e)=>e.cart.items);

    return(
        <div className="flex border-[1px] border-solid border-black p-1 justify-between bg-amber-50">
            <div className="align-middle">
                <img className="w-20 py-4 bg-amber-50" src= {headerLogo}/>    
            </div>
            <div>
                <ul className="flex p-4 align-middle">
                    <li className="p-2">Status: {onlineStatus==="online"? "Online ✅": "Offline ❌"} </li>
                    <li className="p-2 underline hover:font-bold"><Link to ="/">Home</Link></li>
                    <li className="p-2 underline hover:font-bold"><Link to="/about">About Us</Link></li>
                    <li className="p-2 underline hover:font-bold"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-2 underline hover:font-bold mr-0.5"><Link to="/cart">Cart ({cartitems.length} items)</Link></li>
                    <button className="hover:cursor-pointer border-[0.1px] px-0.5 hover:border-1 hover:bg-amber-100 rounded-sm" onClick={()=>{
                        loginData==="Log in"? setloginData("Log out"): setloginData("Log in")
                    }}>{loginData}</button>
                    <li className="p-2 hover:font-bold">{username}</li>
                </ul>

            </div>
        </div>
    )
}

export default Header;