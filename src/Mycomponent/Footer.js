//import {Link} from "react-router-dom";

function Footer() {
    return (

    /* footer section starts  */

    <footer class="footer">
        <section class="flex">
        <div class="box">
            <a href="tel:0558314232"><i class="fas fa-phone"></i><span>0558314232</span></a>
            <a href="mailto:ky_daoud@esi.dz">
            <i class="fas fa-envelope"></i>
            <span>ky_daoud@esi.dz</span></a>
            <a href="https://www.google.com" rel="noopener noreferrer">
                <i class="fas fa-map-marker-alt"></i>
                <span>Medea, Algeria - 26003</span></a>
        </div>

        <div class="box">
            <a href="../Home"><span>home</span></a>
            <a href="../About"><span>about</span></a>
            <a href="../Contact"><span>contact</span></a>
            <a href="../Listing"><span>all listings</span></a>
            <a href="../Saved"><span>saved properties</span></a>
        </div>

        <div class="box">
            <a href="www.facebook.com" rel="noopener noreferrer"><span>facebook</span><i class="fab fa-facebook-f"></i
            ></a>
            <a href="https://www.twitter.com" rel="noopener noreferrer"><span>twitter</span><i class="fab fa-twitter"></i></a>
            <a href="https://www.Linkdin.com" rel="noopener noreferrer"><span>linkedin</span><i class="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com" rel="noopener noreferrer"><span>instagram</span><i class="fab fa-instagram"></i></a>
        </div>
        </section>

        <div class="credit">
        &copy; created @ 2023 by <span>4th Squad G06</span></div>
    </footer>

    /* footer section ends */
    )
}

export default Footer;