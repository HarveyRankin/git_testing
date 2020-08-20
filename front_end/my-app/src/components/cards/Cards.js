import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";
import db from "../../firebase";


const TinderCards = () => {
    
    const [people,setPeople] = useState([]);
    useEffect(()=>{
        db.collection('people').onSnapshot(snap => {
            //going to set all in people array 
            //on snapshot is alwyas listening
            setPeople(snap.docs.map( doc => doc.data()))
        })
    },[])
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