import React from "react";
import Heros from '../components/Heros';
import Banner from '../components/Banner';
import Services from '../components/Services';
import { FeaturedRoom } from '../components/FeaturedRoom';
import { Link } from 'react-router-dom';
import Button from '../components/StyledHero'

const Home = () => {
    return (
        <>
        <Heros>
        <Banner title="luxirous rooms" subtitle="deluxe rooms starting at $299">
        <Link to='/rooms' className='btn-primary'>our rooms</Link>
        </Banner>
        </Heros>
        <Services />
        <FeaturedRoom />
        <Button>hello</Button>
        </>
    );
}

export default Home;