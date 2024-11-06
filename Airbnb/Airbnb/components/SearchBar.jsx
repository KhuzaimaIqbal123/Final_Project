import React, { useState } from 'react';
import './Searchbar.css';

function SearchBar() {
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        console.log("Searching for location:", location);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="location-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
        </div>
    );
}

export default SearchBar;
