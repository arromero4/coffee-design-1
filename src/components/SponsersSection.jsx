import '../pages/SponsersSection.css'
import coffeeCup from '../assets/coffeeCup.png'
const SponsersSection = () => {
  return (
    <div className="sponsers-section">

      <b className="reviews">Reviews</b>
      <img className="coffeeCup" alt="" src={coffeeCup} />
      <div className="frame">
        <div className="what-other-people">
          What other people are saying!
        </div>
      </div>

      <div className="wrapper">
        <div className="image">
          <p className="text-ceo">@elonmusk</p>
          <p className="text-opinion">&quot;Indulge in the sublime experience of Coffee Borcelle, where every sip is a journey to flavor paradise. Crafted with precision, our rich blends ignite the senses and redefine coffee appreciation.&quot;</p>
        </div>




        <div className="image">
          <p className="text-ceo">@JeffBezos</p>
          <p className="text-opinion">&quot;Welcome to the heart and soul of coffee passion –Coffee Borcelle. Our carefully curated beans are an ode to craftsmanship, brewing a story of perfection in every cup.&quot;</p>
        </div>


        <div className="image">
          <p className="text-ceo">@MrBeast</p>
          <p className="text-opinion">&quot;Discover a world of taste with Coffee Brocelle. Each cup is a masterpiece, blending aromas and flavors that dance on your palate. Join us in celebrating coffee at its finest.&quot;</p>
        </div>
      </div>



    </div>
  )
}

export default SponsersSection