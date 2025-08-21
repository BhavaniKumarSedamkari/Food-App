import Restrocard, {labelOnCard} from "./Restrocard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{

    var [resobjStatevarible,setresobjStatevarible]=useState([]);

    var [filteredRestaurant, setfilteredRestaurant] = useState(resobjStatevarible);

    var [inputsearch, setinputsearch] = useState("");

    const PromotedRestaurant = labelOnCard(Restrocard);

    useEffect(()=>{
        callingApi();
    },[]);

    const callingApi = async ()=>{

    const apicall = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await apicall.json();
    setresobjStatevarible(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus=useOnlineStatus();
    if(onlineStatus==="offline"){
        return <p>You are offline. Please check your internet conection </p>
    };
    
    if(resobjStatevarible.length===0){
        return <Shimmer/>
    }

    return(
        <div className="">
            <div className="flex">
                <div className="flex p-2">
                <input type="text" className="border-[1px] border-solid border-black rounded-sm" onChange={(x)=>{
                    setinputsearch(x.target.value);
                }}></input>
                <button className="border-[1px] border-solid border-black p-[1px] hover:cursor-pointer hover:bg-gray-200 rounded-sm ml-0.5 bg-gray-100 hover:border-[1px]" onClick={()=>{
                   const filteredtext=resobjStatevarible.filter((res)=>{
                       return res.info.name.toLowerCase().includes(inputsearch.toLowerCase())
                    })
                    setfilteredRestaurant(filteredtext);
                }}>Search</button>
                </div>
            <div className="">
                <button className="border-[1px] border-solid border-black p-1 hover:cursor-pointer m-2 hover:bg-gray-200 rounded-sm bg-gray-100 hover:border-[1px]"
                onClick={()=>{
                    var filteredData=resobjStatevarible.filter((test)=> test.info.avgRating>4.5);
                    setfilteredRestaurant(filteredData);
                }}> Top Restaurants
                </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((rest,index)=>{
                        return <Link key={rest.info.id} to ={"/restaurant/"+rest.info.id} ><PromotedRestaurant resdata={rest} /></Link>
                        
                    })
                }
            </div>
        </div>
    )
}

export default Body;