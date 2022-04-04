import React from 'react';
import './Places.css';

let place = {
    imageSrc: 'https://www.pexels.com/pl-pl/zdjecie/liscie-na-chodniku-obok-ogrodzenia-1645840/',
    name: 'Saska Kepa',
    district: 'Praga Poludnie',
    city: 'Warsaw',
    category: 'Places',
    rating: 4.5
}; 

class Places extends React.Component{
    render() {
        return (
            <div className="Places">
                <div className="image-container">
                    <img src={place.imageSrc} alt=''/>
                </div>
                <h2>{place.name}</h2>
                <div className="Places-info">
                    <div className="Places-location">
                        <p>{place.district}</p>
                        <p>{place.city}</p>
                    </div>
                    <div className="Places-rating">
                        <h3 className="rating">{place.rating} stars</h3>
                    </div>
                </div>
            </div>
        )
    }
}; 

export default Places;