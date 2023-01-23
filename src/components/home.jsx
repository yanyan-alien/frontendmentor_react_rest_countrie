import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import code from "../functions/countrycode";

function CountryCard({country}) {
    var country_code = code(country);
    return (
        <div className="col">
            <div className="card country_card" value={country_code} >
                <Link to={`detail/${country_code}`} className="text-decoration-none" state={country} >
                    <img src={country['flags']['png']} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <div className="country-name card-title">{country['name']['common']}</div>
                        <div className="population">Population: <span>{country.population.toLocaleString('en-US')} </span></div>
                        <div className="region">Region: <span> {country.region} </span></div>
                        <div className="capital">Capital: <span> {country.capital}</span></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

function SkeletonCards() {
    return (
        <>
        <div className="col">
            <div className="card country_card" >
                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                </svg>
                <div className="card-body">
                    <div className="country-name card-title placeholder-glow">
                        <span className="placeholder col-8" ></span>
                    </div>
                    <p className="card-text placeholder-glow">
                        <span className="population placeholder col-7"></span>
                        <span className="region placeholder col-7"></span>
                        <span className="capital placeholder col-7"></span>
                    </p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card country_card" >
                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                </svg>
                <div className="card-body">
                    <div className="country-name card-title placeholder-glow">
                        <span className="placeholder col-8" ></span>
                    </div>
                    <p className="card-text placeholder-glow">
                        <span className="population placeholder col-7"></span>
                        <span className="region placeholder col-7"></span>
                        <span className="capital placeholder col-7"></span>
                    </p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card country_card" >
                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                </svg>
                <div className="card-body">
                    <div className="country-name card-title placeholder-glow">
                        <span className="placeholder col-8" ></span>
                    </div>
                    <p className="card-text placeholder-glow">
                        <span className="population placeholder col-7"></span>
                        <span className="region placeholder col-7"></span>
                        <span className="capital placeholder col-7"></span>
                    </p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card country_card" >
                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                </svg>
                <div className="card-body">
                    <div className="country-name card-title placeholder-glow">
                        <span className="bg-secondary placeholder col-8" ></span>
                    </div>
                    <p className="card-text placeholder-glow">
                        <span className="bg-secondary population placeholder col-7"></span>
                        <span className="bg-secondary region placeholder col-7"></span>
                        <span className="bg-secondary capital placeholder col-7"></span>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

function CreateCards({loading, data}) {
    if (!loading) {
        const cards = data.map( (country) => {
            return <CountryCard country={country} key={country.altSpellings[0]}/>
        })
        return cards
    }
    else {
        return <SkeletonCards/>
    }
}

function Home() {
    const [cardState, setCardState] = useState({loading:true, data: null})
    const [apiUrl, setApiUrl] = useState(`https://restcountries.com/v3.1/all`)

    function filter(el) {
        if (el.target.value === 'all' || (el.target.id==='search-box' && el.target.value === '')) setApiUrl(`https://restcountries.com/v3.1/all`)
        else if (el.target.id==='search-box' && el.target.value !== '') setApiUrl(`https://restcountries.com/v3.1/name/${el.target.value}`)
        else setApiUrl(`https://restcountries.com/v3.1/region/${el.target.value}`)
    }

    useEffect( () => {
        fetch(apiUrl)
        .then((res) => res.json())
        .then(countries => {
            setCardState({loading:false, data:countries})
        })
    }, [apiUrl])



    return (
        <div className="container" id="home">
        <div className="row justify-content-between gy-3" id="functions-container">
            <input className="form-control" placeholder="Search for a country" id="search-box" onKeyUp={filter}/>
            <select name="region-select" id="region-select" className="form-select" aria-label="Region Filter" onChange={filter}>
                <option value="all" > Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 gy-4" id="country-container" >
            <CreateCards loading={cardState.loading} data={cardState.data} />
        </div>
    </div>
    )
}

export default Home