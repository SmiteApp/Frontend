import React, { useEffect } from "react";
import axios from "axios"
import GodCard from "./GodCard"




export default function GodList({query, god, setGod, }) {


  


  useEffect(() => {
    
    axios.get('https://smite-backend.herokuapp.com/gods')
      .then(response => {
        console.log(response.data);
        const characters = response.data.filter(character =>
          character.Name.toLowerCase().includes(query.toLowerCase())
        );
       
        setGod(characters);
      });
    }, [query, setGod]);





  return (

    <div className="GodMainDiv">

      {god.map(gods => {
        

        return <GodCard gods={gods} key={gods.id} />
        
        
      })}
    </div>

  )
}


