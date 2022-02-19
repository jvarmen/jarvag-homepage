import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollButton = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });
    if (scrollY <= 0) return null
    return (
        <div className='sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition'>
            <div className="text-gray-400 hover:text-blue-400 transition">
                <button onClick={() => window.scrollTo(0, 0)}>
                    <BsFillArrowUpCircleFill className="text-4xl text-black" />
                </button>
            </div>
        </div>
    );
};

export default ScrollButton;
