import React from "react";
import Heros from '../components/Heros';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContainer'

const Rooms = () => {
    return (
        <>
        <Heros>
        <Banner title='our rooms'>
        <Link to='/' className='btn-primary'>Return to home</Link>
        </Banner>
        </Heros>
        <RoomContainer/>
        </>
    );
}

export default Rooms;