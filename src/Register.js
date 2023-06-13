import Headersection from "./Mycomponent/headerSection";
import Loginsection from "./Mycomponent/loginSection";
import Footer from "./Mycomponent/Footer";

function Register() {
    return (
    <>
        <Headersection/>
        <Loginsection old={true}/>
        <Footer/>
    </>
    )
}

export default Register
