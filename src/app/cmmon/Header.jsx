import Link from "next/link";
import React from "react";

export default function Header(){
    return(
        <>
            <header>
                <nav class="bg-white border-gray-200  py-2.5 bg-white shadow-lg relative z-[999]">
                    <div class="flex  justify-between items-center mx-auto ">
                        <div class=" duration-[0.5s] mx-5  w-[16%]">
                            <Link href="/Dashbord" class="flex items-center">
                                <img src="img.jpg" alt="img" class="mr-3 h-6 sm:h-9"/>
                            </Link>
                        </div>
                        <div class="flex items-center lg:order-2 w-[84%] duration-[0.5s] w-[84%]  justify-between">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="w-auto h-5 svg-inline--fa fa-bars " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                            </svg>
                            <div>
                                <Link href="/" class="text-gray-800   focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log Out</Link>
                                <Link href="/User/View" class=" bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">My Profile</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}