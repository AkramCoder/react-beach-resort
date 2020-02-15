import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

class Services extends Component {
    state = {
        services: [
            {
                icon:<FaCocktail />,
                title:'free cocktails',
                info:'some info here some info here some info here some info here'
            },
            {
                icon:<FaHiking />,
                title:'endless hiking',
                info:'some info here some info here some info here some info here'
            },
            {
                icon:<FaShuttleVan />,
                title:'free shuttle',
                info:'some info here some info here some info here some info here'
            },
            {
                icon:<FaBeer />,
                title:'Strongest beer',
                info:'some info here some info here some info here some info here'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
            <Title title="services" />
            <div className='services-center'>
            { this.state.services.map((item, index) => {
            return (
                <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                </article>
            );
        })}
            </div>
            </section>
        );
    }
}

export default Services;