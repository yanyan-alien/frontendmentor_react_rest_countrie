import Header from "./header";
import { Route, Routes } from "react-router-dom";
import Detail from "./detail";
import Home from "./home";
import React, { useState } from "react";

function Main() {
    const [darkState, setDarkState] = useState(false)
    const setState = () => {
        setDarkState(!darkState);
    }

    return(
        <div className={darkState ? 'App dark' : 'App'} >
            <Header setState={setState} darkState={darkState} />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<Home/>}/>
                <Route path="/detail/:countrycode" element={<Detail/>} />
            </Routes>
        </div>
    )
}

export default Main