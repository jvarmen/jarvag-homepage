import React from 'react';
import Link from 'next/link';
import { GiBlackBook, GiSandsOfTime } from 'react-icons/gi';
import Divider from './Divider';

const articles = [
    { id: '1', title: 'This is my first blog entry', time: 5 },
    { id: '1', title: 'This is my first blog entry', time: 5 },
    { id: '1', title: 'This is my first blog entry', time: 5 },
    { id: '1', title: 'This is my first blog entry', time: 5 },
]

const ArticlesList = () => {
    return (
        <div className='w-full text-center py-12'>
            <h2 className='text-2xl mb-6 font-bold'>Articles Published</h2>
            <Divider color='rgb(225 29 72)' />
            <div className=''>
                <ul className='list-none text-left list-inside'>
                    {articles.map((article, idx) => (
                        <li key={idx} className='px-2 py-1 mb-2 bg-gray-200 hover:bg-gray-100 transition-all rounded drop-shadow-sm border border-gray-300'>
                            <Link href="#">
                                <a className='w-full flex justify-between items-center'>
                                    <span className='items-center flex'>
                                        <GiBlackBook className='text-xl text-black inline-block mr-2' />
                                        {article.title}
                                    </span>
                                    <span className='ml-2 items-center flex'>
                                        <GiSandsOfTime className='text-base text-black inline-block mr-1' />
                                        {`${article.time} mins read`}
                                    </span>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ArticlesList;
