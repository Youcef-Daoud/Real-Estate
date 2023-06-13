
function Box({saved, logo, fullname, date, totalimg, type, offer, mainimg, adresse, price, area}) {
    return (
    <div class="box">
        <div class="admin">
            <img src={require(`${logo}`)} alt=""/>
            <div>
                <p>{fullname}</p>
                <span>{date}</span>
            </div>
        </div>
        <div class="thumb">
            <p class="total-images"><i class="far fa-image"></i><span>{totalimg}</span></p>
            <p class="type"><span>{offer}</span><span>{type}</span></p>
            <form action="" method="post" class="save">
                {
                    (saved) ? (
                        <button type="submit" name="save" class="fas fa-heart"></button>
                    ) : (
                        <button type="submit" name="save" class="far fa-heart"></button>
                    )
                }
            </form>
            <img src={require(`${mainimg}`)} alt=""/>
        </div>
        <h3 class="name">modern flats and appartments</h3>
        <p class="location"><i class="fas fa-map-marker-alt"></i><span>{adresse}</span></p>
        <div class="flex">
            <p><i class="fas fa-dollar-sign"></i><span>{price}</span></p>
            <p><i class="fas fa-maximize"></i><span>{area}</span></p>
        </div>
        <div class="flex-btn">
            <a href="../Viewproperty" class="btn">view property</a>
            {
                (saved) ? (
                    <input type="submit" value="send enquiry" name="send" class="btn"/>
                ) : (<></>)
            }
        </div>
    </div>
    )
                /*"./images/house-img-3.jpg"*/

}

export default Box;
