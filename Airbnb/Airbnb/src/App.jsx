// App.js
import './App.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import ListingCard from '../components/ListingCards';

function App() {
    const [listings, setListings] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    // Fetch mock listing data on component mount
    useEffect(() => {
        const fetchListings = async () => {
            // Simulating an API call with mock data
            const mockData = [
                { id: 1, image: 'https://via.placeholder.com/300', title: 'Beach House', type: 'Entire home', guests: 4, bedrooms: 2, bathrooms: 1, price: 150, rating: 4.8 },
                { id: 2, image: 'https://via.placeholder.com/300', title: 'Mountain Cabin', type: 'Cabin', guests: 6, bedrooms: 3, bathrooms: 2, price: 200, rating: 4.9 },
                { id: 3, image: 'https://via.placeholder.com/300', title: 'Mountain Cabin', type: 'Cabin', guests: 6, bedrooms: 3, bathrooms: 2, price: 200, rating: 4.9 },
                { id: 4, image: 'https://via.placeholder.com/300', title: 'Mountain Cabin', type: 'Cabin', guests: 6, bedrooms: 3, bathrooms: 2, price: 200, rating: 4.9 },
                { id: 5, image: 'https://via.placeholder.com/300', title: 'Mountain Cabin', type: 'Cabin', guests: 6, bedrooms: 3, bathrooms: 2, price: 200, rating: 4.9 },
                { id: 6, image: 'https://via.placeholder.com/300', title: 'Mountain Cabin', type: 'Cabin', guests: 6, bedrooms: 3, bathrooms: 2, price: 200, rating: 4.9 },

                // Add more mock listings as needed
            ];
            setListings(mockData);
        };
        
        fetchListings();
    }, []);

    // Filter listings based on the selected category
    const filteredListings = selectedCategory
        ? listings.filter((listing) => listing.type === selectedCategory)
        : listings;

    return (
        <Router>  {/* Wrap the entire application in Router */}
            <div>
                <Navbar />
                <SearchBar />
                <Categories onSelectCategory={(category) => setSelectedCategory(category)} />
                <div className="App">
                    <Routes>
                        {/* Define routes for different pages */}
                        <Route 
                            path="/" 
                            element={
                                <div className="listings">
                                    {filteredListings.map((property) => (
                                        <ListingCard key={property.id} property={property} />
                                    ))}
                                </div>
                            }
                        />
                        <Route 
                            path="/experiences" 
                            element={
                                <div className="listings">
                                    {/* Add any filtering or other content specific to experiences */}
                                    {filteredListings.map((property) => (
                                        <ListingCard key={property.id} property={property} />
                                    ))}
                                </div>
                            }
                        />
                        <Route 
                            path="/online-experiences" 
                            element={
                                <div className="listings">
                                    {/* Add any filtering or other content specific to online experiences */}
                                    {filteredListings.map((property) => (
                                        <ListingCard key={property.id} property={property} />
                                    ))}
                                </div>
                            }
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
