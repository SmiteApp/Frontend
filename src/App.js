
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import GodList from "./components/Gods/GodList"
import GodSearchbar from "./components/Searchbar/GodSearchbar"
import PlayerSearchbar from './components/Searchbar/PlayerSearchbar'
import PlayerList from './components/Players/PlayerList'
import GodProfile from "./components/Gods/GodProfile"
import NavBar from "./components/nav/navbar"
import "./App.css"
import axios from "axios";
function App() {
  const [god, setGod] = useState([])
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
const [match, setMatch] = useState([])


  const onTermSubmit = (term) => {
    axios.get(`https://smite-backend.herokuapp.com/matches/${term}`)
    .then(response => {
setMatch(response.data)
      console.log(match);
     
     
    
    });
   console.log(term)
  };




  return (

<Router>
  <Switch>

  <Route exact path="/">
    <div className="App">
      
      <NavBar/>
      
    </div>
  
  </Route> 
  <Route exact path="/gods">
  <NavBar/>
    <div className="App">
      <GodSearchbar query = {query} setQuery={setQuery}/>
      <GodList query = {query} 
      god={god}
      setGod={setGod}
     
      />
      
    </div>
  
  </Route>


  
     <Route path = "/gods/:id" >
  <div>
  <NavBar/>
<GodProfile/>

</div>
  </Route>

  <Route path = "/player">
<NavBar/>
<PlayerSearchbar search = {search} setSearch={setSearch} onFormSubmit={onTermSubmit}/>
<PlayerList match = {match}/>
  </Route>
  </Switch>
  </Router>
  );
}

export default App;
