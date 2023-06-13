import Headersection from "./Mycomponent/headerSection";
import Listingsection from "./Mycomponent/listingSection";
import Footer from "./Mycomponent/Footer";

function Listing() {
    return (
    <>
        <Headersection/>
        <Listingsection Nbox={15} head="All Listings" view={false}/>
        <Footer/>
    </>
    )
}

export default Listing
