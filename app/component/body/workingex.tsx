"use client";

import React, { useState, useEffect } from 'react';

const Workingex = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {

    setHasLoaded(true);
  }, []);

  return (
    <div>
      <div className='container mx-auto px-12 mt-16 mb-12'>
        <div className="grid grid-cols-2 gap-2 items-center">

          <div className={`avatar avatar-class ${hasLoaded ? 'slide-in-left' : ''}`}>
            <div className="rounded-xl w-[450px] h-[450px] my-image-about"></div>
          </div>

          <div className={` ${hasLoaded ? 'slide-in-left' : ''}`}>
            <div className="card bg-base-100 w-fit shadow-xl">
              <div className="card-body">
                <h2 className="card-title">About me</h2>
                <p className="text-sm text-justify">
                  I am a self-motivated and results-driven software engineer with a passion for leveraging technology to solve complex problems and drive innovation. My goal is to contribute effectively to the growth and success of a dynamic organization, while continuously enhancing my skills and knowledge. I thrive in collaborative environments and am committed to delivering high-quality solutions that meet both user and business needs. With a strong foundation in software development and a continuous drive for learning, I aim to contribute meaningfully to projects that foster both personal and professional growth.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Workingex;
