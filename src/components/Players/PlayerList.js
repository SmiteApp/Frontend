import React, { useEffect } from "react";
import Playercard from './PlayerCard'
import axios from "axios"





export default function PlayerList({match }) {



console.log(match.matches)
    
  if (!match.matches) {
    return <div>Loading god information...</div>;
  }
return (

    <div className="matchDiv">

      {match.matches.map(match => {
        

        return <Playercard match={match} key={match.id} />
        
        
      })}
    </div>

  )

   
    }

 
   


