import React from "react";
import "./Searchbar.css"

function PlayerSearchbar({ search, setSearch, onFormSubmit }) {


    const handleInputChange = event => {
        setSearch(event.target.value);
    };

   const save = (e) => {
        e.preventDefault();
       onFormSubmit(search)
      }
    return (
        <div >

            <form className="searchbar" onSubmit={save}>

                <input type="text"
                    onChange={handleInputChange}
                   
                    value={search}
                    name="name"
                    id="name"
                    tabIndex="0"
                    className="prompt"
                    placeholder="Search Players..."
                    autoComplete="off" />
<button type="submit">Search</button>

            </form>
           
               
            
        </div>
    )
}

export default PlayerSearchbar