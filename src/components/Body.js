import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const handleTopRated = () => {
    const filteredTopRated = listOfRestaurants.filter(
      (restaurant) => restaurant.data.avgRating > 4
    );
    setListOfRestaurants(filteredTopRated);
    console.log("CLICKED");
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
