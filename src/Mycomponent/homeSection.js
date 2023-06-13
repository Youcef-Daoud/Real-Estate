
function Homesection() {
    return (
        
        /* home section starts  */

        <div class="home">

        <section class="center"> 

            <form action="/Search" method="post">
                <h3>find your perfect home</h3>
                <div class="box">
                    <p>What do you want ? <span>*</span></p>
                    <input type="text" name="h_location" required maxlength="100" placeholder="enter city name" class="input"/>
                </div>
                <input type="submit" value="search property" name="h_search" class="btn"/>
            </form>

        </section>

        </div>

        /* home section ends */
    )
}

export default Homesection;