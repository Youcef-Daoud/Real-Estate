import Headersection from "./Mycomponent/headerSection";
import Requestcontainer from "./Mycomponent/requestContainer";
import Footer from "./Mycomponent/Footer";

import React from 'react'

function Request() {
    return (
    <>
        <Headersection/>
        <Requestcontainer Nbox={3}/>
        <Footer/>
    </>
    )
}

export default Request;
