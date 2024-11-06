// Categories.js
import React from 'react';
import './Categories.css';

function Categories() {
    const categories = ['Beachfront', 'Cabins', 'Trending', 'Mountains', 'City', 'Countryside', 'Lakeside', 'Luxury', 'Budget'];

    return (
        <div className="categories">
            {categories.map((category, index) => (
                <button key={index} className="category-button">
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Categories;
