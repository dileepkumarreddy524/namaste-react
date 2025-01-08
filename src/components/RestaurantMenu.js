import Shimmer from "./ShimmerUi";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo===null){
        return <Shimmer />
    }
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3><p>{cuisines.join(", ")} - {costForTwoMessage}</p></h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - {'Rs.'}{Number(item.card.info.defaultPrice)/100 || Number(item.card.info.price)/100}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu