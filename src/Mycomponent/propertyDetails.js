
import React from 'react'

function Propertydetails(
        {
        imagesPath,
        Commune, Willaya, 
        nom, prix, tel, mail,
        type, offer, date, description, surf}) {


    let Adresse = Commune+", "+Willaya+", Algeria";
    return (

    /* view property section starts  */

    <section class="view-property">
        <div class="details">
            <h2 class="name">modern flats and appartments</h2>
            <div class="thumb">
                <div class="big-image">
                    <img src={require(`${imagesPath[0]}`)} alt=""/>
                </div>
                <div class="small-images">

                    {
                        imagesPath.map((value)=>{
                            return <img src={require(`${value}`)} alt=""/>;
                        })
                    }
                </div>
            </div>
            <h3 class="title">details</h3>
            <div class="flex">
                <div class="box">
                    <p><i class="fas fa-user"></i><span>{nom}</span></p>
                    <p><i class="fas fa-phone"></i><a href= {`tel:${tel}`}>{tel}</a></p>
                    <p><i class="fas fa-map-marker-alt"></i><span>{Adresse}</span></p>
                    <p><i class="fa-solid fa-envelope"></i><a href= {`mailto:${mail}`}>{mail}</a></p>
                    <p><i class="fas fa-calendar"></i><span>{date}</span></p>
                </div>
                <div class="box">
                    <p><i class="fas fa-maximize"></i><span>{surf}</span></p>
                    <p><i class="fas fa-tag"></i><span>{prix}</span></p>
                    <p><i class="fas fa-building"></i><span>{type}</span></p>
                    <p><i class="fas fa-house"></i><span>{offer}</span></p>
                </div>
            </div>
            <h3 class="title">description</h3>
            <p class="description">{description}</p>
            <form action="" method="post">
                <input type="submit" value="save property" name="save" class="inline-btn" />
            </form>
        </div>
    </section>

    /*view property section ends */
  )
}

export default Propertydetails;
