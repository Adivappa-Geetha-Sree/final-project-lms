
'use client'
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CoursesCard() {

    let apiBUrl = process.env.NEXT_PUBLIC_APIBURL
    const [coursedata, setcousedata] = useState([]);
    const [staticpath, setstacticpath] = useState("")
    const [udatedate, setdate] = useState("")
    let data = async () => {
        axios.get(`${apiBUrl}web/home/Home_course`)
            .then((res) => res.data)
            .then((finalres) => {
                setcousedata(finalres.data);
                setstacticpath(finalres.staticPath);

            })
    }
    useEffect(() => {
        data()
    }, [])
    
    
    
    // console.log(coursedata, staticpath, udatedate)


    return (
        <>
            {
                coursedata.length >= 1 ?
                    coursedata.map((value, index) => {
                    
                        return (
                            <Link href={`/Courses/${value._id}`} key={index}>
                                <div class=" duration-500 border hover:shadow-[0px_0px_15px_1px_gray] border-gray-300  w-full mb-5 group rounded-[10px_10px_0px_0px] overflow-hidden">
                                    <div class="cardimg   h-[200px] bg-cover bg-no-repeat relative" style={{ backgroundImage: `${apiBUrl}${staticpath}${value.course_img}` }}>
                                        <img src={`${apiBUrl}${staticpath}${value.course_img}`} className=" group-hover:scale-[1] top-3 left-3 text-white px-3 py-2 text-[15px] rounded-md" />
                                        {/* <div class=" w-full h-full absolute top-0 left-0"  style={{ backgroundImage: `${apiBUrl}${staticpath}${value.course_img}`} }>
                                            <button class="bg-yellow-600 absolute duration-[0.3s] scale-0 group-hover:scale-[1] top-3 left-3 text-white px-3 py-2 text-[15px] rounded-md">Top Seller</button>
                                            <img src={`${apiBUrl}${staticpath}${value.course_img}`} className="duration-[0.3s] scale-0 group-hover:scale-[1] top-3 left-3 text-white px-3 py-2 text-[15px] rounded-md"/>
                                            <span class="absolute scale-0 origin-center duration-[0.3s] group-hover:scale-[1s] group-hover:bottom-[80px] text-white bottom-[30px] left-[105px]">Preview Course</span>
                                        </div> */}
                                    </div>
                                    <div class="carddetails font-[&quot;Nunito&quot;] bg-white text-left pt-6 pb-4 px-5" >
                                        <h5 class="pb-3">Updated {value.updatedAt}</h5>
                                        <h2 class="pb-3 text-[20px] font-bold">{value.course_Name}</h2>
                                        Price: Rs.{value.course_Prize}/-
                                    </div>
                                    <div class="flex rounded-[0px_0px_10px_10px] justify-between items-center border-t-[1px] w-full bg-white px-5 py-3">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="w-auto h-5 svg-inline--fa fa-user text-[18px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                                        </svg>
                                        <button class="text-red-600 text-[18px]">Enrole</button>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                    :
                    <p>
                        NO DATA AVAILABLE
                    </p>

            }



        </>
    )
}