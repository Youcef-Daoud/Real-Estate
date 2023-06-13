

function Headersection() {
    return (
    /* header section starts  */

    <header class="header">

    <nav class="navbar nav-1">
        <section class="flex">
            <a href="/" class="logo"><i class="fas fa-house"></i>MyHome</a>

            <ul>
            <li><a href="/Propertypost">post property<i class="fas fa-paper-plane"></i></a></li>
            </ul>
        </section>
    </nav>

    <nav class="navbar nav-2">
        <section class="flex">
            <div id="menu-btn" class="fas fa-bars"></div>

            <div class="menu">
            <ul>
                <li><a href="/#" rel="noopener noreferrer">buy<i class="fas fa-angle-down"></i></a>
                    <ul>
                        <li><a href="/Search">house</a></li>
                        <li><a href="/Search">flat</a></li>
                        <li><a href="/Search">shop</a></li>
                    </ul>
                </li>
                <li><a href="/#" rel="noopener noreferrer">sell<i class="fas fa-angle-down"></i></a>
                    <ul>
                        <li><a href="/Propertypost">post property</a></li>
                        <li><a href="/Dashboard">dashboard</a></li>
                    </ul>
                </li>
                <li><a href="/#" rel="noopener noreferrer">rent<i class="fas fa-angle-down"></i></a>
                    <ul>
                        <li><a href="/Search">house</a></li>
                        <li><a href="/Search">flat</a></li>
                        <li><a href="/Search">shop</a></li>
                    </ul>
                </li>
                <li><a href="/#" rel="noopener noreferrer">help<i class="fas fa-angle-down"></i></a>
                    <ul>
                        <li><a href="/About">about us</a></li>
                        <li><a href="/Contact">contact us</a></li>
                        <li><a href="/Contact">FAQ</a></li>
                    </ul>
                </li>
            </ul>
            </div>

            <ul>
            <li><a href="/Saved">saved <i class="far fa-heart"></i></a></li>
            <li><a href="/#" rel="noopener noreferrer">account <i class="fas fa-angle-down"></i></a>
                <ul>
                    <li><a href="/Llogin">login now</a></li>
                    <li><a href="/Register">register new</a></li>
                    <li><a href="/Logout">logout</a></li>
                </ul>
            </li>
            </ul>
        </section>
    </nav>

    </header>

    /* header section ends */
    )
}

export default Headersection
