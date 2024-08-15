import '../pages/Footer.css';
import borcell2 from '../assets/Borcelle__2_-removebg-preview.png'
import phone from '../assets/phone-call.svg'
import enveloped from '../assets/envelope-regular 1.svg'

const Footer = () => {
  return (
    <div className="footer">
      <b className="contact-us">Contact Us</b>
      <p className="send-us-a">Send us a message</p>


      <div className="form-contact-us">
        <input className="full-name" type='text' name='full-name' placeholder='Full name' />
        <br /><br />
        <input className="your-email" type='text' name='your-email' placeholder='Your email' />
        <br /><br />
        <textarea className="your-message" type='text' name='your-message' placeholder='Your message' />
        <br /><br />
        <button className="submit">Submit</button>
      </div>


      <b className="sitemap">Sitemap</b>
      <p className="all-our-pages">All our pages</p>
      <ul className="all-our-pages-list-container">
        <li className="all-our-pages-list-item">- Home</li>
        <li className="all-our-pages-list-item">- About Us</li>
        <li className="all-our-pages-list-item">- Feature</li>
        <li className="all-our-pages-list-item">- Pricing</li>
        <li className="all-our-pages-list-item">- Contact Us</li>

      </ul>


      <img className="borcelle-2-removebg-preview-icon-2" alt="" src={borcell2} />


      <div className="div">
        <img className="contact-phone-icon" alt="" src={phone} />
        <p className="contact-phone-number">(08) 400 2000</p>
      </div>

      <div className="div">
        <img className="contact-email-icon" alt="" src={enveloped} />
        <p className="contact-email">coffeeborcelle@gmail.com</p>
      </div>









      <div className="copyright-rectangle">
        <p className="copyright-all">Copyright 2024 All Rights Reserved Company Name.</p>
      </div>


    </div>
  )
}

export default Footer