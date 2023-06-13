
function Aboutsection() {
    return (
    /* about section starts */

    <section class="about">

        <div class="row">

            <div class="image">
                <img src={require("./images/about-img.png")} alt=""/>
            </div>

            <div class="content">
                <h3>why choose us?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem provident voluptatum distinctio laborum veritatis vitae suscipit praesentium fugiat unde?</p>
                <a href="../Contact" class="inline-btn">contact us</a>
            </div>

        </div>

    </section>

    /* about section ends */
    )
}

export default Aboutsection;
