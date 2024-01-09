const RestaurantCard = ({ restaurant }) => {
  const { id, avgRating, name, cuisines, sla, cloudinaryImageId } =
    restaurant?.info;
  return (
    <div className="restaurant-card" key={id}>
      <img
        alt={`Logo of ${name}`}
        className="restaurant-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
