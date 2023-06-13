import Headersection from './Mycomponent/headerSection'
import Footer from './Mycomponent/Footer';
import Savedform from './Mycomponent/savedForm'

function Saved() {
    return (
    <>
        <Headersection/>
        <Savedform Nform={5}/>
        <Footer/>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
    </>
    )
}

export default Saved
