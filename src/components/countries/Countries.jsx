import React, { use, useState } from 'react';  
import Country from '../Country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) =>{
        console.log("handle visted country clivked", country)
        const newVistedCountries =[...visitedCountries, country]
        setVisitedCountries(newVistedCountries)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    
    return (
        <div >
            <h1>In the Countries: {countries.length}</h1>
            <h2>Total Country visited: {visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>

                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries ={handleVisitedCountries}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;