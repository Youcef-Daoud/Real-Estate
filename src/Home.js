import Headeruser from "./Mycomponent/headerUser";
import Homesection from "./Mycomponent/homeSection";
import Servicesection from "./Mycomponent/serviceSection";
import Listingsection from "./Mycomponent/listingSection";
import Footer from "./Mycomponent/Footer";

function Home() {
    return (
        <>
            <Headeruser/>
            <Homesection/>
            <Servicesection/>
            <Listingsection Nbox={3} head="Last Listing" view={true}/>
            <Footer/>
        </>
    )
}

export default Home;