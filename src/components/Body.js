import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  const handleTopRated = () => {
    const mappedTopRated = listOfRestaurants.map(
      (restaurant) =>
        restaurant?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );

    const allRestaurants = mappedTopRated
      .filter((array) => array.length > 0)
      .flat()
      .filter((res) => res?.info?.avgRating > 4);

    setListOfRestaurants(allRestaurants);
  };
  console.log({ listOfRestaurants });

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" />
          <button>Search</button>
        </div>
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
