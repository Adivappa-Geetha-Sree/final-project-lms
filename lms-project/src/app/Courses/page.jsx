import Link from "next/link";
import React from "react";
import CoursesCard from "../Common/CoursesCard";
import Banner from "../Common/Banner";

export default function Courses() {
    return (
        <>
                <Banner/>
                <div class="max-w-[1300px] m-auto   mt-4 py-5">
                    <div class="grid grid-cols-[73%_auto] gap-4">
                        <div class=" py-5 px-4">
                            <form action="">
                                <div class="flex gap-4">
                                    <div class="w-[25%]">
                                        <select name="" id="" class="w-full h-[45px]  rounded-[3px] px-3 border border-[gray] text-[gray]">
                                            <option value="All">Select...</option><option value="Desgin">Desgin</option>
                                            <option value="3D + Animation">3D + Animation</option>
                                        </select>
                                    </div>
                                    <div class="w-[35%] flex items-center relative">
                                        <input type="text" class="w-full h-[45px] rounded-[3px] px-3 border border-[gray] focus:outline-none " placeholder="Search Our Course" value=""/>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" class="w-auto h-6 svg-inline--fa fa-magnifying-glass absolute text-[gray] text-[20px] top-[13px] right-[10px] z-[99]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </form>
                            <div class="grid grid-cols-3 gap-8 mt-[40px]">
                                <CoursesCard/>
                            </div>
                            <div class=" py-5 px-3">
                                <div class="faq border-[2px] rounded-[10px] py-6 ">
                                    <div class="flex  justify-between items-center px-6">
                                        <h4 class="text-[20px] font-bold">Category Filter</h4>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="w-auto h-8 svg-inline--fa fa-angle-down " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                                        </svg>
                                    </div>
                                    <ul class="mx-[25px]   duration-[1s] mt-4 visible opacity-[1] max-h-[500px] ">
                                        <li class="mb-2 text-[20px]">Desgin</li>
                                        <li class="mb-2 text-[20px]">Desgin</li>
                                        <li class="mb-2 text-[20px]">Desgin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    )
}