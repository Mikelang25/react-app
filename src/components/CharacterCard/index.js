import React from "react";


function CharacterCard(props){
    return (
        <div>
            <img alt={props.name} src={props.image}/>
            {props.name}
        </div>
    );    
}

export default CharacterCard;