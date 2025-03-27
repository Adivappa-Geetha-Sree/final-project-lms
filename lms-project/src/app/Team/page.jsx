import React from "react";
import Banner from "../Common/Banner";
import Teachercard from "../Common/Teachercard";

export default function Team() {
    return (
        <>
            <Banner />
            <div class="w-full bg-[#f9fafc] py-14">
                <div class="lg:max-w-[1300px] m-auto ">
                    <div class="text-center">
                        <h1 class=" text-[30px] pb-12 ">Popular Instructor</h1>
                        <Teachercard />
                    </div>
                </div>
            </div>
        </>
    )
}