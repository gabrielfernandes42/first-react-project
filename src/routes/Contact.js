import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroImage from "../components/HeroImage"
import  Form  from '../components/Form';

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage title="CONTACT" text="Contact GLX Tr"/>
        <Form />
        <Footer />
    </div>
  )
}

export default Contact;