import React from "react";
import Teachercard from "../Common/Teachercard";

export default function Teacher() {
    return (
        <>
            <section class="w-full pt-[20px] px-[20px] bg-[#F4F5F7] border-y-2 border-gray-200 lg:px-0 lg:pt-[100px] ">
                <div class="max-w-[1300px] m-auto pt-15 text-center  font-Nunito">
                    <h1 class="lg:text-[30px] text-[25px] font-[600] text-[#203367] pb-2 text-center">Teachers</h1>
                    <p class="lg:text-[18px] text-[15px] text-center lg:w-[55%] m-auto">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    <div class="w-full py-[50px]  ">
                        <Teachercard/>
                    </div>
                </div>
            </section>
        </>
    )
}