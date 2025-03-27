import React from "react";
import { Provider } from "react-redux";
import Header from "./Common/Header";
import { createStoreHook } from "react-redux";
import Footer from "./Common/Footer";

export default function LayoutWrap({children}){
    return(
        <>
        
            <Header/>
            {children}
            <Footer/>
            
        </>
    )
}