import React, {useCallback} from 'react';
import "./GodCard.css"
import {Link} from "react-router-dom"
import {useHistory} from 'react-router-dom';






const GodCard = ({ gods, setGodId}) => {
  // const handleClick = () => {
     
  //   console.log("Clicked", gods.Name);
  //   setGodId(gods)
    
  // }

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(`/gods/${gods.Name.toLowerCase().split(" ").join("")}`), [gods, history]);
  return (


    <div className="GodContainer" onClick={handleOnClick}> 
      <div className = "GodTextContainer">

        <h2 className="GodName">{gods.Name}</h2>
        <p className="GodName">{gods.Title}</p>
      </div>
      <div>

        <img src={gods.godIcon_URL} alt={`${gods.Name}`} className="GodImg"></img>
      </div>


    </div>
    


  );
};
export default GodCard;