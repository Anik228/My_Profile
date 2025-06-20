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
                                    To be announced
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
                                   To be announced
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
                                    Writing complex stored procedures,functions in Oracle with core banking business logic.
                                </li>

                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                    Writing complex queries in Oracle.
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
                                   Working on a core banking payment module using ASP.NET Core MVC,ASP.NET Web Forms and ASP .NET Web API.
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔️</span>
                                   Developing an XML generation and parsing system using ASP.NET Windows Forms.
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
                                                   Working as a Software Engineer in the Core Banking Solutions department, utilizing #ASP.NET and #Oracle technologies. Gaining hands-on experience by collaborating directly with bank clients and working on core banking systems.
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
