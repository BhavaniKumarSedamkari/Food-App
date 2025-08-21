import { useEffect, useState } from "react";

const useOnlineStatus= ()=>{
    const [onlineStatus, setonlineStatus] =useState("online");

    useEffect(()=>{
        netStatus();
    },[]);

    const netStatus = ()=>{
        window.addEventListener("online", ()=>{
            setonlineStatus("online");
        });
        window.addEventListener("offline", ()=>{
            setonlineStatus("offline");
        });
    }
    
    return onlineStatus;
};

export default useOnlineStatus;