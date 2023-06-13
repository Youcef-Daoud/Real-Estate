import Box from "./box"

function Savedform({Nform}) {
    return (
    <>
    <section class="listings">

    <h1 class="heading">saved listings</h1>

    <div class="box-container">
        {

            Array.apply(0, Array(Nform)).map(function() {
                return (
                    <form action="" method="POST">
                        <Box
                            saved={false}
                            logo={"./images/pic-3.png"}
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
                    </form>
                )
            })
        }
    </div>

    </section>
    <div class="flex-empty">
        <p class="empty">no properties added yet! <a href="post_property.html" class="btn">add new</a></p>
        <p class="empty">no properties saved yet! <a href="listings.html" class="btn">discover more</a></p>;
    </div>
    </>
    )
}

export default Savedform;
