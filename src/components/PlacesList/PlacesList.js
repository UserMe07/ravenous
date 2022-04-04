import React from 'react';
import './PlacesList.css';
import Places from '../Places/Places';

class PlacesList extends React.Component {
    render() {
        return (
            <div className="PlacesList">
                <Places/> 
                <Places/>
                <Places/>
                <Places/>
                <Places/>
                <Places/>
            </div>
        )
    }
};

export default PlacesList;