import React from "react";

import "./card.styles.css";

export const Card = (props) => (
    <div className="card-container">
        <img
            alt={props.monster.name}
            src={`https://robohash.org/${props.monster.name}?bgset=bg1`}
        />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email.toLowerCase()}</p>
    </div>
);
