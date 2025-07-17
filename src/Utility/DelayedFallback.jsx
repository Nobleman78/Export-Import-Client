import { useEffect, useState } from 'react';
import logo from '../assets/NavImages/logo.png'

const DelayedFallback = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true)
        }, 200);
        return () => clearTimeout(timer)

    }, [])
    return show ? (
        <div className="flex flex-col justify-center items-center h-screen text-xl text-gray-700">
            <img src={logo} alt="Loading logo" className=" animate-bounce" />
            <h2>Loading.....</h2>    
        </div>
    ) : null;
};

export default DelayedFallback;