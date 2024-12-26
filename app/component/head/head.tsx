"use client";
import React, { useState } from 'react';
import Link from 'next/link'

function Head() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-banner bg-cover bg-center h-96">
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
                    <h1 className="w-100 h-10 mr-2 text-black text-sky-500 font-bold text-xl">Anik Portfolio</h1>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center px-3 py-2 rounded text-white hover:text-gray-400"
                    >
                        <svg
                            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                        <svg
                            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full lg:w-auto lg:flex lg:items-center justify-end ${isOpen ? "block" : "hidden"}`}
                >
                    <div className="text-sm lg:flex-grow">
                        <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:text-gray-400">
                            Home
                        </Link>
                        <Link href="./Head" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:text-gray-400">
                            About me
                        </Link>
                       
                        <Link href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:text-gray-400">
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
            <div className='text-center text-white text-4xl font-bold mt-12'>
                <p>Hello I am Anik</p>
            </div>
            <div className='text-center text-white text-base font-bold mt-8'>
                <p>Welcome to my portfolio page</p>
            </div>
        </div>
    );
}

export default Head;
