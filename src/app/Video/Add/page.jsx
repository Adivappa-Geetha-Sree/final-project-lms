"use client"
import Sidebar from "@/app/cmmon/Sidebar";
import Footer from "@/app/cmmon/Footer";
import axios, { Axios } from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from "@/app/cmmon/Header";

export default function Addvideo() {
    let [preImagePath, setpreImagePath] = useState(`https://upload.wikimedia.org/wikipedia/commons/d/dc/No_Preview_image_2.png`)
    let [courseInputs, setcourseInputs] = useState(
        {
            course_Name: "",
            Video_Topic_Name: "",
            Video_Duration: "",
            Video_File: "",
            status: "",
            _id: " ",
        }
    );
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASE;
    // let { id } = useParams();
    let Router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    let setvalue = () => {
        axios.get(`${apiBaseUrl}admin/video/editRow/${id}`)
            .then((res) => res.data)
            .then((finalres) => {
                let editdata = (finalres.data)
                let staticPath = finalres.staticPath
                setpreImagePath(`${apiBaseUrl}${staticPath}${editdata.Video_File}`)

                setcourseInputs(editdata)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        if (id) {
            setvalue();

        }
    }, [id])

    let getvalue = (event) => {
        let inputName = event.target.name;
        let inputvalue = event.target.value;
        let oldData = { ...courseInputs }

        oldData[inputName] = inputvalue;
        if (inputName == "status") {
            oldData[inputName] = Number(inputvalue)
        }
        setcourseInputs(oldData)
        // console.log(courseInputs)
    }

    let imagePreview = (event) => {

        try {
            let currentUrl = URL.createObjectURL(event.target.files[0])
            setpreImagePath(currentUrl)
        }
        catch {
            setpreImagePath('')
        }


    }

    let SaveCourse = (event) => {
        event.preventDefault();

        let formvalue = new FormData(event.target)
        console.log(formvalue)
        for (let [key, value] of formvalue.entries()) {
            // console.log(key, value);
        }

        if (id == undefined) {
            axios.post(`${apiBaseUrl}admin/video/add`, formvalue)
                .then((res) => {
                    if (res.data.status) {
                        toast.success(res.data.msg)
                        setTimeout(() => {
                            Router.push('/Video/View')
                        }, 200)
                    }

                    else {
                        toast.error("course Name Already exist...")
                    }
                })
        }
        else {
            // for (let [key, value] of formvalue.entries()) {
            //     console.log(key, value);
            // }
            axios.put(`${apiBaseUrl}admin/video/update/${id}`, formvalue)
                .then((res) => {
                    console.log(res.data)
                    if (res.data.status) {
                        toast.success(res.data.msg)
                        setTimeout(() => {
                            Router.push('/Video/View')
                        }, 2000)
                    }
                    else {
                        toast.error("Vedio topic Name Already exist...")
                    }
                })

        }
    }


    return (
        <>
            <Header />
            <div class="flex  bg-[#F5F7FF]">
                <Sidebar />
                <div class=" w-[84%] relative px-[30px] pt-[20px] pb-[60px]  bg-[#F5F7FF]">
                    <h1 class="text-[25px] font-[500] mb-[10px]">Video Add</h1>
                    <div class="">
                        <div class="bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]">
                            <form action="" onSubmit={SaveCourse}>Course Name
                                <input type="text" required onChange={getvalue} value={courseInputs.course_Name} name="course_Name" class="border px-4 border-gray-400 w-full h-[50px] mb-3 mt-2 " />
                                Video Topic Name
                                <input type="text" required onChange={getvalue} value={courseInputs.Video_Topic_Name} name="Video_Topic_Name" class="border px-4 border-gray-400 w-full h-[50px] mb-3 mt-2 " />
                                Video Duration
                                <input type="text" required onChange={getvalue} value={courseInputs.Video_Duration} name="Video_Duration" class="border px-4 border-gray-400 w-full h-[50px] mb-3 mt-2 " />
                                <input type="file" id="file-input" class="border hidden border-gray-400 w-full h-[50px] mb-3 mt-2 " />
                                <div class="flex items-center gap-0 mt-[80px]">
                                    <div class="w-full flex items-center">
                                        <input type="file" readonly="" required onChange={imagePreview} name="Video_File" placeholder="Upload File" class=" px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]" />
                                        <label id="file-input-label" for="file-input" class="border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px]  ">Upload</label>
                                    </div>
                                    <div class="">
                                        <video src={preImagePath} alt="img" width="150" />
                                    </div>
                                </div>
                                Video Stauts
                                <div class="flex items-center mt-5  mb-8 gap-2">
                                    <input type="radio" onChange={getvalue} value={1} name="status" class="mx-2 w-[20px] h-[20px] text-[20px]" />
                                    Active
                                    <input type="radio" onChange={getvalue} value={0} name="status" class="mx-2 w-[20px] h-[20px] text-[20px]" />
                                    Deactive
                                </div>
                                <input type="submit" value={id == undefined ? "Submit" : "Update"} class="bg-[#4B49AC] mb-8 mt-7 text-[18px] px-8 py-2 rounded-[10px] text-white" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}








