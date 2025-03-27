import Link from "next/link";
import React from "react";

export default function Viaschool() {
    return (
        <>
            <section class="w-full pt-[20px] px-[20px] bg-[#F4F5F7] border-y-2 border-gray-200 lg:px-0 lg:pt-[100px] ">
                <div class="max-w-[1300px] m-auto pt-15 text-center  font-Nunito">
                    <h1 class="lg:text-[30px] text-[25px] font-[600] text-[#203367] pb-2">Via School Categories Courses</h1>
                    <p class="text-[18px]">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    <div class="grid lg:grid-cols-4 grid-cols-1 py-[30px] lg:py-[60px] gap-8">
                    <Link href= "/Courses/ViewallCourses/xyz"> <div class="w-full hover:border-blue-600 duration-[1s] border rounded-[5px] py-[40px] font-[&quot;Nunito]">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" class="w-auto h-10 svg-inline--fa fa-pen-to-square text-[40px] text-[#2441E7] mb-6 pl-33" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path>
                            </svg>
                            <h1 class="mb-2 font-bold text-[17px] text-[#2441E7]">Design</h1>
                            <p class="text-[15px] font-[400]">Over 800 Courses</p>
                        </div> </Link>
                    </div>
                    <div class="flex justify-center items-center mb-[60px]">
                    <Link href="/Courses/ViewallCourses"><button class="border border-blue-700 border-[2px] text-[#2441E7] py-3 px-[60px] rounded-[40px]">View All Courses</button></Link>
                    </div>
                </div>
            </section >
        </>
    )
}