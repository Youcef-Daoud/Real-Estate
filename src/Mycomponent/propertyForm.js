
function Propertyform() {
    return (
    <>
    <section class="property-form">

        <form action="/annonces/create" method="POST" enctype="multipart/form-data">

            <h3>property details</h3>
            <div class="box">
                <p>Your name <span>*</span></p>
                <input type="text" name="property_name" required maxlength="50" placeholder="enter property name" class="input"/>
            </div>
            <div class="flex">
                <div class="box">
                    <p>Your mail <span>*</span></p>
                    <input type="mail" name="mail" required maxlength="100" placeholder="enter property mail" class="input"/>
                </div>
                <div class="box">
                    <p>Your phone <span>*</span></p>
                    <input type="number" name="mail" required maxlength="100" placeholder="enter property phone" class="input"/>
                </div>
                <div class="box">
                    <p>Willaya <span>*</span></p>
                    <input type="text" name="address" required maxlength="100" placeholder="enter property Willaya" class="input"/>
                </div>
                <div class="box">
                    <p>Commune <span>*</span></p>
                    <input type="text" name="address" required maxlength="100" placeholder="enter property commune" class="input"/>
                </div>
                <div class="box">
                    <p>Price <span>*</span></p>
                    <input type="number" name="price" required min="0" max="9999999999" maxlength="10" placeholder="enter property price" class="input"/>
                </div>
                <div class="box">
                    <p>Offer type <span>*</span></p>
                    <select name="offer" required class="input">
                        <option value="sale">sale</option>
                        <option value="resale">resale</option>
                        <option value="rent">rent</option>
                    </select>
                </div>
                <div class="box">
                    <p>Property type <span>*</span></p>
                    <select name="type" required class="input">
                        <option value="flat">flat</option>
                        <option value="house">house</option>
                        <option value="shop">shop</option>
                    </select>
                </div>
                <div class="box">
                    <p>carpet area <span>*</span></p>
                    <input type="number" name="carpet" required min="1" max="9999999999" maxlength="10" placeholder="how many squarefits?" class="input"/>
                </div>
            </div>
            <div class="box">
                <p>property description <span>*</span></p>
                <textarea name="description" maxlength="1000" class="input" required cols="30" rows="10" placeholder="write about property..."></textarea>
            </div>
            <div class="flex"> 
                <div class="box">
                    <p>image 01 <span>*</span></p>
                    <input type="file" name="image_01" class="input" accept="image/*" required/>
                </div>
                <div class="box">
                    <p>image 02</p>
                    <input type="file" name="image_02" class="input" accept="image/*"/>
                </div>
                <div class="box">
                    <p>image 03</p>
                    <input type="file" name="image_03" class="input" accept="image/*"/>
                </div>
                <div class="box">
                    <p>image 04</p>
                    <input type="file" name="image_04" class="input" accept="image/*"/>
                </div>
                <div class="box">
                    <p>image 05</p>
                    <input type="file" name="image_05" class="input" accept="image/*"/>
                </div> 
                <div class="box">
                    <p>image 06</p>
                    <input type="file" name="image_06" class="input" accept="image/*"/>
                </div>   
            </div>
            <input type="submit" value="post property" class="btn" name="post"/>
        </form>

    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
    </>
    )
}

export default Propertyform
