import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Divider from './Divider';

const projs: project[] = [
    {
        "id": 1,
        "name": "Metaverse Space",
        "description": "This is a short description about project functions",
        "category": ["other"]
    },
    {
        "id": 2,
        "name": "Mobile Application",
        "description": "This is a short description about project functions",
        "category": ["technical"]
    },
    {
        "id": 3,
        "name": "Livestock Management",
        "description": "Mobile aplication for cattle management",
        "category": ["business"]
    },
    {
        "id": 4,
        "name": "FMEA Builder",
        "description": "This is a short description about project functions",
        "category": ["technical"]
    },
    {
        "id": 4,
        "name": "FMEA Builder",
        "description": "This is a short description about project functions",
        "category": ["technical"]
    },

]

const categories = [
    {
        "id": 1,
        "name": "All Projects",
        "slug": ""
    },
    {
        "id": 2,
        "name": "Techinal Projects",
        "slug": "technical"
    },
    {
        "id": 3,
        "name": "Business Projects",
        "slug": "business"
    },
    {
        "id": 4,
        "name": "Other Projects",
        "slug": "other"
    },
]

export interface project {
    id: number
    name: string,
    description: string,
    category: [string]
}

const ProjectsList = () => {
    const [filter, setFilter] = useState('');

    useEffect(() => {
        console.log(filter);
    }, [filter]);

    return (
        <div className='w-full py-12 min-h-1/2 text-center text-white transition-all'>
            <h2 className='text-2xl font-bold'>Personal Projects</h2>
            <Divider color='rgb(234 179 8)' />
            <div className='w-fit m-auto mb-6 flex text-center items-center max-h-12 overflow-auto snap-proximity snap-x'>
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        onClick={() => setFilter(cat.slug)}
                        className={`${filter === cat.slug ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-900'} transition-allnap-center min-w-fit mr-2 px-3 py-1 font-medium text-sm rounded-full cursor-pointer hover:bg-gray-600 hover:text-gray-200 drop-shadow-md`}>
                        {cat.name}
                    </div>
                ))}
            </div>
            <div className='grid grid-cols grid-cols-1 md:grid-cols-2 justify-between gap-4'>
                {projs.filter((project: project) =>
                    project.category.some((cat) => cat.includes(filter)))
                    .slice(0, 4)
                    .map((proj: project, idx: number) => (
                        <Link key={idx} href={`/project/${encodeURIComponent(proj.id)}`} passHref>
                            <div className='w-full p-4 bg-gray-800 hover:bg-gray-700 cursor-pointer transition-colors duration-300 border-2 rounded-lg border-none text-left drop-shadow-md'>
                                <div className='text-xl font-bold text-yellow-200'>{proj.name}</div>
                                <div className='text-sm mt-2'>{proj.description}</div>
                            </div>
                        </Link>
                    ))}
            </div>
            {
                projs.filter((project: project) =>
                    project.category.some((cat) => cat.includes(filter))).length > 4 ? (
                    <button className='mt-5 text-base bg-yellow-600 hover:bg-yellow-700 transition-all px-6 py-1 rounded-full drop-shadow-md'>
                        Ver más
                    </button>
                ) : ''}
        </div>
    );
};

export default ProjectsList;
