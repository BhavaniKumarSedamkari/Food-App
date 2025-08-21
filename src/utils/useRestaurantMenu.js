import { useState, useEffect } from "react";
import { api_menu } from "../utils/constants";
import { useParams } from "react-router";

const useRestaruantMenu = ()=>{
    const {resid}=useParams();
    const [resMenu, setresMenu]= useState(null);
    useEffect(()=>{
        apicall();
    },[])

    const apicall = async ()=>{
        const api= await fetch(api_menu+resid);
        const json = await api.json();
        setresMenu(json);
    }

    return resMenu;
};

export default useRestaruantMenu;