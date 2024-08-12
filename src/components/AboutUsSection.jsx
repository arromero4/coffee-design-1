import '../pages/AboutUsSection.css'
import coffeeImage from '../assets/coffee-IMAGE.png'

const AboutUsSection = () => {
  return (
    <div className="about-us-section">

        <div className="discover-coffee-borcelle">Discover Coffee Borcelle</div>
        <div className="elevating-your-coffee">Elevating Your Coffee Experience</div>


        <div className="at-coffee-borcelle-container">
          <p className="at-coffee-borcelle">At Coffee Borcelle, we&#39;re on a mission to redefine your coffee moments. Our carefully curated selection of premium beans, sourced from the world&#39;s most renowned coffee regions.</p>
          <br />
          <p className="at-coffee-borcelle">{`With expert craftsmanship and a commitment to quality, `}</p>
     
          <p className="at-coffee-borcelle">Join us in savoring the art of coffee, one cup at a time.</p>
        </div>


        <div className="frame4">
          <img className="coffee-image-icon" alt="" src={coffeeImage} />
        </div>

        <button className="read-more">Read More</button>

    </div>
  )
}

export default AboutUsSection;