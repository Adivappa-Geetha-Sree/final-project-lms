"use client"
import React, { useState } from "react";
import { navList } from "./Navlist";
import Link from "next/link";

export default function Sidebar() {
    let [sidebar, setSidebar] = useState(null)

    let toggleMenu = (index) => {
        setSidebar(sidebar == index ? null : index)
    }
    return (
        <>
            <div class="duration-[0.2s] w-[16%]   h-full px-3 py-4 overflow-y-auto bg-white">
                <ul class=" py-4 px-5  text-gray-900  ">

                    {navList.map((items, index) => {
                        const { navName, icon, id, subMenu } = items;
                        return (
                            // <div class="w-full  mb-2" key={index} onClick={() => toggleMenu(id)}>
                            //     <div class=" flex items-center justify-between hover:bg-[#4B49AC] hover:text-white   duration-[0.3s] py-3 px-4  text-gray-600 rounded-[10px]">
                            //         <h4 class=" flex items-center justify-between">
                            //             {icon}
                            //             &nbsp;&nbsp;{navName}
                            //         </h4>
                            //         {sidebar === id ?
                            //             (<svg
                            //                 fill="currentColor"
                            //                 className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            //                 xmlns="http://www.w3.org/2000/svg"
                            //                 viewBox="0 0 448 512"
                            //             >
                            //                 <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                            //             </svg>)
                            //             :
                            //             (<svg
                            //                 fill="currentColor"
                            //                 className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            //                 xmlns="http://www.w3.org/2000/svg"
                            //                 viewBox="0 0 448 512"
                            //             >
                            //                 <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                            //             </svg>)
                            //         }
                            //     </div>
                            //     <ul class={`${sidebar === id ? "block" : "hidden"}`}>
                            //         {subMenu.map((subItems, index) => {
                            //             //     <Link href={subItems.link} key={index} >
                            //             //     <li class="flex items-center mb-2">
                            //             //         <svg aria-hidden={`${sidebar==id ? "true" : "false"}`} focusable="false" data-prefix="fas" data-icon="circle" class="w-auto h-5 svg-inline--fa fa-circle text-[8px] pr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            //             //             <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                            //             //         </svg>
                            //             //        {subItems.navName}
                            //             //     </li>
                            //             // </Link>
                            //             <Link to={subItems.link} key={index}>
                            //                 <li>
                            //                     <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            //                         <svg
                            //                             fill="currentColor"
                            //                             className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            //                             xmlns="http://www.w3.org/2000/svg"
                            //                             viewBox="0 0 512 512"
                            //                         >
                            //                             <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                            //                         </svg>
                            //                         <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">
                            //                             {subItems.navName}
                            //                         </span>
                            //                     </button>
                            //                 </li>
                            //             </Link>
                            //         })}
                            //         {/* <a hef="/viewcourse">
                            //             <li class="flex items-center ">
                            //                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="w-auto h-5 svg-inline--fa fa-circle text-[8px] pr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            //                     <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                            //                 </svg>
                            //                 View Courses
                            //             </li>
                            //         </a> */}
                            //     </ul>
                            // </div>

                            //     <li key={index}>
                            //     <div
                            //       onClick={() => toggleMenu(id)}
                            //       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            //     >
                            //       {icon}
                            //       <span className="flex-1 ms-3 whitespace-nowrap">{navName}</span>
                            //       <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 font-medium ">
                            //         {sidebar === id ? (
                            //           <svg
                            //             fill="currentColor"
                            //             className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            //             xmlns="http://www.w3.org/2000/svg"
                            //             viewBox="0 0 448 512"
                            //           >
                            //             <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                            //           </svg>
                            //         ) : (
                            //           <svg
                            //             fill="currentColor"
                            //             className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            //             xmlns="http://www.w3.org/2000/svg"
                            //             viewBox="0 0 448 512"
                            //           >
                            //             <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                            //           </svg>
                            //         )}
                            //       </span>
                            //     </div>
                            //     <ul className={sidebar === id ? "block" : "hidden"}>
                            //       {subMenu.map((subItems, index) => {
                            //         return (
                            //           <Link to={subItems.link} key={index}>
                            //             <li>
                            //               <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            //                 <svg
                            //                   fill="currentColor"
                            //                   className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            //                   xmlns="http://www.w3.org/2000/svg"
                            //                   viewBox="0 0 512 512"
                            //                 >
                            //                   <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                            //                 </svg>
                            //                 <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">
                            //                   {subItems.navName}
                            //                 </span>
                            //               </button>
                            //             </li>
                            //           </Link>
                            //         );
                            //       })}
                            //     </ul>
                            //   </li>
                            <li key={index} class="bg-gray-50 dark:bg-gray-800 rounded-lg  p-3 m-3"  >
                                <div
                                    onClick={() => toggleMenu(id)}
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    {icon}
                                    <span className="flex-1 ms-3 whitespace-nowrap">{navName}</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 font-medium ">
                                        {sidebar === id ? (
                                            <svg
                                                fill="currentColor"
                                                className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                                            </svg>
                                        ) : (
                                            <svg
                                                fill="currentColor"
                                                className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                            </svg>
                                        )}
                                    </span>
                                </div>
                                <ul className={sidebar === id ? "block" : "hidden"}>
                                    {subMenu.map((subItems, index) => {
                                        return (
                                            <Link href={subItems.link} key={index}>
                                                <li>
                                                    <button className="flex items-center p-2 w-full  rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <svg
                                                            fill="currentColor"
                                                            className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                                                        </svg>
                                                        <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">
                                                            {subItems.navName}
                                                        </span>
                                                    </button>
                                                </li>
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </li>


                        )
                    })}
                    {/* <div class="w-full  mb-2">
                        <div class=" flex items-center justify-between hover:bg-[#4B49AC] hover:text-white   duration-[0.3s] py-3 px-4  text-gray-600 rounded-[10px]">
                            <h4 class=" flex items-center justify-between">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" class="w-auto h-5 svg-inline--fa fa-book " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
                                </svg>
                                &nbsp;&nbsp;Courses
                            </h4>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="w-auto h-5 svg-inline--fa fa-angle-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                        </div>
                        <ul class="text-white text-[14px] ease-in-out px-[50px] duration-[0.8s] opacity-0 h-0 invisible">
                            <a href="/addcourse">
                                <li class="flex items-center mb-2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="w-auto h-5 svg-inline--fa fa-circle text-[8px] pr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                                    </svg>
                                    Add Courses
                                </li>
                            </a>
                            <a href="/viewcourse">
                                <li class="flex items-center ">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="w-auto h-5 svg-inline--fa fa-circle text-[8px] pr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                                    </svg>
                                    View Courses
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div class="w-full  mb-2">
                        <div class=" flex items-center justify-between hover:bg-[#4B49AC] hover:text-white   duration-[0.3s] py-3 px-4  text-gray-600 rounded-[10px]">
                            <h4 class=" flex items-center justify-between">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" class="w-auto h-5 svg-inline--fa fa-video " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"></path>
                                </svg>
                                &nbsp;&nbsp;Videos
                            </h4>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="w-auto h-5 svg-inline--fa fa-angle-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                        </div>
                        <ul class="text-white text-[14px] ease-in-out px-[50px] duration-[0.8s] opacity-0 h-0 invisible">
                            <a href="/addvideo">
                                <li class="flex items-center mb-2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="w-auto h-5 svg-inline--fa fa-circle text-[8px] pr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                                    </svg>Add Videos
                                </li>
                            </a>
                            <a href="/viewvideo">
                                <li class="flex items-center ">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="w-auto h-5 svg-inline--fa fa-circle text-[8px] pr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                                    </svg>
                                    View Videos
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div class="w-full  mb-2">
                        <div class=" flex items-center justify-between hover:bg-[#4B49AC] hover:text-white   duration-[0.3s] py-3 px-4  text-gray-600 rounded-[10px]">
                            <h4 class=" flex items-center justify-between">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders" class="w-auto h-5 svg-inline--fa fa-sliders " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"></path>
                                </svg>
                                &nbsp;&nbsp;Slides
                            </h4>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="w-auto h-5 svg-inline--fa fa-angle-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                        </div>
                        <ul class="text-white text-[14px] ease-in-out px-[50px] duration-[0.8s] opacity-0 h-0 invisible">
                            <a href="/addslider">
                                <li class="flex items-center mb-2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="w-auto h-5 svg-inline--fa fa-circle text-[8px] pr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                                    </svg>
                                    Add Slides</li>
                            </a>
                            <a href="/viewslider">
                                <li class="flex items-center ">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="w-auto h-5 svg-inline--fa fa-circle text-[8px] pr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                                    </svg>
                                    View Slides
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div class="w-full  mb-2">
                        <div class=" flex items-center justify-between hover:bg-[#4B49AC] hover:text-white   duration-[0.3s] py-3 px-4  text-gray-600 rounded-[10px]">
                            <h4 class=" flex items-center justify-between">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="people-group" class="w-auto h-5 svg-inline--fa fa-people-group " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path fill="currentColor" d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"></path>
                                </svg>
                                &nbsp;&nbsp;Team
                            </h4>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="w-auto h-5 svg-inline--fa fa-angle-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                        </div>
                        <ul class="text-white text-[14px] ease-in-out px-[50px] duration-[0.8s] opacity-0 h-0 invisible">
                            <a href="/addteam">
                                <li class="flex items-center mb-2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="w-auto h-5 svg-inline--fa fa-circle text-[8px] pr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                                    </svg>
                                    Add Team
                                </li>
                            </a>
                            <a href="/viewteam">
                                <li class="flex items-center ">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="w-auto h-5 svg-inline--fa fa-circle text-[8px] pr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                                    </svg>
                                    View Team
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div class="w-full  mb-2">
                        <div class=" flex items-center justify-between hover:bg-[#4B49AC] hover:text-white   duration-[0.3s] py-3 px-4  text-gray-600 rounded-[10px]">
                            <h4 class=" flex items-center justify-between">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" class="w-auto h-5 svg-inline--fa fa-users " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path>
                                </svg>
                                &nbsp;&nbsp;User
                            </h4>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="w-auto h-5 svg-inline--fa fa-angle-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                            </svg>
                        </div>
                        <ul class="text-white text-[14px] ease-in-out px-[50px] duration-[0.8s] opacity-0 h-0 invisible">
                            <a href="/viewuser">
                                <li class="flex items-center mb-2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="w-auto h-5 svg-inline--fa fa-circle text-[8px] pr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                                    </svg>
                                    View User
                                </li>
                            </a>
                            <a href="/viewcourse">
                                <li class="flex items-center ">
                                </li>
                            </a>
                        </ul>
                    </div> */}
                </ul>
            </div>
        </>
    )
}