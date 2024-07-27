import '../pages/HomeSection.css'
import borcell2 from '../assets/Borcelle__2_-removebg-preview.png'
import imageremovebg from '../assets/image-removebg-preview.png'
import '../pages/HomeSection.css';


const HomeSection = () => {
  return (
    <div className="home-section">
      <div className="bg-home-page"> 
      <img className="image-removebg-preview-2-1" alt="" src={imageremovebg} />
      </div>
      <div className="indulge-in-every-container">
        <p className="indulge-in-every">Indulge in Every Sip: Experience the Richness of Coffee!</p>
      </div>
      <div className="coffee-makes-mood">Coffee Makes Mood</div>
      <img className="borcelle-2-removebg-preview-icon" alt="" src={borcell2} />
      <div className="menu-section">
        <nav className="menu-list">
          <ul>
            <li className='menu-item'><a href="#home" >Home</a></li>
            <li className='menu-item'><a href="#about-us">About Us</a></li>
            <li className='menu-item'><a href="#features">Features</a></li>
            <li className='menu-item'><a href="#purchase">Purchase</a></li>
            <li className='menu-item'><a href="#contact-us">Contact Us</a></li>
          </ul>
        </nav>

      </div>
      
    </div>);
};

export default HomeSection;
