import { Helmet } from 'react-helmet';
import contactLottie from '../assets/Connect with us.json'
import Lottie from 'lottie-react';
import { GrLocation } from 'react-icons/gr';
import { TbPhoneCall } from 'react-icons/tb';
import { AiOutlineMail } from 'react-icons/ai';
import { useState } from 'react';
import UseAxiosPublic from '../Utility/Hooks/UseAxiosPublic';
const Contact = () => {
    const axiosPublic = UseAxiosPublic()
    const [phoneNumber, setPhoneNumber] = useState('')
    const validNumberCheck = (phoneNumber) => {
        const cleaned = phoneNumber.replace(/[\s\-()]/g, '');
        const bdPhoneRegex = /^(?:\+8801|01)[3-9]\d{8}$/;
        return bdPhoneRegex.test(cleaned);
    };

    const handleContact = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            FirstName: form.firstname.value,
            lastName: form.lastname.value,
            email: form.email.value,
            number: form.phonenumber.value,
            message: form.message.value
        }
        if (!validNumberCheck(phoneNumber)) {
            alert('Please Provide Correct Number')
            return
        }


        axiosPublic.post('/contactData', formData)
            .then(res => {
                if (res.data.success) {
                    alert('Data sent successfully to the server')
                    form.reset()
                }
                else {
                    alert('Error to send data to the server')
                }
            })
    }
    return (
        <div>
            <main className='lg:max-w-7xl mx-auto'>
                <Helmet>
                    <title>Contact |NextEra Logistic</title>
                </Helmet>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full md:w-1/2' >
                        <Lottie animationData={contactLottie}></Lottie>
                    </div>
                    <div className='w-full md:w-1/2 mt-5 bg-teal-700 text-white px-5 md:px-20 py-5  rounded-3xl' >
                        <h2 className='text-4xl font-semibold'>Contact Information</h2>
                        <div className='flex flex-col gap-3 mt-7 text-md'>
                            <p className='flex items-center gap-3'><GrLocation /> 1301/1 East Monipur, Begum Rokeya Sarani, Mirpur-10, Dhaka-1216</p>
                            <p className='flex items-center gap-3'><TbPhoneCall /> +8801401791719</p>
                            <p className='flex items-center gap-3'><AiOutlineMail />export-import@gmail.com</p>
                        </div>
                        <form onSubmit={handleContact} className=''>
                            <div className='flex flex-col md:flex-row mt-10 justify-between items-center gap-4'>
                                <div className='w-full md:w-1/2 flex flex-col' >
                                    <label htmlFor="">First Name</label>
                                    <input required name='firstname' className='shadow-none rounded outline-none border mt-2 px-4 py-2 bg-white text-black' type="text" placeholder='Enter Your First Name' />
                                </div>
                                <div className='w-full md:w-1/2 flex flex-col' >
                                    <label htmlFor="">Last Name</label>
                                    <input required name='lastname' className='shadow-none rounded outline-none border mt-2 px-4 py-2 bg-white text-black' type="text" placeholder='Enter Your Last Name' />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row justify-between mt-5 md:mt-0 items-center gap-4'>
                                <div className='w-full md:w-1/2 flex flex-col'>
                                    <label htmlFor="" >Email</label>
                                    <input required name='email' className='shadow-none rounded outline-none border mt-2 px-4 py-2 bg-white text-black' type="email" placeholder='Enter Your Email' />
                                </div>
                                <div className='w-full md:w-1/2 flex flex-col'>
                                    <label htmlFor="">Phone Number</label>
                                    <input onChange={(e) => setPhoneNumber(e.target.value)} required value={phoneNumber} name='phonenumber' className='shadow-none rounded outline-none border mt-2 px-4 py-2 bg-white text-black' type="number" placeholder='Enter Your Phone Number' />
                                </div>
                            </div>
                            <div className='flex flex-col mt-5' >
                                <label htmlFor="">Message</label>
                                <input required name='message' type="text" className='py-5 px-4 border outline-none shadow-none mt-2 rounded-lg bg-white text-black' />
                            </div>
                            <button className='text-lg px-4 py-2 cursor-pointer bg-white hover:text-teal-700 text-black mt-4 rounded w-50' data-aos="fade-up">Submit</button>
                        </form>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Contact;