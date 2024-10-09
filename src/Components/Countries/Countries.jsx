import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState({})
    const [visitedCountry, setVisitedCountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const handleVisitedCountry = country => {
        const newVisitedCountries = [...visitedCountry,country]
        setVisitedCountry(newVisitedCountries)
    }
    return (
        <section>
            <div>
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>
                        )
                    }
                </ul>
            </div>
            <div className="country-container">
            {
                    countries.map(country => <Country key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}></Country>)
                }
            </div>
        </section>
    );
};

export default Countries;