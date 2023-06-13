import Box from "./box";

function Listingsection({Nbox, head, view}) {
    return (
        /* listings section starts  */

        <section class="listings">

        <h1 class="heading">{head}</h1>

        <div class="box-container">
            {
                Array.apply(0, Array(Nbox)).map(function() {
                    return <Box 
                        saved={false}
                        logo={"./images/pic-1.png"}
                        fullname="Youcef Daoud"
                        date="01/02/2023"
                        totalimg={4}
                        type="sell"
                        offer="shope"
                        mainimg="./images/house-img-3.jpg"
                        adresse="Ksar El Boukhari, Medea, Algeria"
                        price="600K"
                        area="160sqft"
                    />
                })
            }
        </div>
        {
            view ? (
            <div id="listing-div">
                <a href="../Listing" class="inline-btn">view all</a>
            </div>
            ) : (<></>)
        }
        </section>

        /* listings section ends */
    )
}

export default Listingsection;