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
            <div className="grid grid-cols-3 gap-2">

                {/* ASP.NET Card */}
                <div>
                    <div className="card bg-base-100 w-full  h-fit shadow-xl">
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

                            {/* ASP.NET Modal */}
                            <input type="checkbox" id="my_modal_aspnet" className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box">
                                    <div className='mb-4'>
                                        <h3 className="text-base font-bold">Working on ASP.NET</h3>
                                    </div>
                                    <div className="text-xs">
                                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Worked on a VAS platform charging application with two charging channels: IVR and WEB, using ASP.NET and MSSQL, with integration via a SOAP-based API.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Designed and implemented a message sender worker service using ASP.NET and MSSQL, successfully deploying it to a live server.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Created an Android push notification sender worker service using ASP.NET, MSSQL, and Firebase, successfully deploying it to a live server.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Worked on an existing bKash project called ImageMerging Service, a desktop-based ASP.NET application. My role involved developing new features and implementing change requests using ASP.NET.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Gained experience with the ASP.NET Web API framework.
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_aspnet">Close</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Java Card */}
                <div>
                    <div className="card bg-base-100 w-full  shadow-xl">
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

                            {/* Java Modal */}
                            <input type="checkbox" id="my_modal_java" className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box">
                                    <div className='mb-4'>
                                        <h3 className="text-base font-bold">Working on Java</h3>
                                    </div>
                                    <div className="text-xs">
                                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Worked on Java platform maven applications such as mail senders, billing generation processors, and file fetch processors, as well as deploying Maven-built JARs on Linux servers.
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_java">Close</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card bg-base-100 w-full shadow-xl">
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

                            {/* Nest Modal */}
                            <input type="checkbox" id="my_modal_nest" className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box">
                                    <div className='mb-4'>
                                        <h3 className="text-base font-bold">Working in NestJs and NodeJs</h3>
                                    </div>
                                    <div className="text-xs">
                                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Worked on a Banglalink project involving backend development using NestJS and MSSQL.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Worked on a Banglalink project involving backend development using NestJS and MSSQL.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Worked on a health service project name robi healthplus using NestJS and MSSQL
                                            </li>
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Built a bulk data inserter and AI image generator using NestJS.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Developed a network monitoring solution using NestJS and PostgreSQL.
                                            </li>

                                        </ul>
                                    </div>

                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_nest">Close</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card bg-base-100 w-full  shadow-xl">
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

                            {/* Next Js Modal */}
                            <input type="checkbox" id="my_modal_next" className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box">
                                    <div className='mb-4'>
                                        <h3 className="text-base font-bold">Working on Frontend Development</h3>
                                    </div>
                                    <div className="text-xs">
                                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Worked on a network monitoring solution using NextJs,Tailwind CSS, daisyUI.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Worked on portal development using html,css and bootstrap.
                                            </li>
                                        
                                           
                                        </ul>
                                    </div>

                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_next">Close</label>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="card bg-base-100 w-full  shadow-xl">
                        <div className="px-4 py-4">
                            <div className="flex items-center justify-center">
                                <FaDatabase className="text-4xl text-blue-600" />
                            </div>
                            <div className="flex justify-center text-center">
                                <p className="text-base font-bold">Databases</p>
                            </div>
                            <p className="text-sm text-center">Oracle,MSSQL,PostSQL</p>
                            <div className="text-center">
                                <label htmlFor="my_modal_db" className="text-blue-500 text-xs cursor-pointer hover:underline">
                                    View Work Details
                                </label>
                            </div>

                            {/* Database Modal */}
                            <input type="checkbox" id="my_modal_db" className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box">
                                    <div className='mb-4'>
                                        <h3 className="text-base font-bold">Databases</h3>
                                    </div>
                                    <div className="text-xs">
                                        <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Managed large-scale databases, including Messaging, Billing Management, and VAS Platform databases, supporting four charging channels—IVR, SMS, USSD, and WEB—using Oracle & MSSQL.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Writing complex queries in Oracle, MSSQL & PostgreSQL.
                                            </li>
                                            
                                            <li className="flex items-center">
                                                <span className="mr-2 text-blue-500">✔️</span>
                                                Creating stored procedures in Oracle, MSSQL & PostgreSQL.
                                            </li>
                                           
                                        </ul>
                                    </div>

                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_db">Close</label>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default WorkingArena;
