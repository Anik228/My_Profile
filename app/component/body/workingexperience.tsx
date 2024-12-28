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
                <div className="flex items-center justify-center mb-4">
                    <h2 className="card-title text-center">My Work Experience</h2>
                </div>
                <div className="grid grid-cols-1 gap-2 items-center">
                    <div className={` ${hasLoaded ? 'slide-in-left' : ''}`}>
                        <div className="card bg-base-100 w-full shadow-xl h-full">


                            <div className='mx-auto px-4 mt-4 mb-12'>
                                <div className="grid grid-cols-2 gap-2 items-center">
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
                                            <div className='mt-4'>
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
