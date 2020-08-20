import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";



const TinderCards = () => {
    
    const [people,setPeople] = useState([{
        name:"Steve Jobs",
        url:'https://wallsdesk.com/wp-content/uploads/2016/11/Steve-Jobs-High-Quality-Wallpapers.jpg'
    },{
        name:'Mark Zuckerberg',
        url:'https://cdn.cnn.com/cnnnext/dam/assets/200109164024-01-mark-zuckerberg-1023-file-super-tease.jpg'
    }]);

    return(
        <div>
            <div className="cards__container">
            {people.map(person => {
                return (
                    <TinderCard className="swipe" key={person.name} preventSwipe={['up','down']}>
                        <div
                        style={{backgroundImage: `url(${person.url})`}} 
                        className="card">
                        <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                )
            })}
            </div>
            
        </div>
    )
}

export default TinderCards;