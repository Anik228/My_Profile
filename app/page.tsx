import React from 'react';
import Head from './component/head/head';
import Workingex from './component/body/workingex';
import Workingexpreience from './component/body/workingexperience';
import Footer from './component/body/footer';

export default function Home() {
 
  return (
    <div>
      <Head/>
      <Workingex/>
      <Workingexpreience/>
      <Footer/>
    </div>
  );
}
