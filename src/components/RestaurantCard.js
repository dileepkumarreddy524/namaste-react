import { RES_IMAGES } from '../utils/constants';
const stylecard = {
    backgroundColor: "f0f0f0",
};

const RestaurantCard = (props) => {
    const {resInfo} = props;
    const {info} = resInfo;
    return (
        <div className='res-card' style={stylecard}>
            <div className='res-logo-container'><img className="res-logo" alt="res-logo" src={RES_IMAGES + info.cloudinaryImageId}/></div>
            <h3>{info.name}</h3>
            <h4>{info.cuisines ? info.cuisines.join(", ") : ''}</h4>
            <h4>{info.avgRating ? info.avgRating : 4.0} stars</h4>
            <h4>{info.sla && info.sla.slaString ? info.sla.slaString : ""}</h4>
        </div>
    );
};

export default RestaurantCard;