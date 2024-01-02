/*
import { restaurantList } from "../Constants";

import {RestaurantCard} from "../RestaurantCard";



const Body=()=>{
    
    return(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value=""
                   />
            <button>Search</button>

        </div>
        <div className="restaurant-list">
           {restaurantList.map((restaurant)=>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;

*/
// 44567890-35467890-fghjkl;xcvbnm,.ghjk
/*

import { restaurantList } from "../Constants";

import {RestaurantCard} from "../RestaurantCard";
const Body=()=>{
    
    return(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value="hhhghxhj"
                   />
            <button>Search</button>

        </div>
        <div className="restaurant-list">
           {restaurantList.map((restaurant)=>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;
*/
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

/*
import { restaurantList } from "../Constants";

import {RestaurantCard} from "../RestaurantCard";
const Body=()=>{
    // const searchTxt="KFC"
    let searchTxt="KFC"
    return(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value={searchTxt}
                   
                   />
            <button>Search</button>

        </div>
        <div className="restaurant-list">
           {restaurantList.map((restaurant)=>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;

*/

// ###########################################

/*
import { restaurantList } from "../Constants";

import {RestaurantCard} from "../RestaurantCard";
const Body=()=>{
    // const searchTxt="KFC"
    let searchTxt="KFC"
    return(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value={searchTxt}
                //    onChange={(e)=>console.log("clicked")}
                   onChange={(e)=>console.log(e.target.value)}
                // onChange={(e)=>searchTxt=e.target.value}
                   />
            <button>Search</button>

        </div>
        <div className="restaurant-list">
           {restaurantList.map((restaurant)=>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;
*/

// ##########################################################
/*

import { restaurantList } from "../Constants";
import {RestaurantCard} from "../RestaurantCard";
import { useState } from "react";
const Body=()=>{
    const[searchTxt,setSearchTxt]=useState("KFC")
    return(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value={searchTxt}
                
                onChange={(e)=>setSearchTxt(e.target.value)}
                   />
            <button>Search</button>{searchTxt}

        </div>
        <div className="restaurant-list">
           {restaurantList.map((restaurant)=>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;

*/


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*
import { restaurantList } from "../Constants";
import {RestaurantCard} from "../RestaurantCard";
import { useState } from "react";

const Body=()=>{
    
    const[searchClicked,setSearchClicked]=useState("false")
    return(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value=""
                
                
                   />
            //  <button onClick={(e)=>setSearchClicked("true")}>Search</button> 
            <button onClick={()=>{

            
                if(searchClicked==="true"){
                    setSearchClicked("false")
                }
                else{
                    setSearchClicked("true")
                }
             } }>Search</button>


        </div>
        <h1>{searchClicked}</h1>
        <div className="restaurant-list">
           {restaurantList.map((restaurant)=>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;

*/

// ######################################################


import { restaurantList } from "../Constants";
import {RestaurantCard} from "../RestaurantCard";
import { useState } from "react";

 function filterData(searchTxt,restaurants){
    const filterData=restaurants.filter((restaurant)=>
     restaurant.name.includes(searchTxt)
     );
     return filterData;
 }
const Body=()=>{
    const[searchTxt,setSearchTxt]=useState("KFC")
    const[restaurants,setRestaurants]=useState(restaurantList)
    const[searchClicked,setSearchClicked]=useState("false")
    return(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value={searchTxt}
                   onChange={(e)=>{
                    setSearchTxt(e.target.value)
                   }}
                
                
                   />
           
            <button onClick={()=>{
              //need to filter data

              const data=filterData(searchTxt,restaurants)
            //   update state-restaurants
            setRestaurants(data)

            
               
             } }>Search</button>


        </div>
        <h1>{searchClicked}</h1>
        <div className="restaurant-list">
           {restaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;



