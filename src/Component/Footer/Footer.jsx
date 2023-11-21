import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='bg-black w-[98%] ml-3 rounded mt-8'>
                <div className='flex flex-col justify-between  w-full text-white gap-6 pl-4
                    md:flex-row md:justify-between md:items-center md:w-auto md:mx-auto md:py-16 md:px-4
                    md:text-white lg:flex-row lg:justify-between lg:items-center lg:max-w-[1340px] lg:mx-auto lg:px-4'
                >

                    <div className='flex flex-col gap-6 items-start md:gap-6'>
                        <h3 className='text-2xl uppercase font-extrabold'>Lama</h3>
                        <div className='flex flex-row gap-3'>
                            <FaFacebookSquare size={20} />
                            <FaInstagram size={20} />
                            <FaTwitter size={20} />
                            <FaLinkedin size={20} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-6'>
                        <h3 className='text-xl'>Contact</h3>
                        <div className='flex flex-col gap-3'>
                            <span>Telephone: +977-1-4544125</span>
                            <span>E-mail: info@oasiskathmanduhotel.com</span>
                            <span>Mobile: +977-9851190204</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-6'>
                        <h3 className='uppercase text-xl'>Hotel address</h3>
                        <div className='flex flex-col gap-3'>
                            <span className=' text-gray-400'>Oasis Kathmandu Hotel</span>
                            <span>Naikap Village Resort, Kalanki, Kathmandu,</span>
                            <span>Nepal</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
