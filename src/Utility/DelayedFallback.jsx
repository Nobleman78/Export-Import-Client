import { useEffect, useState } from 'react';

const DelayedFallback = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true)
        }, 200);
        return () => clearTimeout(timer)

    }, [])
    return show ? (
        <div className="flex justify-center items-center h-screen text-xl text-gray-700">
            Loading content...
        </div>
    ) : null;
};

export default DelayedFallback;