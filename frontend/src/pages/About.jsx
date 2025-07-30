import React from 'react'
import Titl from '../components/Titl'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Titl text1={'ABOUT'} text2={'US'} />
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>At Forever Ecommerce, we believe shopping should be simple, satisfying, and secure. Founded with a vision to redefine online retail, our platform brings you a curated collection of quality products that blend style, functionality, and value. From everyday essentials to trendsetting finds, we’re here to help you shop smart and live well.</p>
                    <p>Forever Ecommerce was born from a simple idea: to build a platform that puts the customer at the heart of everything. In a world that’s moving fast, we wanted to create a space that feels personal, seamless, and reliable — a place where quality meets convenience.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Our mission is to make online shopping a delightful experience. That means fast delivery, reliable support, and a constantly evolving selection of items to meet your changing needs. Whether you're searching for the perfect gift or treating yourself to something special, Forever Ecommerce is your trusted destination.</p>
                </div>
            </div>
            <div className='text-4xl py-4'>
                <Titl text1={'WHY'} text2={'CHOOSE US'} />
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py- sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance</b>
                    <p className='text-gray-600'>At Forever Ecommerce, quality is not just a standard — it’s a commitment. Every product we offer goes through a careful selection and inspection process to ensure it meets the highest standards of durability, functionality, and satisfaction.</p>
                </div>
                <div className='border px-10 md:px-16 py- sm:py-20 flex flex-col gap-5'>
                    <b>Convenience</b>
                    <p className='text-gray-600'>At Forever Ecommerce, we understand that your time is valuable. That’s why we’re dedicated to making your shopping journey as effortless and enjoyable as possible — from browsing to checkout, and beyond.</p>
                </div>
                <div className='border px-10 md:px-16 py- sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service</b>
                    <p className='text-gray-600'>At Forever Ecommerce, we understand that your time is valuable. That’s why we’re dedicated to making your shopping journey as effortless and enjoyable as possible — from browsing to checkout, and beyond.</p>
                </div>

            </div>
            <NewsletterBox/>
        </div>
    )
}

export default About
