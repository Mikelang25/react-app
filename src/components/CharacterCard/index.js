import React from "react";
import "./index.css";

const styles = {
    containerStyle: {
      float: "left",
      margin:"20px",
      border: "3pt solid black",
      width:"205px",
      height:"205px",
      textAlign: "center",
      borderRadius:"5px",
      cursor:"pointer",
      backgroundColor:"white",
      boxShadow: "10px 5px 5px black"
    },
    image:{
        marginTop:"3px"
    }
  };

function CharacterCard(props){
    return (
        <div className="containerStyle" style={styles.containerStyle} onClick={() => props.markedSelected(props.id)}>
            <img style={styles.image} alt={props.name} src={props.image} id={props.id}/>
        </div>
    );    
}

export default CharacterCard;