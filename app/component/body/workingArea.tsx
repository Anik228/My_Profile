"use client";

import React from 'react';
import { AiOutlineDotNet } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

const WorkingArena = () => {
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
                                <label htmlFor="my_modal_aspnet" className="text-blue-500 text-xs cursor-pointer hover:underline">
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
                                <label htmlFor="my_modal_java" className="text-blue-500 text-xs cursor-pointer hover:underline">
                                    View Work Details
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card bg-base-100 w-full h-full shadow-xl">
                        <div className="px-4 py-4">
                            <div className="flex items-center justify-center">
                                <SiNestjs className="text-4xl text-blue-600" />
                            </div>
                            <div className="flex justify-center text-center">
                                <p className="text-base font-bold">NestJs</p>
                            </div>
                            <p className="text-sm text-center">Working on Nest JS</p>
                            <div className="text-center">
                                <label htmlFor="my_modal_nest" className="text-blue-500 text-xs cursor-pointer hover:underline">
                                    View Work Details
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card bg-base-100 w-full h-full shadow-xl">
                        <div className="px-4 py-4">
                            <div className="flex items-center justify-center">
                                <RiNextjsLine className="text-4xl text-blue-600" />
                            </div>
                            <div className="flex justify-center text-center">
                                <p className="text-base font-bold">NextJs</p>
                            </div>
                            <p className="text-sm text-center">Working on NextJs</p>
                            <div className="text-center">
                                <label htmlFor="my_modal_next" className="text-blue-500 text-xs cursor-pointer hover:underline">
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
                            <p className="text-sm text-center">MSSQL, Oracle, PostgreSQL</p>
                            <div className="text-center">
                                <label htmlFor="my_modal_db" className="text-blue-500 text-xs cursor-pointer hover:underline">
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

export default WorkingArena;
