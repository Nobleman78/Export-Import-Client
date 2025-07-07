import React from 'react';
import { MdOutlineDoubleArrow } from "react-icons/md";
import image1 from '../assets/CapabilitiesImages/capabilities-image1.png'
import image2 from '../assets/CapabilitiesImages/capabilities-image2.png'
import image3 from '../assets/CapabilitiesImages/capabilities-image3.png'
import image4 from '../assets/CapabilitiesImages/capabilities-image4.png'

const Capabilities = () => {
    const capabilites = [
        {
            image: image1,
            title: 'Ocean Freight',
            des: 'lacinia tincidla apteaciti sociosqu altora torquen massa placduis.'
        },
        {
            image: image2,
            title: 'Air Freight',
            des: 'lacinia tincidla apteaciti sociosqu altora torquen massa placduis.'
        },
        {
            image: image3,
            title: 'Land Freight',
            des: 'lacinia tincidla apteaciti sociosqu altora torquen massa placduis.'
        },
        {
            image: image4,
            title: 'Rail Freight',
            des: 'lacinia tincidla apteaciti sociosqu altora torquen massa placduis.'
        }
    ]
    return (
        <div className='relative'>
            <main className='flex h-[500px]'>
                <div className='w-1/2 bg-[#299792]'>
                    <div className='items-center text-7xl font-bold px-20 py-20 text-white'>
                        <h2>Import Export <span className='inline-flex items-center gap-1'>Capabilities <MdOutlineDoubleArrow /></span></h2>

                    </div>
                </div>
                <div className='w-1/2 px-20 py-20 text-xl '>
                    <p className='text-justify' style={{ fontFamily: 'roboto' }}>"We offer end-to-end import and export solutions designed to streamline global trade. From sourcing and compliance to logistics and delivery, our expertise ensures your goods move efficiently and securely across borders."</p>
                </div>
            </main>
            {/* Overlay images and text*/}
            <div className='absolute bottom-[-150px] flex bg-white shadow-xl mx-20   px-20 py-20 rounded-xl'>
                {
                    capabilites.map((capa, index) => (
                        <div key={index} className='content-center  flex flex-col gap-5 items-center'>
                            <div className='relative'>
                                <span className='bg-gray-100 rounded-full px-15 py-15 top-[-30px] left-[-20px] absolute z-0'></span>
                                <img className='z-10 relative animate-fadey ' loading='lazy' src={capa.image} alt="" />
                            </div>
                            <h2 className='text-2xl font-semibold'>{capa.title}</h2>
                            <p className='text-center'>{capa.des}</p>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Capabilities;