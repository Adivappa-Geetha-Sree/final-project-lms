'use client'
import Header from "@/app/cmmon/Header";
import React, { use } from "react";
import { Provider } from "react-redux";
import { createStoreHook } from "react-redux";
import Footer from "./cmmon/Footer";

export default function LayoutWrap({ children }) {
    return (
        <>

        
                {/* <Header/> */}
                {children}





        </>
    )
}