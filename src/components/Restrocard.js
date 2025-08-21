import { restroImage } from "../utils/constants";

const Restrocard=(props)=>{
    var {resdata}=props;
       return(
       <div className="w-50 p-2 m-1 h-100 border-solid border-black border-[1px] bg-amber-50 hover:cursor-pointer rounded-sm hover:border-[2px] hover:bg-amber-100">
           <div className="restro-image">
               <img className="image" 
               src=
   {restroImage+
   resdata.info.cloudinaryImageId}/>
           </div>
           <div className="font-bold">
               <h3>{resdata.info.name}</h3>
           </div>
           <div className="restro-cuisine">
              <h4>{resdata.info.cuisines.join(", ")}</h4> 
           </div>
           <div className="restro-rating">
           <h4>{resdata.info.avgRating} stars</h4> 
           </div>
           <div className="restro-deliveryTime">
           <h4>{resdata.info.sla.deliveryTime} minutes</h4> 
           </div>
       </div>
           
       )
   };

export const labelOnCard= (Restrocard)=>{
    return (props)=>{
        return (
            <div>
                <label className="font-bold my-2 mx-3 bg-amber-100 px-1 text-xs absolute border-solid border-black border-1 rounded-xs">
                    Promoted
                </label>
                <Restrocard {...props}/>
            </div>
        )
    }

};

   export default Restrocard;