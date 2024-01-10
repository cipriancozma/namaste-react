import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restaurants);
    setDisplayedRestaurants(restaurants);
  };

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  const handleTopRated = () => {
    const filteredTopRatedRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4
    );
    setDisplayedRestaurants(filteredTopRatedRestaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setDisplayedRestaurants(filteredRestaurants);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated
        </button>
      </div>
      <div className="restaurant-container">
        {displayedRestaurants &&
          displayedRestaurants.map((res) => (
            <RestaurantCard key={res?.info?.id} restaurant={res} />
          ))}
      </div>
    </div>
  );
};

export default Body;
