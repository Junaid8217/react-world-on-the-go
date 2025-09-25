import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {

    const [visited, setVisited] =useState(false)
    
    const handleVisited = () => {
        if(visited){
            setVisited(false)
        }
        else{
            setVisited(true)

        }
        // setVisited(visited? false : true)

        //setVIsited(!visited)
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name:  {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 3000 ? "Big Country" : "Small Country"}</p>
            <button onClick ={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;