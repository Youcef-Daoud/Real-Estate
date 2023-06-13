
function Stepsection() {
    return (

    /* steps section starts  */

    <section class="steps">

        <h1 class="heading">3 simple steps</h1>

        <div class="box-container">

            <div class="box">
            <img src={require("./images/step-1.png")} alt=""/>
            <h3>search property</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat.</p>
            </div>

            <div class="box">
            <img src={require("./images/step-2.png")} alt=""/>
            <h3>contact agents</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat.</p>
            </div>

            <div class="box">
            <img src={require("./images/step-3.png")} alt=""/>
            <h3>enjoy property</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat.</p>
            </div>

        </div>

    </section>

    /* steps section ends */

    )
}

export default Stepsection;
