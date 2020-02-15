import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';

function RoomContainer({context}) {
    const { loading, sortedRooms, rooms} = context;
    return (
            <div>
            Hello 
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
            </div>
    );
}
export default withRoomConsumer(RoomContainer);
/*import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomConsumer } from '../context';


export default function RoomContainer() {
    return (
        <RoomConsumer>
        {
            (value) => {
            const {loading, sortedRooms, rooms} = value;
            return (
            <div>
            Hello 
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
            </div>
            );
        }
        }
        </RoomConsumer>
        
    );
}
*/