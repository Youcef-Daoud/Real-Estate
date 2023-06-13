
function Dashboardsection() {
    return (
    <>
        <section class="dashboard">
        <h1 class="heading">dashboard</h1>

        <div class="box-container">

            <div class="box">
            <h3>filter search</h3>
            <p>search your dream property</p>
            <a href="../Search" class="btn">search now</a>
            </div>

            <div class="box">
            <h3>All listings</h3>
            <p>properties listed</p>
            <a href="../Listing" class="btn">view all listings</a>
            </div>

            <div class="box">
            <h3>All requests</h3>
            <p>requests received</p>
            <a href="../Request" class="btn">view all requests</a>
            </div>

            <div class="box">
            <h3>All saved</h3>
            <p>properties saved</p>
            <a href="../Saved" class="btn">view saved properties</a>
            </div>
        </div>
        </section>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
    </>
    )
}

export default Dashboardsection;
