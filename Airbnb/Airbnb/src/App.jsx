import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

function App() {
    return (
        <div>
            <Navbar />
            <SearchBar/>
            <Categories/>
            {/* Other components or content */}
        </div>
    );
}

export default App;
