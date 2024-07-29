import '../../styles/footer.css'

import footerLogo from '../../images/footer-images/footer-logo.svg'
import charityImage from '../../images/footer-images/charity-nav.png'
import partnerFoodImage from '../../images/footer-images/Partner-Food-Bank-of-FA_1-c-White.png'
import footerSocialPlace from '../../images/footer-images/footer-socials.jpeg'

function Footer(){
    return(
        <footer>
            <div className="footer-top">
                <div>
                    <img src={footerLogo}></img>
                </div>
                <div className='footer-info'>
                    <p>HEADQUARTERS
                        <br></br>
                         31 EVANS TERMINAL 
                         <br></br>
                         HILLSIDE, NJ 07205
                         <br></br>
                         908-355-3663
                        </p>
                    <p>SOUTHERN BRANCH 
                        <br></br>    
                        6735 BLACK HORSE PIKE
                        <br></br>
                        EGG HARBOR TWP, NJ
                        <br></br>
                        08234 609-383-8843
                    </p>
                </div>
                <div>
                    <a href='#'>Find Food</a>
                    <a href='#'>Partner Portal</a>
                    <ul>
                        <li><a href='#'>GET HELP</a></li>
                        <li><a href='#'>FREE FOOD & SERVICES</a></li>
                        <li><a href='#'>APPLY FOR SNAP FOOD ASSISTANCE</a></li>
                        <li><a href='#'>JOB TRAINING</a></li>
                        <li><a href='#'>HEALTHY RECIPES</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href='#'>Take Action</a></li>
                        <li><a href='#'>Donate</a></li>
                        <li><a href="#">Volunteer</a></li>
                        <li><a href='#'>Advocate</a></li>
                        <li><a href='#'>Fundraise</a></li>
                        <li><a href='#'>Donate Food & Goods</a></li>
                        <li><a href='#'>Make A Corporate Donation</a></li>
                        <li><a href='#'>Events</a></li>
                        <li><a href='#'>Youth</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href='#'>Volunteer</a></li>
                        <li><a href='#'>Sign Up To Volunteer</a></li>
                        <li><a href='#'>Corporate Groups</a></li>
                        <li><a href='#'>Special Volunteer Programs</a></li>
                        <li><a href='#'>Youth</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href='#'>Our Story</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Strategic Plan</a></li>
                        <li><a href='#'>How A Food Bank Works</a></li>
                        <li><a href='#'>General Faqs</a></li>
                        <li><a href='#'>Leadership</a></li>
                        <li><a href='#'>Annual Report & Financials</a></li>
                        <li><a href='#'>Careers</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>News & Press</a></li>
                        <li><a href='#'>Our Programs</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-logos'>
                    <img src={partnerFoodImage}></img>
                    <img src={charityImage}></img>
                </div>
                <div>
                    <ul>
                        <li><a href='#'>LAND ACKNOWLEDGEMENT</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>
                    <ul>
                        <li className='footer-social'><a href='#'></a><img src={footerSocialPlace}></img></li>
                    </ul>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>NJ food banks and CFBNJ’s Partner Distribution Organizations: FoodBank of South Jersey, Fulfill Monmouth & Ocean, Mercer Street Friends, NORWESCAP.</p>
                <br></br>
                <p>©2024 Community FoodBank of New Jersey. All rights reserved. The Community FoodBank of New Jersey is a nonprofit 501(c)(3) public charity (Tax ID: 222 423 882).</p>
            </div>
        </footer>
    )
}

export default Footer