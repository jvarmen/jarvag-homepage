import React from 'react';
import Divider from './Divider';

const AboutMe = () => {
    return (
        <div className='w-full text-center py-12'>
            <h2 className='text-2xl font-bold'>About Me</h2>
            <Divider color='rgb(2 132 199)' />
            <div className='m-auto mb-6 w-48 h-48 rounded-full bg-gray-200'></div>
            <p className='text-justify'>
                Software Ingineer from Colombia and React Developer with 5+ years experience at top Medellín Valley Companies.
                <br />
                Vestibulum nec blandit leo. Nunc commodo, nulla non feugiat sodales, eros est egestas nunc, at molestie nisl ipsum eget metus. Nam placerat lacus sed nibh blandit volutpat. Aenean condimentum venenatis eros. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet mauris lectus. In hac habitasse platea dictumst. Nunc sed mi id nisl commodo ullamcorper sit amet et quam.
            </p>
        </div>
    );
};

export default AboutMe;
