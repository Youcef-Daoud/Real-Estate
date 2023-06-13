import Headersection from "./Mycomponent/headerSection";
import Searchfilter from "./Mycomponent/searchFilter";
import Listingsection from "./Mycomponent/listingSection";
import Footer from "./Mycomponent/Footer";


function Search() {
    return (
    <>
        <Headersection/>
        <Searchfilter/>
        <Listingsection Nbox={5}/>
        <Footer/>
    </>
    )
}

export default Search
