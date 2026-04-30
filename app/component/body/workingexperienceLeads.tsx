"use client";

import React, { useState, useEffect } from 'react';
import JoinTime from './jointimeline';
import WorkingArena from './workingArea';
import WorkingArenaLeads from './workingAreaLeads';
import WorkingAreaLeads from './workingAreaLeads';
import JoinTimeLeads from './jointimelineLeads';


const WorkingexpreienceLeads = () => {
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        setHasLoaded(true);
    }, []);

    return (
        <div>
            <div className='container mx-auto px-4 mb-16'>

                <input type="checkbox" id="leads_my_modal_angular" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className='mb-4'>
                            <h3 className="text-base font-bold">Working in Angular</h3>
                        </div>
                        <div className="text-xs font-bold">
                            <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Creating and maintaining robust frontend architectures using the Angular framework.
                                </li>
                              
                            </ul>
                        </div>

                    </div>
                    <label className="modal-backdrop" htmlFor="leads_my_modal_angular">Close</label>
                </div>
             

                {/* Java Modal */}
                <input type="checkbox" id="leads_my_modal_java" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className='mb-4'>
                            <h3 className="text-base font-bold">Working on Java</h3>
                        </div>
                        <div className="text-xs font-bold">
                            <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                  Worked on a scalable Java Spring Boot–based microservices platform.
                                </li>

                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                   Developed a cheque processing system using the Spring Boot framework.
                                </li>
                            </ul>
                        </div>

                    </div>
                    <label className="modal-backdrop" htmlFor="leads_my_modal_java">Close</label>
                </div>

                
                <input type="checkbox" id="leads_my_modal_db" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className='mb-4'>
                            <h3 className="text-base font-bold">Databases</h3>
                        </div>
                        <div className="text-xs font-bold">
                            <ul className="space-y-2 list-disc pl-5 text-gray-700"> 

                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    working on the Oracle Database platform.
                                </li>

                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Proficient in developing stored procedures, functions, and triggers in Oracle.
                                </li>
                                 <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Writing complex queries in Oracle.
                                </li>
                                  <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Creating stored procedures in Oracle.
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Skilled in Oracle database design and PL/SQL programming.
                                </li>

                            </ul>
                        </div>

                    </div>
                    <label className="modal-backdrop" htmlFor="leads_my_modal_db">Close</label>
                </div>

                <input type="checkbox" id="leads_my_modal_aspnet" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className='mb-4'>
                            <h3 className="text-base font-bold">Working on ASP.NET</h3>
                        </div>
                        <div className="text-xs font-bold">
                            <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                   Core Banking Systems Development & Maintenance using ASP .NET.
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                   Financial Systems & core payment system Integration ASP .NET (BACH ,BEFT & RTGS).
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Developed and enhanced features in a desktop XML generator and reader application (BACH,BEFT & RTGS XML Files) using Windows Forms in ASP.NET.
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Worked on and developed a customer account verification system (AVS).
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Gained experience with the ASP.NET Web API framework.
                                </li>
                                
                            </ul>
                        </div>

                    </div>
                    <label className="modal-backdrop" htmlFor="leads_my_modal_aspnet">Close</label>
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
                                      
                                        <div
                                            className=" mt-8">
                                            <div className="text-center ">
                                                <p className="text-base font-bold">LEADS Corporation Limited</p>
                                                <p className="text-sm font-bold">Software Engineer</p>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <div>
                                                <p className="text-sm text-justify">
                                                        Working as a Software Engineer in the Core Banking Solutions department, where I develop and maintain core banking systems using technologies such as ASP.NET, Java Spring Boot, Angular, Oracle, REST APIs, and SOAP services. My role involves direct collaboration with banking clients, allowing me to gain hands-on experience and a deeper understanding of real-world financial operations. I actively contribute to system development and integration while following Agile Software Development Lifecycle (SDLC) methodologies to ensure efficient and structured project delivery.
                                                </p>
                                            </div>
                                            <div className='mt-4 pr-4'>
                                                <JoinTimeLeads />
                                            </div>


                                        </div>

                                    </div>

                                    <div>
                                        <WorkingAreaLeads/>
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

export default WorkingexpreienceLeads;
