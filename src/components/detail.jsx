import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {FaArrowLeft} from 'react-icons/fa';

function SkeletonDetail() {
    return (
        <div className="container" id="details">
        <div className="d-flex">
            <button className="btn back-btn custom-btn disabled placeholder">
                {/* <i className="fa-solid fa-arrow-left"></i>
                Back */}
            </button>
        </div>
        <div className="wrapper ">
            <div className="row">
                <div className="image-container col-md-6 col-12" >
                    <svg className="" width="100%" height="320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#868e96"></rect>
                    </svg>
                </div>
                <div className="text_wrapper col-sm-12 col-md placeholder-glow">
                    <h2 className="country_name col-6"><span className="col-10 placeholder bg-secondary"></span></h2>
                    <div className="country_info row row-cols-1 gy-4 row-cols-md-2">
                        <div className="col">
                            <p className="">
                                <span className="bg-secondary col-12 native_name placeholder"></span>
                                <span className="bg-secondary col-12 population placeholder"></span>
                                <span className="bg-secondary col-12 region placeholder"></span>
                                <span className="bg-secondary col-12 sub_region placeholder"></span>
                                <span className="bg-secondary captial col-12 placeholder"></span>
                            </p>
                        </div>
                        <div className="col">
                            <p className="">
                                <span className="top_level_domain col-12 placeholder bg-secondary"></span>
                                <span className="currencies col-12 placeholder bg-secondary"></span>
                                <span className="languages col-12 placeholder bg-secondary"></span>
                            </p>
                        </div>
                    </div>
                    <div id="border_countries">
                        <h4><span className="placeholder bg-secondary col-6"></span></h4>
                        <div className="border-btn-container">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


function Detail() {
    var el = useLocation().state
    const [buttonState, setButtonState] = useState({loading:true, data: null})
    const navigate = useNavigate() 
    
    useEffect( () => {
        if (el.borders?.length > 0) {
                fetch(`https://restcountries.com/v3.1/alpha?codes=${el.borders.join(',')}`)
                .then((res) => res.json())
                .then(border => {
                    setButtonState({loading:false, data:border})
                })
    }
    }, [el.borders])

    const BorderButtons = ({loading, data}) => {
        if (el.borders?.length > 0 && !loading) {
            const btns = data.map( (border, index) => {
                return (
                    <button key={index} className="btn custom-btn border-btn" onClick={() => { navigate(`/detail/${el.borders[index]}`, {state: border})}}>
                        {border.name.common}
                    </button>
                )
            })
            return btns
        }
        else if (el.borders === undefined) return (
            <div className="" style={{marginLeft: '0.5rem'}}>No bordering countries</div>
        )
    }
    if (el.name.nativeName) var lang_keys = Object.keys(el['name']['nativeName'])
    if (el.currencies) var currency = Object.keys(el.currencies)
    // if (!buttonState.loading)
    return (
    <div className="container" id="details">
        <div className="d-flex">
            <button className="btn back-btn custom-btn" onClick={() => navigate(-1)}>
                <FaArrowLeft style={{size: '16px'}} className="me-2"/>
                Back
            </button>
        </div>
        <div className="wrapper ">
            <div className="row">
                <div className="image-container col-md-6 col-12" >
                    <img src={el['flags']['png']} alt="country_flag" className="img-fluid"/>
                </div>
                <div className="text_wrapper col-sm-12 col-md">
                    <h2 className="country_name"> {el['name']['common']} </h2>
                    <div className="country_info row row-cols-1 gy-4 row-cols-md-2">
                        <div className="col">
                            <div className="native_name">Native Name: {el['name']['nativeName'][lang_keys[0]]['common']}</div>
                            <div className="population">Population: {el['population'].toLocaleString('en-US')}</div>
                            <div className="region">Region: {el.region ? el.region : 'No region recorded'}</div>
                            <div className="sub_region">Sub Region: {el.subregion ? el.subregion : 'No subregion recorded'}</div>
                            <div className="capital">Capital: {el.capital ? el.capital : 'No capital recorded'}</div>
                        </div>
                        <div className="col">
                            <div className="top_level_domain">Top Level Domain: {el.tld ? Object.values(el['tld']).join(', ') : 'No domain name recorded'}</div>
                            <div className="currencies">Currencies: {el.currencies ? el['currencies'][currency[0]]['name'] : 'No currency recorded'}</div>
                            <div className="languages">Languages: {el.name.nativeName ? Object.values(el['languages']).join(', ') : "No language recorded"}</div>
                        </div>
                    </div>
                    <div id="border_countries">
                        <h4>Border Countries</h4>
                        <div className="border-btn-container">
                            <BorderButtons loading={buttonState.loading} data={buttonState.data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    // else 
    // return (<SkeletonDetail/>)
}

export default Detail