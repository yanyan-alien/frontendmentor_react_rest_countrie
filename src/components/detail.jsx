import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
                    <button key={index} className="btn custom-btn border-btn" onClick={() => navigate(`/detail/${el.borders[index]}`, {state: border})}>
                        {border.name.common}
                    </button>
                )
            })
            return btns
        }
    }

    var lang_keys = Object.keys(el['name']['nativeName'])
    var currency = Object.keys(el['currencies'])
    return (
    <div className="container" id="details">
        <div className="d-flex">
            <button className="btn back-btn custom-btn" onClick={() => navigate(-1)}>
                <i className="fa-solid fa-arrow-left"></i>
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
                            <div className="region">Region: {el.region}</div>
                            <div className="sub_region">Sub Region: {el['subregion']}</div>
                            <div className="capital">Capital: {el.capital}</div>
                        </div>
                        <div className="col">
                            <div className="top_level_domain">Top Level Domain: {Object.values(el['tld']).join(', ')}</div>
                            <div className="currencies">Currencies: {el['currencies'][currency[0]]['name']}</div>
                            <div className="languages">Languages: {Object.values(el['languages']).join(', ')}</div>
                        </div>
                    </div>
                    <div id="border_countries">
                        <h4>Border Countries</h4>
                        <BorderButtons loading={buttonState.loading} data={buttonState.data} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Detail