import React from "react";
import Banner from "../Common/Banner";

export default function Contact() {
    return (
        <>
            <Banner />
            <div class="max-w-[1300px] m-auto my-[50px]">
                <div class="grid grid-cols-3">
                    <div class="text-center font-[&quot;Nunito&quot;]">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" class=" m-auto w-auto h-20 svg-inline--fa fa-location-dot text-[50px] py-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                        </svg>
                        <h1 class="text-[23px] font-[500]">Our Location</h1>
                        <p class="text-gray-500 pt-2">Collin Street West, Victor 8007, Australia.</p>
                    </div>
                    <div class="text-center font-[&quot;Nunito&quot;]">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class=" m-auto w-auto h-20 svg-inline--fa fa-phone text-[50px] py-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                        </svg>
                        <h1 class="text-[23px] font-[500]">Our Numbers</h1>
                        <p class="text-gray-500 pt-2">Mobile: (+096) 468 235</p>
                    </div>
                    <div class="text-center font-[&quot;Nunito&quot;]">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="m-auto w-auto h-20 svg-inline--fa fa-envelope text-[50px] py-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                        </svg>
                        <h1 class="text-[23px] font-[500]">Our Email</h1>
                        <p class="text-gray-500 pt-2">info@edumy.com</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 my-[70px] gap-[30px]">
                    <div class="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1831723.4854919256!2d70.59351975624999!3d26.275131300000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418dfd54702095%3A0x12a00bbcdd6211d6!2sWsCube%20Tech%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1706696499111!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class=" font-[&quot;Nunito&quot;]">
                        <h1 class="text-[25px] font-[500] pb-3">Send a Message</h1>
                        <p class="pb-4">Ex quem dicta delicata usu, zril vocibus maiestatis in qui.</p>
                        <form action="">
                            <label for="" class="">Your name</label>
                            <input type="text" class="w-full mt-2 mb-6 rounded h-[50px] shadow-[0px_0px_5px_0px_gray] " />
                            <label for="" class="">Email Address</label>
                            <input type="text" class="w-full mt-2 mb-6 rounded h-[50px] shadow-[0px_0px_5px_0px_gray] " />
                            <label for="" class="">Subject</label>
                            <input type="text" class="w-full mt-2 mb-6 rounded h-[50px] shadow-[0px_0px_5px_0px_gray] " />
                            <label for="" class="">Message</label>
                            <textarea name="" id="" class="w-full mt-2 mb-3 rounded  shadow-[0px_0px_5px_0px_gray] " cols="30" rows="5"></textarea>
                            <input type="Submit" class="border-[3px] text-blue-700 border-blue-700 text-[20px] px-[60px] rounded py-3" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}