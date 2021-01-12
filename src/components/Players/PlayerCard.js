import React, { useCallback } from 'react';
import './PlayerMatch.css'

import { useHistory } from 'react-router-dom';






const PlayerCard = ({ match }) => {

    console.log(match)

    return (


        <div className="MatchContainer" style = {match.win === true ? {backgroundColor: "rgb(11 11 42)"}: {backgroundColor: "rgb(31 10 10)"}} >
            <div className="matchFirst">
                <h2 className="GodName">{match.godName}</h2>
                <img src={`https://web2.hirez.com/smite/god-icons/${match.godName.split(" ").join("-").toLowerCase()}.jpg`} alt={`${match.godName}`} className="GodImg"></img>
            </div>


            <div className="matchSecond">
                <p>{match.mode}</p>
                <p>{match.length} mins</p>
            
            </div>

            <div className = "matchThird">
                <p>{match.kills} / {match.deaths} / {match.assists}</p>
            {match.win === true ? (<p className="win">Victory</p>) : <p className="loss">Defeat</p>}
            </div>
           





        </div>



    );
};
export default PlayerCard;