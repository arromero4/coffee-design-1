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




     <img className="borcelle-2-removebg-preview-icon" alt="" src={borcell2} />
      <div className="indulge-in-every-container">

        <p className="indulge-in-every">&quot;Indulge in Every Sip: Experience the Richness of Coffee!&quot;</p>
      </div>

      <div className="coffee-makes-mood">Coffee Makes Mood</div>

      <div className="menu-section">

        <nav className="menu-list">
          <ul>
            <li className='menu-item'>
              <a href="#home"  className='menu-item-a'>Home</a>
            </li>

            <li className='menu-item'>
              <a href="#about-us" className='menu-item-a'>About Us</a>
            </li>
            <li className='menu-item'>
              <a href="#features" className='menu-item-a'>Features</a>
            </li>
            <li className='menu-item'>
              <a href="#purchase" className='menu-item-a'>Purchase</a>
            </li>
            <li className='menu-item'>
              <a href="#contact-us" className='menu-item-a'>Contact Us</a>
            </li>
          </ul>
        </nav>

      </div>

    </div>
    );
};

export default HomeSection;
