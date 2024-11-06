// Categories.js
import React, { useState } from 'react';
import './Categories.css';

function Categories() {
    const categories = ['Beachfront', 'Cabins', 'Trending', 'Mountains', 'City', 'Countryside', 'Lakeside', 'Luxury', 'Budget'];
    const [activeCategory, setActiveCategory] = useState('');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        console.log("Selected category:", category); // You can add functionality here for filtering based on category
    };

    return (
        <div className="categories">
            {categories.map((category, index) => (
                <button
                    key={index}
                    className={`category-button ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Categories;
