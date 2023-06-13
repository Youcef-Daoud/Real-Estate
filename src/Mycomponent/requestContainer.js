import Requestbox from "./requestBox";

function Requestcontainer({Nbox}) {
    return (
    /* header section ends */

    <section class="requests">
        <h1 class="heading">all requests</h1>

        <div class="box-container">
        {
            Array.apply(0, Array(Nbox)).map(function() {
                return <Requestbox  fullname="Daoud Youcef"
                                    tel="0558314232"
                                    mail="ky_daoud@esi.dz"
                                    enquiry="sell"/>
            })
        }
        </div>
    </section>

    /* footer section starts  */
    )
}

export default Requestcontainer;
