// ListingCard.js
import React from 'react';
import './ListingCard.css';

function ListingCard({ property }) {
    return (
        <div className="listing-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-details">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-type">{property.type}</p>
                <p className="property-info">
                    {property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
                </p>
                <p className="price-per-night">${property.price} / night</p>
                <p className="rating">★ {property.rating}</p>
            </div>
        </div>
    );
}

export default ListingCard;
