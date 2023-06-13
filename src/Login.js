import Headersection from "./Mycomponent/headerSection";
import Loginsection from "./Mycomponent/loginSection";
import Footer from "./Mycomponent/Footer";

import React from 'react'

function Login() {
    return (
    <>
        <Headersection/>
        <Loginsection old={false}/>
        <Footer/>
    </>
    )
}

export default Login
