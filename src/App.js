import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import userInfo from "./utils/userInfo";

const Applayout=()=>{
    
        return(
            <div>
                <userInfo.Provider value={{username : "Bhavani"}}>
                <Provider store={appStore}>
                <Header/>
               <Outlet/>
               </Provider> 
               </userInfo.Provider>
            </div>   
        )
    
};

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Applayout/>}>
                <Route path="/" element={<Body/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/restaurant/:resid" element={<RestaurantMenu/>}></Route>
                <Route path="/*" element={<Error/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);