import '../pages/AboutUsSection.css'

const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <div className="bg"></div>
      <div className="frame">
        <div className="read-me-button">
          <div className="button"></div>
          <div className="read-more">Read More</div>
        </div>
      </div>
      <div className="frame1">
        <div className="at-coffee-borcelle-container">
          <p className="at-coffee-borcelle">At Coffee Borcelle, we&#39;re on a mission to redefine your coffee moments. Our carefully curated selection of premium beans, sourced from the world&#39;s most renowned coffee regions.</p>
          <p className="at-coffee-borcelle">&nbsp;</p>
          <p className="at-coffee-borcelle">{`With expert craftsmanship and a commitment to quality, `}</p>
          <p className="at-coffee-borcelle">Join us in savoring the art of coffee, one cup at a time.</p>
        </div>
      </div>
      <div className="frame2">
        <div className="elevating-your-coffee">Elevating Your Coffee Experience</div>
      </div>
      <div className="frame3">
        <b className="discover-coffee-borcelle">Discover Coffee Borcelle</b>
      </div>
      <div className="frame4">
        <img className="coffee-image-icon" alt="" src="coffee IMAGE.png" />
      </div>
    </div>
  )
}

export default AboutUsSection;