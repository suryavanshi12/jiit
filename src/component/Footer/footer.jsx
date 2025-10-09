import "./footer.sass";
import "./footer.sass";
import Map from '../../assets/images/foot-map.svg';
import Call from '../../assets/images/foot-call.svg';
import Mail from '../../assets/images/foot-mail.svg';
import Facebook from '../../assets/images/fb.svg';
import Institude from '../../assets/images/institude.svg';
import Notes from '../../assets/images/notes.png';
import Custom from '../../assets/images/customer.png';
import Webmail from '../../assets/images/mail.png';
import Website from '../../assets/images/website.png';

export default function footer() {
    return (
        <>
            <footer id="contact" class="site-footer">
                <div class="container">
                    <div className='footer-top'>
                        <div className='top-flex'>
                            <img src={Institude} alt='' />
                            <h6>Anunaad - The <br/> Institute Newsletter</h6>
                        </div>
                        <div className='top-flex'>
                            <img src={Notes} alt='' />
                            <h6>Annual Reports</h6>
                        </div>
                        <div className='top-flex'>
                            <img src={Custom} alt='' />
                            <h6>Webmail</h6>
                        </div>
                        <div className='top-flex'>
                            <img src={Webmail} alt='' />
                            <h6>Webmail</h6>
                        </div>
                        <div className='top-flex'>
                            <img src={Website} alt='' />
                            <h6>Webportal</h6>
                        </div>
                    </div>
                    <div class="footer-flex">
                        <div class="footer-item">
                            <p><img src={Map} alt='' /> <b>Address: A-10, Sector-62, ,Noida-201 309, <br />
                                Uttar Pradesh, India.</b></p>
                            <p><img src={Call} alt='' /> <b>24X7 Helpline No <br />
                                <a href="tel:+911202400973">+91-120-2400973</a><br />
                                (For admission-related queries)</b></p>
                            <p><img src={Mail} alt='' /> <a href="mailto:pallav@starshinerealtorz.in">admission@jiit.ac.in</a></p>
                            <div className='sociel-icon'>
                                <h6>Connect With Us</h6>
                                <span></span>
                                <div className="sociel-flex">
                                    <img src={Facebook} alt='' />
                                    {/* <img src={Sociel} alt='' /> */}
                                </div>
                            </div>
                        </div>

                        <div class="footer-item">
                            <h3>Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="#">About JIIT</a></li>
                                <li><a href="#">Governance</a></li>
                                <li><a href="#">MOA</a></li>
                                <li><a href="#">NAD</a></li>
                                <li><a href="#">Grievances</a></li>
                                <li><a href="#">Career Openings</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Reach Us</a></li>
                            </ul>
                        </div>

                        <div class="footer-item">
                            <h3>Important Links</h3>
                            <ul class="footer-links">
                                <li><a href="#">Mandatory Disclosures - UGC</a></li>
                                <li><a href="#">Mandatory Disclosures - AICTE</a></li>
                                <li><a href="#">Jaypee Business School</a></li>
                                <li><a href="#">IQAC</a></li>
                                <li><a href="#">ICC</a></li>
                                <li><a href="#">Anti-Ragging Compliance</a></li>
                                <li><a href="#">Departments</a></li>
                            </ul>
                        </div>

                        <div class="footer-item">
                            <h3>R&D</h3>
                            <ul class="footer-links">
                                <li><a href="#">Guidelines for Research</a></li>
                                <li><a href="#">Centres for Research</a></li>
                                <li><a href="#">Research Groups</a></li>
                                <li><a href="#">Sponsored Projects</a></li>
                                <li><a href="#">All Publications by JIIT Faculty</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <a href="#" >Terms and Conditions</a>
                        <a href="#" >Privacy Policy</a>
                        <a href="#" >Sitemap</a>
                    </div>
                </div>
            </footer>
            <div>
                <div className="container">
                    <div className="copyright">
                        <p>© Copyright 2025 - JIIT - All Rights Reserved | Disclaimer</p>
                        <p>Web Design & Development : Interactive Bees</p>
                    </div>
                </div>
            </div>
        </>
    )
}
