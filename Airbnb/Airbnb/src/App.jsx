import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ListingCard from "../components/ListingCards";

function App() {
    const property = {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOA59hxXnn5bZ5TqDYCgEhv0gZ-Fv-uShzlA&s',
        title: 'Beautiful Beach House',
        type: 'Entire home',
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        price: 150,
        rating: 4.8
    };

    return (
        <div>
            <Navbar />
            <SearchBar />
            <Categories />
            <div className="App">
                <ListingCard property={property} />
            </div>            
        </div>
    );
}

export default App;
