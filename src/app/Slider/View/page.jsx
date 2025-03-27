"use client"
import Sidebar from "@/app/cmmon/Sidebar";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function VeiwCourse() {

    let Router = useRouter()

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASE;

    let [allIDS, setAllIds] = useState([])
    let [course, setcourse] = useState([])
    let [staticPath, setStaticPath] = useState('')

    let getCourses = () => {
        axios.get(`${apiBaseUrl}admin/slide/view`)
            .then((res) => res.data)
            .then((finalres) => {

                setcourse(finalres.data)
                // (finalres.data[0].course_img)
                setStaticPath(finalres.staticPath)
            })
            .catch((error) => console.log(error))
    }
    let singDel = (id) => {
        axios.delete(`${apiBaseUrl}admin/slide/delete/${id}`)
            .then((res) => {
                if (res.data.status) {
                    toast.success(res.data.msg);
                    getCourses();
                }
            })
    }
    let edit = (id) => {
        axios.get(`${apiBaseUrl}admin/slide/editRow/${id}`)
            .then((res) => {
                // console.log(res.data.data)
                Router.push(`/Slider/Add/?id=${id}`)
                getCourses()

            })
    }

    let getMyCheckValue = (event) => {
        const { checked, value } = event.target;
        if (checked) {
            if (!allIDS.includes(value)) {
                setAllIds([...allIDS, value])
            }
            console.log(allIDS)
        }
        else {
            let filtertID = allIDS.filter((id) => id !== value)
            setAllIds(filtertID)
        }
    }

    let multiDel = () => {
        let obj = {
            allIDS
        }
        axios.post(`${apiBaseUrl}admin/slide/muldelete/`, obj)
            .then((res) => {

                getCourses();
            })
    }
    useEffect(() => {
        getCourses();
    }, [])

 console.log(course)
    return (
        <>
            <div class="flex  bg-[#F5F7FF]">
                <Sidebar />
                <div class=" w-[84%] relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]">
                    <h1 class="text-[25px] font-[500] mb-[10px]">Slider Table</h1>
                    <div class="">
                        <div class="bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]">
                            <table class="w-full border border-gray-300">

                                <thead class="border border-gray-40-1 ">
                                    <tr class="border border-gray-40-1 ">
                                        <th scope="col" className="px-6 py-3">
                                            <button onClick={multiDel} class="bg-red-400 text-white px-5 mt-1 py-1"> Delete </button>
                                        </th>
                                        <th className="border border-gray-400 px-4 py-2">S.no</th>
                                        <th className="border border-gray-400 px-4 py-2">Slider Heading</th>
                                        <th className="border border-gray-400 px-4 py-2">Slider sub-heading</th>
                                        <th className="border border-gray-400 px-4 py-2">Slider Description</th>
                                        <th className="border border-gray-400 px-4 py-2">Slider Image</th>
                                        <th className="border border-gray-400 px-4 py-2">Status</th>
                                        <th className="border border-gray-400 px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="border-1 ">
                                    {
                                        course.length >= 1 ?
                                            course.map((value, index) => {
                                                return (
                                                    <tr class="border-1 " key={index}>
                                                        <td scope="row" className="px-6 py-4 text-[18px] font-semibold text-gray-900 whitespace-nowrap border border-gray-400 px-4 py-2 ">

                                                            <input
                                                                onChange={(e) => getMyCheckValue(e)}
                                                                name='deleteCheck' id={`checkbox-${value._id}`} type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 " value={value._id} />


                                                        </td>
                                                        <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                                                        <td className="border border-gray-400 px-4 py-2">{value.slide_Heading}</td>
                                                        <td className="border border-gray-400 px-4 py-2">{value.slide_SubH}</td>
                                                        <td className="border border-gray-400 px-4 py-2">{value.slide_Discriptions}</td>
                                                        <td className="border border-gray-400 px-4 py-2">
                                                            {value.slide_Files && value.slide_Files.length > 0 ? (
                                                                value.slide_Files.map((file, index) => (
                                                                    <img
                                                                        key={index}
                                                                        src={`${apiBaseUrl}${staticPath}${file}`}
                                                                        alt={`Slide ${index}`}
                                                                        className="w-16 h-16 object-cover mx-1 m-2 rounded-lg"
                                                                    />
                                                                ))
                                                            ) : (
                                                                <span>No Images</span>
                                                            )}
                                                        </td>

                                                        <td className="border border-gray-400 px-4 py-2">{value.status ? "Active" : "Deactive"}</td>
                                                        <td className="border border-gray-400 px-4 py-2 text-center">
                                                            <button onClick={() => edit(value._id)} class="bg-green-500 text-white px-5 mr-5 py-1">Edit</button>
                                                            <button onClick={() => singDel(value._id)} class="bg-red-400 text-white px-5 py-1">Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            :
                                            <tr>
                                                <td colSpan={8}>NO DATA FOUND</td>
                                            </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}