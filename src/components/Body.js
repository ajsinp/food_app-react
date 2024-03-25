import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Body = () => {
  const { loggedInUser, setUserName } = useContext(UserContext); 
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restaurants) {
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!onlineStatus) {
    return <h1>Looks like you're offline! Please check your internet connection</h1>;
  }

  const handleSearch = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
    setFilteredRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="m-4 px-4 py-2 bg-green-100 rounded-lg" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="search p-4 m-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={handleTopRated}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="search p-4 m-4 flex items-center">
          <label>UserName:</label>
          <input className="border-black p-2 " value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
