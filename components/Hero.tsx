import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Divider from './Divider';
import SocialIcons from './SocialIcons';

const Hero = () => {
    return (
        <div className='w-full'>
            <div className={`${styles.bgWrap} ${styles.bgOverlay}`}>
                <div className='w-full h-full bg-black-900 opacity-25'></div>
            </div>
            <div className={`${styles.bgWrap}`}>
                {/* <Image
                    alt="LoFi Avatar"
                    src="/lofi-avatar.png"
                    width={1100}
                    height={500}
                    layout={'responsive'}
                    objectFit={'contain'}
                    objectPosition={'center'}
                    quality={100}
                /> */}
            </div>
            <div className="w-full m-auto items-center text-center my-12">
                <p className="text-2xl uppercase text-orange-700 font-medium">
                    Hi There
                </p>
                <p className="text-5xl capitalize text-white mb-4">
                    I'm Wolfram Alpha
                </p>
                <Divider color='rgb(194 65 12)' />
                <p className="text-2xl capitalize text-white mb-4">
                    Full Stack Developer • Public Speaker • Coffee Drinker
                </p>
                <SocialIcons size='text-4xl' />
            </div>
        </div>
    );
};

export default Hero;
