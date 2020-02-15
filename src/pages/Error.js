import React from "react";
import Heros from '../components/Heros';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Heros>
        <Banner title='404' subtitle='page not found'>
        <Link to='/' className='btn-primary'>Return to home</Link>
        </Banner>
        </Heros>
    );
}

export default Error;