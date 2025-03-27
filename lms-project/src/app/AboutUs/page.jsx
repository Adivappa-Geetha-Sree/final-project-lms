import React from "react";
import Banner from "../Common/Banner";
import Teachercard from "../Common/Teachercard";

export default function AboutUs() {
    return (
        <>
            <Banner />
            <div class="max-w-[1300px] m-auto my-4">
                <div class="grid grid-cols-2 py-[5%] gap-[50px]">
                    <div class="font-[&quot;Nunito&quot;]">
                        <h1 class="text-[28px] font-[600] pb-7">Enhance your skills with best Online courses</h1>
                        <p class="text-[15.5px] leading-[30px] text-gray-500 pb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p class="text-[15.5px] leading-[30px] text-gray-500 pb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p class="text-[15.5px] leading-[30px] text-gray-500 pb-5 ">Nemo enim ipsam,voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia,consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci velit, sed quia non numquam eius modi tempor</p>
                    </div>
                    <div>
                        <img src="/static/media/8 (2).de0e26358d6021b4a986.jpg" alt="" />
                    </div>
                </div>
                <div class="my-[30px]">
                    <h1 class="text-[25px] font-[&quot;Nunito&quot;] font-bold text-center">Our Story</h1>
                    <div class="max-w-[1000px] m-auto mb-8  py-5">
                        <div class="flex justify-between mt-10">
                            <div class="w-[15%]">
                                <h5>Students learning</h5>
                                <h2 class="font-[500] pt-3 text-[25px]">6500</h2>
                            </div>
                            <div class="w-[15%]">
                                <h5>Graduates</h5>
                                <h2 class="font-[500] pt-3 text-[25px]">5854</h2>
                            </div>
                            <div class="w-[15%]">
                                <h5>Free Courses</h5>
                                <h2 class="font-[500] pt-3 text-[25px]">1000</h2>
                            </div>
                            <div class="w-[15%]">
                                <h5>Active Course</h5>
                                <h2 class="font-[500] pt-3 text-[25px]">2000</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-[30px] flex justify-center ">
                    <div class="grid  py-10 grid-cols-2 font-[&quot;Nunito&quot;] gap-[30px]">
                        <div class="shadow-[0px_0px_10px_1px_rgba(0,0,0,0.2)] px-5 py-3">
                            <h1 class="font-[500] pb-6 text-[24px]">Who We Are</h1>
                            <p class="pb-6 text-[15.5px] leading-[30px] text-gray-500 pb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <p class="text-[15.5px] leading-[30px] text-gray-500 pb-5">Nemo enim ipsam,voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia,consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci velit, sed quia non numquam eius modi tempora</p>
                        </div>
                        <div class="shadow-[0px_0px_10px_1px_rgba(0,0,0,0.2)] px-5 py-3">
                            <h1 class="font-[500] pb-6 text-[24px]">What We Do</h1>
                            <p class="pb-6 text-[15.5px] leading-[30px] text-gray-500 pb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <p class="text-[15.5px] leading-[30px] text-gray-500 pb-5">Nemo enim ipsam,voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia,consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci velit, sed quia non numquam eius modi tempora</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-[#F9FAFC] w-[100%] py-[60px] ">
                <div class="max-w-[1300px] m-auto font-[Nunito] text-center font-[500]">
                    <h1 class=" text-[30px] pb-12 ">Popular Instructor</h1>
                    <Teachercard/>
                </div>
            </div>
        
        </>
    )
}