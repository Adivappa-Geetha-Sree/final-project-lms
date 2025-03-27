import React from "react";

export default function Whatwedo() {
    return (
        <>
            <section class="w-full lg:pt-[100px] pt-[50px] px-[20px] bg-[#F4F5F7] lg:px-0 border-y-2 border-gray-200">
                <div class="max-w-[1300px] m-auto text-center font-Nunito">
                    <h1 class="text-[30px] font-[600] text-[#203367] pb-2">What We Do</h1>
                    <p class="text-[18px]">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    <div class="grid lg:grid-cols-4 py-[30px] gap-8 mt-8 mb-[50px]">
                        <div class="rounded-[5px] py-[60px] text-white px-[40px] text-left" style={{ backgroundColor: "rgb(240, 208, 120)" }}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square-plus" class=" w-auto h-10 svg-inline--fa fa-square-plus text-[40px] pb-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
                            </svg>
                            <h2 class="pb-4">Create Account</h2>
                            <p>Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}