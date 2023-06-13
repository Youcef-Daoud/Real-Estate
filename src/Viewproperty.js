import Headersection from "./Mycomponent/headerSection";
import Propertydetails from "./Mycomponent/propertyDetails";
import Footer from "./Mycomponent/Footer";

function Viewproperty() {
  let Localisation = {
    Commune : "El Ksar Boukhari", 
    Willaya : "Medea"
  }
  return (
    <>
        <Headersection/>
        <Propertydetails 
            imagesPath={[
              "./images/house-img-1.webp",
              "./images/hall-img-1.webp",
              "./images/kitchen-img-1.webp",
              "./images/bathroom-img-1.webp"
            ]}
            Commune={Localisation.Commune}
            Willaya={Localisation.Willaya} 
            nom="Massinissa"
            prix="50K"
            tel="0558314232"
            mail="km_abboud@esi.dz"
            type="sale"
            offer="flat"
            date="01/02/2023"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate aliquid ipsum recusandae maxime nisi, velit eaque, libero, exercitationem culpa accusamus. Neque dolor quaerat modi saepe facere dignissimos temporibus molestias."
            surf="6sqft"        
        />
        <Footer/>
    </>
  )
}

export default Viewproperty
