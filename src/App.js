
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import GodList from "./components/Gods/GodList"
import Searchbar from "./components/Gods/Searchbar"
import GodProfile from "./components/Gods/GodProfile"
import NavBar from "./components/nav/navbar"
import "./App.css"
import axios from "axios";
function App() {
  const [god, setGod] = useState([])
 
  const [query, setQuery] = useState("");



 




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
      <Searchbar query = {query} setQuery={setQuery}/>
      <GodList query = {query} 
      god={god}
      setGod={setGod}
     
      />
      
    </div>
  
  </Route>

  
     <Route path = "/gods/:id" >
  <div>
<GodProfile/>

</div>
  </Route>
  </Switch>
  </Router>
  );
}

export default App;
