import React from "react";
export default function GEtitNow(){
    return(
        <>
            <section class=" w-full   bg-no-repeat lg:h-[550px]  relative">
                <div class="bg-[#192675] lg:py-[100px] py-[50px] px-[20px] lg:h-full w-full  lg:absolute top-0 left-0">
                    <img src="/static/media/2 (2).516101272fc8db02a522.png" alt="" class="absolute top-[10px] opacity-[0.2] lg:block hidden"/>
                    <div class="lg:max-w-[1300px] w-full m-auto font-[&quot;Nunito&quot;]">
                        <div class="grid lg:grid-cols-2 gap-10 relative z-[99]">
                            <div class="text-white">
                                <p class=" text-center lg:text-left pb-3 lg:pb-0 ">Get 100 Online Courses for Free</p>
                                <h3 class="font-bold lg:text-[43px] text-[28px] text-center lg:text-left tracking-[3px]">REGISTER TO GET IT</h3>
                                <div class="grid lg:grid-cols-4 grid-cols-2 text-center gap-8 mt-[50px] lg:mt-[100px] lg:mb-[50px] ">
                                    <div class="border border-2 py-2 lg:py-0 rounded-lg">
                                        <h3 class="lg:text-[36px] text-[25px]">52</h3>
                                        <h2 class="lg:text-[25px] text-[25px]">Days</h2>
                                    </div>
                                    <div class="border border-2 py-2 lg:py-0 rounded-lg">
                                        <h3 class="lg:text-[36px] text-[25px]">04</h3>
                                        <h2 class="lg:text-[25px] text-[25px]">Hours</h2>
                                    </div>
                                    <div class="border border-2 py-2 lg:py-0 rounded-lg">
                                        <h3 class="lg:text-[36px] text-[25px]">52</h3>
                                        <h2 class="lg:text-[25px] text-[25px]">Minutes</h2>
                                    </div>
                                    <div class="border border-2 py-2 lg:py-0 rounded-lg">
                                        <h3 class="lg:text-[36px] text-[25px]">52</h3>
                                        <h2 class="lg:text-[25px] text-[25px]">Seconds</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="text-white text-center lg:text-left">
                                <p class="pb-3 lg:pb-0 ">SIGNUP TO NEWSLETTER TO GET IT</p>
                                <h3 class=" lg:text-[25px] text-[30px] tracking-[1px]">THE COMPLETE WEB DEVELOPER COURSE</h3>
                                <form action="" class="lg:w-[85%] mt-[40px] lg:mt-[70px]">
                                    <input type="text" class="border-b-2 mb-[40px] bg-inherit w-full focus:outline-0 text-white placeholder:text-white pb-3 " placeholder="Your Name"/>
                                    <input type="text" class="border-b-2 bg-inherit w-full focus:outline-0 text-white placeholder:text-white pb-3 " placeholder="Email address"/>
                                    <input type="submit" class="border-[3px] duration-500 hover:bg-white hover:text-[#192675] px-[45px]  mt-[50px] py-[10px] text-[17px] rounded-[50px]" value="Get it Now"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}