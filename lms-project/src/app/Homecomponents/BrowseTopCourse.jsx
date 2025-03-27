'use client'
import React, { useEffect, useState } from "react";
import CoursesCard from "../Common/CoursesCard";
import Link from "next/link";
import axios from "axios";

export default function BrowseTopCourse() {

    let apiBUrl = process.env.NEXT_PUBLIC_APIBURL
    const [coursedata, setcousedata] = useState([]);
    let data = async () => {
        axios.get(`${apiBUrl}web/home/Home_course`)
            .then((res) => res.data)
            .then((finalres) => {
                setcousedata(finalres.data)
            })
    }
    useEffect(() => {
        data()
    }, [])
    return (
        <>
            <section class="w-full lg:pt-[100px] pt-[50px] px-[20px] lg:px-0 bg-[#F4F5F7] border-y-2 border-gray-200">
                <div class="max-w-[1300px] m-auto text-center font-Nunito">
                    <h1 class="lg:text-[30px] text-[25px] font-[600] text-[#203367] pb-2 text-center">Browse Our Top Courses</h1>
                    <p class="lg:text-[18px] text-[15px] text-center lg:w-[55%] m-auto">
                        "Cum doctus civibus efficiantur in imperdiet deterruisCum doctus civibus efficiantur in imperdiet deterruisset."
                    </p>
                    <div class="tabs ">
                        <div class="flex gap-5 py-10 justify-center ">
                            <div class=" active ">All</div>
                            <div class="  ">Desgin</div>
                            <div class="  ">3D + Animation</div>
                        </div>
                    </div>
                    <div class=" grid lg:grid-cols-4 gap-5 ">
                        <CoursesCard />
                    </div>
                    <div class="p-2 flex justify-center mt-10 items-center mb-[60px]">
                        <Link href="/Courses/ViewallCourses"><button class="border border-blue-700 border-[2px] text-[#2441E7] py-3 px-[60px] rounded-[40px]">View All Courses</button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}