"use client"
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Header from "../cmmon/Header";
import Footer from "../cmmon/Footer";


export default function Changepassword() {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [formEmail, setformEmail] = useState("");
    const [oldpassword, setoldpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASE;
    // let { id } = useParams();
    let Router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const handleChangePassword = (event) => {
        event.preventDefault()
        // console.log(event.target)
        axios.get(`${apiBaseUrl}admin/user/editRow/${id}`)
            .then((res) => res.data)
            .then((finalres) => {
                let data = (finalres.data)
                // console.log(data)
                setEmail(data.Email_Id)
                setoldpassword(data.Password)
            })
        // console.log(Email)
        // console.log(formEmail)

        if (Email == formEmail) {
            console.log(Email, formEmail)

            if (oldpassword == currentPassword) {
                if (newPassword == confirmPassword) {
                    let formvalue = {
                        Password: newPassword
                    }
                    axios.put(`${apiBaseUrl}admin/user/update/${id}`, formvalue)
                        .then((res) => {
                            if (res.data.state) {
                                setMessage("Password changed successfully.")
                                toast.success(message)
                                    
                                // console.log(message)
                            }
                        })
                }
                else {
                    setMessage("New passwords do not match.");
                    toast.error(message)

                }
            }
            else {
                setMessage("old password dosnt mactch")
                toast.error(message)
            }
            rooute()
        }
        else {
            setMessage("email dosn't match")
            toast.error(message)
            console.log(Email, formEmail)
        }
    };

    let rooute = ()=>{
        setTimeout(() => {
            Router.push('/User/View')
        }, 2000)
    }


    return (
        <>
            <Header />
            <form action="" onSubmit={handleChangePassword}>
                <div class="bg-white p-6 m-auto my-39 rounded-lg shadow-lg w-96 text-center">
                    <h2 class="text-2xl font-bold text-gray-700 mb-2">Change Password?</h2>
                    <p class="text-gray-500 text-sm mb-4">Enter your email to reset your password.</p>
                    <input type="email" name="formEmail" onChange={(e) => setformEmail(e.target.value)} id="email" placeholder="Enter your email"
                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <p class="text-gray-500 text-sm mb-4">Enter your old password</p>
                    <input type="text" name="currentPassword" onChange={(e) => setCurrentPassword(e.target.value)} id="email" placeholder="Enter your old password"
                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <p class="text-gray-500 text-sm mb-4">Enter your New password</p>
                    <input type="text" name="newPasswoed" onChange={(e) => setNewPassword(e.target.value)} id="email" placeholder="Enter your new password"
                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <p class="text-gray-500 text-sm mb-4">ReEnter your new password</p>
                    <input type="password" name="ConformPassword" onChange={(e) => setConfirmPassword(e.target.value)} id="email" placeholder="ReEnter your new password"
                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="submit" name="change_password"  value={"Change Password"}
                        class="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 transition" />
                </div>
            </form>
            <Footer />

        </>
    )
}