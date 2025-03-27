"use client"
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function forgetpassword() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleResetPassword = async () => {
        if (!email) {
            alert("Please enter your email.");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage(`Password reset link sent to ${email}`);
        } catch (error) {
            alert(error.message);
        }
    };
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            alert(`Signed in as: ${result.user.email}`);
        } catch (error) {
            alert(error.message);
        }
    };



    return (
        <>
            <div class="bg-white p-6 m-auto my-39 rounded-lg shadow-lg w-96 text-center">
                <h2 class="text-2xl font-bold text-gray-700 mb-2">Forgot Password?</h2>
                <p class="text-gray-500 text-sm mb-4">Enter your email to reset your password.</p>
                <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email"
                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button onClick={handleResetPassword}
                    class="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 transition">Reset Password</button>
                <p id="message" class="text-green-600 text-sm mt-2"></p>
            </div>
            <button
                onClick={handleGoogleSignIn}
                className="w-full bg-red-500 text-white py-2 mt-2 rounded-md hover:bg-red-600 transition flex items-center justify-center gap-2"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    className="w-5 h-5"
                    alt="Google Logo"
                />{" "}
                Sign in with Google
            </button>
            {message && <p className="text-green-600 text-sm mt-2">{message}</p>}

        </>
    )
}