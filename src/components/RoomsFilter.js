import React, {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';
// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;
    // get Unique types
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    // map to jsx
    types = types.map((item, index) => {
                     return <option key={index} value={item}>{item}</option>;
    });
    
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>;
    });
    return (
        <section className='filter-container'>
        <Title title='search rooms' />
        <form className='filter-form'>
        <div className='form-group'>
        <label htmlFor='type'>room type</label>
        <select name='type' id='type' value={type} className='form-control' onChange={handleChange} >
        { types }
        </select>
        </div>
        {/* start guest */}
        <div className='form-group'>
        <label htmlFor='capacity'>Guests</label>
        <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange} >
        { people }
        </select>
        </div>
         {/* end guest */}
        
        {/* start price */}
        <div className='form-group'>
        <label htmlFor='price'>Room Price ${price}</label>
        <input type='range' name='price' id='price' value={price} className='form-control' min={minPrice} max={maxPrice} onChange={handleChange} />
        
        </div>
         {/* end price */}
        {/* start size */}
        <div className='form-group'>
        <label htmlFor='size'>Room Size</label>
        <input type='number' name='minSize' id='size' value={minSize} className='size-input' onChange={handleChange} />
        <input type='number' name='maxSize' id='size' value={maxSize} className='size-input' onChange={handleChange} />
        </div>
        {/* end size */}
        {/* start extras */}
        <div className='form-group'>
        <div className='single-extras'>
        <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} className='size-input' onChange={handleChange} />
        <label htmlFor='breakfast'>Breakfast</label>
        </div>
        <div className='single-extras'>
        <input type='checkbox' name='pets' id='pets' checked={pets} className='size-input' onChange={handleChange} />
        <label htmlFor='pets'>pets</label>
        </div>
        </div>
        {/* end extras */}
        </form>
        </section>
    );
}