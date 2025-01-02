"use client";

import React, { useState, useEffect } from 'react';
import JoinTime from './jointimeline';
import WorkingArena from './workingArea';


const Workingexpreience = () => {
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {

        setHasLoaded(true);
    }, []);

    return (
        <div>
            <div className='container mx-auto px-4 mb-16'>
            <input type="checkbox" id="my_modal_php" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className='mb-4'>
                            <h3 className="text-base font-bold">Working on PHP CodeIgniter</h3>
                        </div>
                        <div className="text-xs">
                            <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Worked on a portal development project using PHP CodeIgniter framework.
                                </li>
                               
                            </ul>
                        </div>

                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_php">Close</label>
                </div>

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
                                    Worked on a network monitoring solution using Next.js,Tailwind CSS, daisyUI.
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

                <input type="checkbox" id="my_modal_nest" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className='mb-4'>
                            <h3 className="text-base font-bold">Working in NestJs and Node.js</h3>
                        </div>
                        <div className="text-xs font-bold">
                            <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Worked on BlCare, a Banglalink health service project, using NestJS and MSSQL.
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Worked on Robi Healthplus, a Robi health service project, using NestJS, Node.js, and MSSQL.
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Worked on Purno Health, a health service project, using NestJS, Node.js, and MSSQL.
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Created a bulk data inserter and bKash SVG banner template generator with QR codes as a demo project of bkash using NestJS.
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Worked on a network monitoring solution using NestJS and PostgreSQL.
                                </li>

                            </ul>
                        </div>

                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_nest">Close</label>
                </div>
                <input type="checkbox" id="my_modal_aspnet" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className='mb-4'>
                            <h3 className="text-base font-bold">Working on ASP.NET</h3>
                        </div>
                        <div className="text-xs font-bold">
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

                {/* Java Modal */}
                <input type="checkbox" id="my_modal_java" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className='mb-4'>
                            <h3 className="text-base font-bold">Working on Java</h3>
                        </div>
                        <div className="text-xs font-bold">
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
                <input type="checkbox" id="my_modal_db" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className='mb-4'>
                            <h3 className="text-base font-bold">Databases</h3>
                        </div>
                        <div className="text-xs font-bold">
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


                <div className="flex items-center justify-center mb-4">
                    <h2 className="card-title text-center">My Work Experience</h2>
                </div>
                <div className="grid grid-cols-1 items-center">
                    <div className={` ${hasLoaded ? 'slide-in-left' : ''}`}>
                        <div className="card bg-base-100 w-full shadow-xl h-full">


                            <div className='mx-auto px-4 mt-4 mb-12'>
                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center">
                                    <div className="card bg-base-100 w-fit shadow-xl mx-auto justify-center">
                                        {/* <div
                                            className="flex items-center justify-center mt-8">
                                            <div className="text-center ">
                                                <p className="text-base font-bold">Supernova Techno LTD</p>
                                                <p className="text-sm font-bold">Jr Software Engineer</p>
                                            </div>
                                        </div> */}
                                        <div
                                            className=" mt-8">
                                            <div className="text-center ">
                                                <p className="text-base font-bold">Supernova Techno LTD</p>
                                                <p className="text-sm font-bold">Jr Software Engineer</p>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <div>
                                                <p className="text-sm text-justify">
                                                    Working in Supernova Techno Limited as a Jr Software Engineer, my working clients are Robi Axiata Limited, bKash, and Banglalink. Working in Supernova Techno Limited I handled a big VAS platform database which have four charging channel IVR,SMS,WAP & USSD & I big database and provide an efficient VAS platform experience to the user. I also work on a big message sender & billing management database.  I used here MSSQL,Oracle & PostgreSQL
                                                </p>
                                            </div>
                                            <div className='mt-4 pr-4'>
                                                <JoinTime />
                                            </div>


                                        </div>

                                    </div>

                                    <div>
                                        <WorkingArena />
                                    </div>
                                </div>
                            </div>



                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Workingexpreience;
