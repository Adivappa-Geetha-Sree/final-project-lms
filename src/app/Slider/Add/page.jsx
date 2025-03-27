"use client";
import Footer from "@/app/cmmon/Footer";
import Sidebar from "@/app/cmmon/Sidebar";
import axios, { Axios } from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function Addslider() {


    let [preImagePath, setpreImagePath] = useState(`https://upload.wikimedia.org/wikipedia/commons/d/dc/No_Preview_image_2.png`)

    let [courseInputs, setcourseInputs] = useState({
        slide_Heading: " ",
        slide_SubH: " ",
        slide_Discriptions: '',
        slide_Files: [],
        _id: '',
        status: "",
    });

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASE;
    // let { id } = useParams();
    let Router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

        const [selectedFiles, setSelectedFiles] = useState([]);

        const handleFileUpload = (event) => {
            const files = Array.from(event.target.files); // Convert FileList to an array
            setSelectedFiles(files);
            // console.log("Selected files:", files.map(file => file.name));
        };
    

    let setvalue = () => {
        axios.get(`${apiBaseUrl}admin/slide/editRow/${id}`)
            .then((res) => res.data)
            .then((finalres) => {
                let editdata = (finalres.data)
                let staticPath = finalres.staticPath
                setpreImagePath(`${apiBaseUrl}${staticPath}${editdata.course_img}`)

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
        if (inputName == "slide_Files") {
            oldData[inputName] = [selectedFiles]
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
        // console.log(formvalue)
        for (let [key, value] of formvalue.entries()) {
            console.log(key, value);
        }

        if (id == undefined) {
            axios.post(`${apiBaseUrl}admin/slide/add`, formvalue)
                .then((res) => {
                    console.log(res.data)
                    if (res.data.status) {
                        toast.success(res.data.msg)
                        setTimeout(() => {
                            Router.push('/Slider/View')
                        }, 200)
                    }

                    else {
                        toast.error("Slide Heading Name Already exist...")
                    }
                })
        }
        else {
            axios.put(`${apiBaseUrl}admin/slide/update/${id}`, formvalue)
                .then((res) => {
                    console.log(res.data)
                    if (res.data.status) {
                        toast.success(res.data.msg)
                        setTimeout(() => {
                            Router.push('/Slider/View')
                        }, 2000)
                    }
                    else {
                        toast.error("Slider Heading Name Already exist...")
                    }
                })

        }
    }

    return (
        <>
            <div class="flex  bg-[#F5F7FF]">
                <Sidebar />
                <div class=" w-[84%] relative px-[30px] pt-[20px] pb-[60px]  bg-[#F5F7FF]">
                    <h1 class="text-[25px] font-[500] mb-[10px]">Slider Add</h1>
                    <div class="">
                        <div class="bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]">
                            <form action="" onSubmit={SaveCourse}>Slider Heading
                                <input type="text" required onChange={getvalue} value={courseInputs.slide_Heading} name="slide_Heading" class="border px-4 border-gray-400 w-full h-[50px] mb-3 mt-2 " />
                                Slider Sub-Heading
                                <input type="text" required onChange={getvalue} value={courseInputs.slide_SubH} name="slide_SubH" class="border px-4 border-gray-400 w-full h-[50px] mb-3 mt-2 " />
                                Slider Description
                                <textarea required onChange={getvalue} value={courseInputs.slide_Discriptions} name="slide_Discriptions" id="" class="border px-4 pt-3 border-gray-400 my-2 w-full h-[100px]" cols="30" rows="10"></textarea>
                                Slider Image
                                <div class="flex items-center gap-0 mt-[80px]">
                                    <div class="w-full flex items-center">
                                        <input
                                            type="file"
                                            id="file-input"
                                            multiple
                                            onChange={handleFileUpload}
                                            name="slide_Files"  class=" px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]"
                                        />
                                        {/* <input type="file" readonly="" multiple placeholder="Upload Files"
                                            value={selectedFiles.length > 0
                                                ? selectedFiles.map(file => file.name).join(", ")
                                                : "Upload Files"}
                                            name="slide_Files" required class=" px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]" /> */}

                                        <label id="file-input-label" for="file-input" class="border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px]  ">Upload</label>
                                    </div>
                                    <div class="w-full flex items-center ">
                                        {selectedFiles.length > 0 && (
                                            <div className="flex gap-4 mt-4">
                                                {selectedFiles.map((file, index) => (
                                                    <img
                                                        key={index}
                                                        src={URL.createObjectURL(file)}
                                                        alt={`preview-${index}`}
                                                        width="100"
                                                        className="rounded-md border p-1"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                Slider Stauts
                                <div class="flex items-center mt-5  mb-8 gap-2">
                                    <input type="radio" value="1" onChange={getvalue} name="status" class="mx-2 w-[20px] h-[20px] text-[20px]" />
                                    Active
                                    <input type="radio" value='0' onChange={getvalue} name="status" class="mx-2 w-[20px] h-[20px] text-[20px]" />
                                    Deactive
                                </div>
                                <input type="submit" value={id == undefined ? "Submit" : "Update"} class="bg-[#4B49AC] mb-8 mt-7 text-[18px] px-8 py-2 rounded-[10px] text-white" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}








