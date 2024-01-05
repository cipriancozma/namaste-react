import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="filter-btn">Top Rated</button>
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
