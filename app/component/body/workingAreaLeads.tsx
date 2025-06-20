"use client";

import React from 'react';
import { AiOutlineDotNet } from "react-icons/ai";
import { FaAngular } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";

const WorkingAreaLeads = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mt-12">

                <div>
                    <div className="card bg-base-100 w-full  h-full shadow-xl">
                        <div className="px-4 py-4">
                            <div className="flex items-center justify-center">
                                <AiOutlineDotNet className="text-4xl text-blue-600" />
                            </div>
                            <div className="flex justify-center text-center">
                                <p className="text-base font-bold">ASP.NET</p>
                            </div>
                            <p className="text-sm text-center">Working on ASP.NET</p>
                            <div className="text-center">
                                <label htmlFor="leads_my_modal_aspnet" className="text-blue-500 text-xs cursor-pointer hover:underline">
                                    View Work Details
                                </label>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="card bg-base-100 w-full h-full  shadow-xl">
                        <div className="px-4 py-4">
                            <div className="flex items-center justify-center">
                                <FaJava className="text-4xl text-blue-600" />
                            </div>
                            <div className="flex justify-center text-center">
                                <p className="text-base font-bold">Java</p>
                            </div>
                            <p className="text-sm text-center">Working on Java</p>
                            <div className="text-center">
                                <label htmlFor="leads_my_modal_java" className="text-blue-500 text-xs cursor-pointer hover:underline">
                                    View Work Details
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card bg-base-100 w-full  h-full shadow-xl">
                        <div className="px-4 py-4">
                            <div className="flex items-center justify-center">
                                <FaDatabase className="text-4xl text-blue-600" />
                            </div>
                            <div className="flex justify-center text-center">
                                <p className="text-base font-bold">Databases</p>
                            </div>
                            <p className="text-sm text-center">Oracle</p>
                            <div className="text-center">
                                <label htmlFor="leads_my_modal_db" className="text-blue-500 text-xs cursor-pointer hover:underline">
                                    View Work Details
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="card bg-base-100 w-full  h-full shadow-xl">
                        <div className="px-4 py-4">
                            <div className="flex items-center justify-center">
                                <FaAngular className="text-4xl text-blue-600" />
                            </div>
                            <div className="flex justify-center text-center">
                                <p className="text-base font-bold">View</p>
                            </div>
                            <p className="text-sm text-center">Working on Angular</p>
                            <div className="text-center">
                                <label htmlFor="leads_my_modal_angular" className="text-blue-500 text-xs cursor-pointer hover:underline">
                                    View Work Details
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WorkingAreaLeads;
