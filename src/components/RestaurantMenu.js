import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const [restaurantInfo, setRestaurantInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=117397&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
    setRestaurantInfo(json.data);
  };

  if (restaurantInfo.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const dollars = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 2,
  });
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {" "}
        {cuisines.join(", ")} - {dollars.format(costForTwo / 10000)}
      </h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
}

export default RestaurantMenu;
