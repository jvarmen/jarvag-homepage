import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <div className="py-5 bg-gradient-to-b from-gray-900 to-transparent flex text-white">
            <div className='container lg:w-3/5 mx-auto flex justify-between items-center'>
                <div className="text-white lowercase font-medium text-lg">JVARMEN</div>
                <div className="flex text-white font-medium items-center ">
                    <ul className="list-none">
                        <li className="inline-block mr-4 transition-all hover:text-gray-300">
                            <Link href="#about-me">
                                About Me
                            </Link>
                        </li>
                        <li className="inline-block mr-4 transition-all hover:text-gray-300">
                            <Link href="#projects">
                                Projects
                            </Link>
                        </li>
                        <li className="inline-block transition-all hover:text-gray-300">
                            <Link href="#blog">
                                Blog
                            </Link>
                        </li>
                    </ul>
                    <button className="bg-red-700 hover:bg-orange-700 ml-6 px-2 py-1 rounded-md">Hire me</button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
