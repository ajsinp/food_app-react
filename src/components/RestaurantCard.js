import { CDN_URL } from "../Utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;

    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo, 
      sla,
    } = resData?.info;
  
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
        <img
        className="rounded-lg"  
        alt="res-logo" 
        src={CDN_URL + cloudinaryImageId} 
         />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{costForTwo}</h5>
        <h5>{sla.slaString}</h5>   
      </div>
    );
  };
  export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
       <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
       </div>
    }
  }
  export default RestaurantCard;