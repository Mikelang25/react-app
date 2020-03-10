import React from "react";

const styles = {
    containerStyle: {
      float: "left",
      margin:"20px",
      border: "1pt solid black",
      width:"205px",
      height:"205px",
      textAlign: "center",
      borderRadius:"5px"
    },
    image:{
        marginTop:"3px"
    }
  };

function CharacterCard(props){
    return (
        <div style={styles.containerStyle} onClick={() => props.markedSelected(props.id)}>
            <img style={styles.image} alt={props.name} src={props.image} id={props.id}/>
        </div>
    );    
}

export default CharacterCard;