import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo"/>
            </div>
            <div className="title-container">
                <h2 className="title">Harika Food Express</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}


const stylecard = {
    backgroundColor: "f0f0f0",
};

const resCards =[
    {
        id: 1,
        name: "Harika Foods",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/52a78a0428c583afd717832ad9baffb9",
        cuisines: "Biryani, South indian, Asian",
        rating: "4.5 stars",
        deliveryTime: "30 minutes"
    },
    {
        id: 2,
        name: "KFC",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/12/12/8481222b-9eea-4e0a-bbb0-7df14f9e6bd1_74a45606-5f21-43e6-9246-7c1a21635db3.jpg",
        cuisines: "Chinese, Biryani, South indian, Asian",
        rating: "4.3 stars",
        deliveryTime: "40 minutes"
    },
    {
        id: 3,
        name: "Biriyani Paradise",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/irnwr59vlrmciau11or0",
        cuisines: "Seafood, South indian, Asian",
        rating: "4.5 stars",
        deliveryTime: "50 minutes"
    },
    {
        id: 4,
        name: "Chicken County Restaurant",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/o5x0ovrs7pu30dz9hidl",
        cuisines: "Biryani, North indian, Asian",
        rating: "4.1 stars",
        deliveryTime: "20 minutes"
    },
    {
        id: 5,
        name: "Dominos",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/8117c11573933446ed06d525314ed7f9",
        cuisines: "Pizzas, Desserts, Beverages",
        rating: "4.2 stars",
        deliveryTime: "15 minutes"
    },
    {
        id: 6,
        name: "Reddy's Kitchen",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/2467dee2156975b7cbb286834ce7855f",
        cuisines: "Biryani, South indian",
        rating: "4.9 stars",
        deliveryTime: "30 minutes"
    },
    {
        id: 7,
        name: "Kritunga Restaurant",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/tscwxqko4pabme8gj2ty",
        cuisines: "Biryani, South indian, Asian",
        rating: "4.0 stars",
        deliveryTime: "45 minutes"
    },
    {
        id: 8,
        name: "Meghana Foods",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/9cbaf8a7e38a46518a7f27288e2adcd5",
        cuisines: "Biryani, South indian, Asian",
        rating: "4.5 stars",
        deliveryTime: "30 minutes"
    },
    {
        id: 9,
        name: "Rollsking",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/6/23/cc8a9ced-51f0-40b1-8adc-503f7bfaa282_ac20af3a-5900-40c6-9789-ffa0749584b1.jpeg",
        cuisines: "Biryani, South indian, Asian",
        rating: "3.8 stars",
        deliveryTime: "35 minutes"
    },
    {
        id: 10,
        name: "Kabab Korner",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/nx6apuydyjffdx9fcg7f",
        cuisines: "Biryani, South indian, Asian",
        rating: "3.5 stars",
        deliveryTime: "30 minutes"
    },
];


const RestaurantCard = (props) => {
    const {resInfo} = props;
    const {name, logo, cuisines, rating, deliveryTime} = resInfo;
    return (
        <div className='res-card' style={stylecard}>
            <div className='res-logo-container'><img className="res-logo" alt="res-logo" src={logo}/></div>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resCards.map(restaurant => <RestaurantCard key={restaurant.id} resInfo={restaurant}/>)
                }
            </div>
        </div>
    );
}
const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);