import Link from "next/link";
import React from "react";

export default function Banner() {
    return (
        <>
            <div class="w-full text-center bg-blue-600 pt-[180px] pb-[100px] relative bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url(&quot;/static/media/inner-pagebg.659a5beca110fed89118.jpg&quot)" }}>
                <div class="absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full"></div>
                <div class="relative">
                    <h1 class="text-[30px] text-white">Courses</h1>
                    <div class="flex justify-center text-white my-5">
                        <Link class="pr-3" href="/">Home</Link>
                        <Link class="pl-3" href="/courses">Courses</Link>
                    </div>
                </div>
            </div>
        </>
    )
}