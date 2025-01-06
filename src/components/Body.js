import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './ShimmerUi';
import { Link } from 'react-router';

const Body = () => {
    // state variables
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [fetchedRestaurants, setFetchedRestaurants] = useState([]); // Store the original list
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const fetchedRestaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setFetchedRestaurants(fetchedRestaurants); // Store the original list
        setListOfRestaurants(fetchedRestaurants); // Display the original list
        console.log(fetchedRestaurants);
    };

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    const handleSearch = (e) => {
        const inputText = e.target.value;
        setSearchText(inputText); // Update search text

        if (inputText.trim() === "") {
            // If search text is empty, reset to the original full list
            setListOfRestaurants(fetchedRestaurants);
        } else {
            // Filter based on the search text
            const filteredRestaurant = fetchedRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(inputText.toLowerCase());
            });
            setListOfRestaurants(filteredRestaurant);
        }
    };

    const handleTopRatedFilter = () => {
        const filterRestaurants = listOfRestaurants.filter((key) => {
            return key.info.avgRating ? Number(key.info.avgRating) > 4.5 : false;
        });
        setListOfRestaurants(filterRestaurants);
    };

    return (
        <div className="body">
            <div className="filter">
                <div className='search'>
                    <input
                        type="text"
                        className='search-box'
                        value={searchText}
                        placeholder="Search for restaurants or cuisines..."
                        onChange={handleSearch} // Call handleSearch while typing
                    />
                    {/* You can still have a button for manual searching if you prefer */}
                    <button className="search-btn" onClick={handleSearch}>Search</button>
                </div>
                <button className='filter-btn' onClick={handleTopRatedFilter}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <Link className="restaurant-link" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resInfo={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
