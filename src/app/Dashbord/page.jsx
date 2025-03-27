import React from "react";
import Sidebar from "../cmmon/Sidebar";
import Footer from "../cmmon/Footer";
import Header from "../cmmon/Header";

export default function Dashbord() {
    return (
        <>
            <Header />
            <div class="flex  bg-[#F5F7FF]">
                <Sidebar />
                <div class=" w-[84%] relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]">
                    <h1 class="text-[25px] font-[500] mb-[10px]">DASHBORD</h1>
                    <div class="grid lg:grid-cols-4  py-[30px] gap-8 mt-8 mb-[50px]">
                        <div class="rounded-[5px] py-[60px] text-white px-[40px] text-left" style={{ backgroundColor: "rgb(240, 208, 120)" }}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square-plus" class=" w-auto h-10 svg-inline--fa fa-square-plus text-[40px] pb-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
                            </svg>
                            <h2 class="pb-4">View Progress</h2>
                            <p>Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.</p>
                        </div>
                        <div class="rounded-[5px] py-[60px] text-white px-[40px] text-left" style={{ backgroundColor: "rgb(240, 208, 120)" }}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square-plus" class=" w-auto h-10 svg-inline--fa fa-square-plus text-[40px] pb-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
                            </svg>
                            <h2 class="pb-4">View Graph </h2>
                            <p>Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.</p>
                        </div>
                        <div class="rounded-[5px] py-[60px] text-white px-[40px] text-left" style={{ backgroundColor: "rgb(240, 208, 120)" }}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square-plus" class=" w-auto h-10 svg-inline--fa fa-square-plus text-[40px] pb-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
                            </svg>
                            <h2 class="pb-4">View Statistics</h2>
                            <p>Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.</p>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}








