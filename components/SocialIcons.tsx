import React from 'react';
import Link from 'next/link';
import { FaPaperPlane } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedinOption } from 'react-icons/gr';

type Props = {
    size: string
};

const SocialIcons = (props: Props) => {
    return (
        <div className={`${props.size} mx-auto max-w-fit grid gap-6 grid-cols-3 text-white`}>
            <a href="#" target='_blank'>
                <GrLinkedinOption className='inline-block hover:opacity-50 transition-all cursor-pointer' />
            </a>
            <a href="#" target='_blank'>
                <GoMarkGithub className='inline-block hover:opacity-50 transition-all cursor-pointer' />
            </a>
            <a href="mailto:vargasjmen@gmail.com" target="_blank" rel="noreferrer">
                <FaPaperPlane className='inline-block hover:opacity-50 transition-all cursor-pointer' />
            </a>
        </div>
    );
};

export default SocialIcons;
