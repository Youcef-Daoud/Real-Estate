
function Loginsection({old}) {
    return (
    /* login section starts */

    <section class="form-container">

    <form action="/login_google" method="get">
        {
            (!old) ? (
            <>
                <h3>welcome back!</h3>
                <input type="email" name="email" required maxlength="50" placeholder="enter your email" class="box"/>
                <input type="password" name="pass" required maxlength="20" placeholder="enter your password" class="box"/>
                <p>don't have an account? <a href="register.html">register now</a></p>
                <input type="submit" value="login now" name="submit" class="btn"/>
            </>
            ) : (
            <>
                <h3>create an account!</h3>
                <input type="tel" name="name" required maxlength="50" placeholder="enter your name" class="box"/>
                <input type="email" name="email" required maxlength="50" placeholder="enter your email" class="box"/>
                <input type="password" name="pass" required maxlength="20" placeholder="enter your password" class="box"/>
                <input type="password" name="c_pass" required maxlength="20" placeholder="confirm your password" class="box"/>
                <p>don't have an account? <a href="register.html">register now</a></p>
                <input type="submit" value="login now" name="submit" class="btn"/>
            </>
            )
        }
    </form>

    </section>
    
    /* login section ends */
    )
}

export default Loginsection;
