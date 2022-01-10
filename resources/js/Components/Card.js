import React from 'react'
import {FaDownload, FaFacebook, FaGithub, FaPhone, FaRegEnvelope, FaTwitter} from "react-icons/fa";

export default function Card(props){
    return(
        <div className="w-full">
            <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
                <div className="">
                    <img src={props.parentData.profile_img} alt={props.parentData.name} className="w-32 mx-auto shadow-xl rounded-full" />
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-900">{props.parentData.name}</p>
                    <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">{props.parentData.title}</p>
                </div>
                <div className="text-center mt-1">
                    <p className="text-2xl sm:text-base text-white py-2 w-auto inline-block bg-[#1D9BF0] rounded-full px-4 cursor-grab hover:text-red-500">
                        <FaDownload className="mx-auto"/>
                        My Resume
                    </p>
                </div>
                <div className="flex align-center justify-center mt-4">
                    <a href="https://github.com/ringkubd" target="_blank" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 rounded-full hover:text-white hover:bg-gray-800">
                        <FaGithub />
                        <span className="sr-only">Github</span>
                    </a>
                    <a href="https://fb.com/ringkubd" target="_blank" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:text-white hover:bg-blue-800 rounded-full">
                        <FaFacebook />
                        <span className="sr-only">Facebook</span>
                    </a>
                    <a href="https://twitter.com/ringkubd" target="_blank" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-[#1D9BF0] hover:text-white hover:bg-[#1D9BF0] rounded-full">
                        <FaTwitter />
                        <span className="sr-only">Twitter</span>
                    </a>
                    <a href="mailto:ajr.jahid@gmail.com" target="_blank" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-400 hover:text-white hover:bg-red-400 rounded-full">
                        <FaRegEnvelope />
                        <span className="sr-only">Mail</span>
                    </a>
                    <a href="tel:01737956549" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-900 hover:text-white hover:bg-green-900 rounded-full">
                        <FaPhone />
                        <span className="sr-only">Mobile</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
