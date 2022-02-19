import React from 'react';

type Props = {
    color: string
};

const Divider = (props: Props) => {
    return <div className={`mx-auto h-1 w-24 mt-2 mb-6 rounded`} style={{ backgroundColor: props.color }} ></div>;
};

export default Divider;
