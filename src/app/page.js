"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { auth, provider } from '@/lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
// import { saveLoginDetails } from './slice/AdminSlice';

export default function Login() {

  // let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASE;
  // let loginData =useSelector (() => {
  //   return myAllStore.loginStore.adminDetails
  // })
  // let router = useRouter();
  // let dispatch = useDispatch()
  // let checkLogin = (event) => {

  //   event.preventDefault()

  //   let obj = {
  //     adminUname: event.target.adminUname.value,
  //     adminPassword: event.target.adminPassword.value
  //   }
  //   console.log("hii", obj);
  //   axios.post(`${apiBaseUrl}admin/adminauth/login`, obj)
  //     .then((res) => res.data)
  //     .then((finalres) => {

  //       if (finalres.status) {
  //         console.log(finalres.data)
  //         dispatch(saveLoginDetails({ admin: finalres.data }))
  //       }
  //       else {
  //         alert(finalres.msg)
  //       }
  //     })

  // }
  // useEffect(() => {

  //   if (loginData) {
  //     router.push("/Dashbord");
  //   }
  // }, [loginData])


  let Router = useRouter()
  // const [user, setUser] = useState(null);

  // const loginWithGoogle = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     setUser(result.user);
  //   } catch (error) {
  //     console.error("Google Sign-In Error:", error);
  //   }
  // };

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASE
  let [userdata, setuserdata] = useState("");
  let [inputs, setinputs] = useState({
    email: "",
    password: ""
  })
  let apidata = () => {
    axios.get(`${apiBaseUrl}admin/user/view`)
      .then((res) => res.data)
      .then((finalres) => {
        setuserdata(finalres.data)
        // console.log(finalres.data)
      })
      .catch((console.error()
      ))
  }
  useEffect(() => {
    apidata()
  }, [])
  let getvalue = (event) => {
    event.preventDefault();
    let inputname = event.target.name
    let inputvalue = event.target.value
    let olddata = { ...inputs }
    olddata[inputname] = inputvalue
    setinputs(olddata)
    console.log(olddata)

  }

  let login = (event) => {
    event.preventDefault()
    userdata.map((value, index) => {
      if (value.Email_Id === inputs.email) {
        if (value.Password === inputs.password) {
          toast.success("login Successful...!")
          setTimeout(() => {
            Router.push("/Dashbord")
          })
        }
        else (
          toast.error("Incorrect password")
        )

      }
      else {
        toast.error("Email not found")
        // console.log(value.Email_Id, "===", inputs.email)
        // if()

      }
    })


  }
  let Auth = (event) => {
    event.preventDefault()
    Router.push("/LoginAuth")
  }
  let forgetpass = () => {
    Router.push('/Forgetpassword')
  }

  return (
    <>
      <form onSubmit={login} class="max-w-sm mx-auto m-25 p-10 border-1">
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium  ">Your email</label>
          <input type="email" onChange={getvalue} name='email' id="email" class=" border border-gray-300  text-sm rounded-lg  block w-full p-2.5 " placeholder="name@flowbite.com" required />
        </div>
        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium ">Your password</label>
          <input type="password" onChange={getvalue} name='password' id="password" class="border border-gray-300  text-sm rounded-lg block w-full p-2.5 " required />
        </div>
        <button type="submit" class="w-full m-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        <div class="flex flex-inline justify-items-center justify-between my-5">
          <div class="flex items-start ">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium ">Keep me sign-in</label>
          </div>
          <div>
            <button for="remember" class="ms-2 text-sm font-medium ">Forget password..?</button>
          </div>
        </div>
        {/* <button
        type="button"
        onClick={loginWithGoogle}
        className="w-full m-1 text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Sign in with Google
      </button> */}
      </form>

    </>
  );
}
