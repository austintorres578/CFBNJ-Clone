import '../../styles/header.css'

import headerLogo from '../../images/global images/cfbnj-logo.svg'
import findFoodImage from '../../images/header-images/Find-Food.svg'
import getHelpImage from '../../images/header-images/Get-Help.svg'
import takeActionImage from '../../images/header-images/Take-Action.svg'
import volunteerImage from '../../images/header-images/Volunteer.svg'
import ourStoryImage from '../../images/header-images/Our-Story.svg'


function revealDropDown(className){
    // console.log(className);
    // Add your dropdown reveal logic here
    let allDrops = document.querySelectorAll('.drops-con');

    for(let i = 0; i < allDrops.length; i++){
            if(className === allDrops[i].classList[0]){
                allDrops[i].style.opacity=1;
                allDrops[i].style.pointerEvents='auto';
            }
            else{
                allDrops[i].style.opacity=0;
                allDrops[i].style.pointerEvents='none';
            }
        
    }
}

function Header(){

    console.log(document.querySelectorAll('.drop-toggle'));

    return(
        <header>
            <div className="clone-notification">
                <h3>THIS IS A CLONE OF <a href='https://cfbnj.org/'> CFBNJ.ORG</a>, IF YOU WANT TO MAKE A DONATION GO TO THEIR WEBSITE!!!!!!</h3>
            </div>
            <div className='header-top'>
                <div className='header-top-email'>
                    <p>Stay Informed:</p>
                    <input type='email' placeholder='Your Email' />
                    <button>SUBMIT</button>
                </div>
                <div className='top-header-tabs'>
                    <div className='top-tab'>
                        <a href='#'>
                            Careers
                        </a>
                    </div>
                    <div className='top-tab'>
                        <a href='#'>
                            Partner Portal
                        </a>
                    </div>
                    <button className='header-search-button'></button>
                </div>
            </div>
            <div className='main-header'>
                <a className='site-logo' href='#'><img src={headerLogo} alt="Logo" /></a>
                <nav>
                    <a href='#'>
                        <img src={findFoodImage} alt="Find Food" />
                        <p>Find Food</p>
                    </a>

                    <a onMouseEnter={() => revealDropDown('get-help-drop')} className='drop-toggle' href='#'>
                        <img src={getHelpImage} alt="Get Help" />
                        <div>
                            <p>Get Help</p>
                            <span>^</span>
                        </div>
                    </a>

                    <a onMouseEnter={() => revealDropDown('take-action-drop')} className='drop-toggle' href='#'>
                        <img src={takeActionImage} alt="Take Action" />
                        <div>
                            <p>Take Action</p>
                            <span>^</span>
                        </div>
                    </a>

                    <a onMouseEnter={() => revealDropDown('volunteer-drop')} className='drop-toggle' href='#'>
                        <img src={volunteerImage} alt="Volunteer" />
                        <div>
                            <p>Volunteer</p>
                            <span>^</span>
                        </div>
                    </a>

                    <a onMouseEnter={() => revealDropDown('our-story-drop')} className='drop-toggle' href='#'>
                        <img src={ourStoryImage} alt="Our Story" />
                        <div>
                            <p>Our Story</p>
                            <span>^</span>
                        </div>
                    </a>
                    <a className='drop-toggle' href='#' id='header-donation-button-con'>
                        <button>
                            <p>Donate</p>
                        </button>
                    </a>
                </nav>
            </div>
            <div className='header-dropdowns-con'>
                <div className='get-help-drop drops-con'>
                    <div className='drop-left'>
                        <a className='free-food-main' href='#'>Free Food & Services</a>
                        <a className='apply-for-snap-main' href='#'>Apply For Snap Food Services</a>
                        <a href='#'>Job Training</a>
                        <a href='#'>Healthy Recipes</a>
                    </div>
                    <div className='drop-right'>
                        <div className='free-food-links drop-links'>
                            <h3>Free Foods & Services</h3>
                            <p>Find a food pantry near you and explore the free services that can help you and your family.</p>
                            <a href='#'>Summer Feeding Programs for Kids</a>
                            <a href='#'>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='take-action-drop drops-con'>
                    <div className='drop-left'>
                        <a href='#'>Donate</a>
                        <a href='#'>Volunteer</a>
                        <a href='#'>Advocate</a>
                        <a href='#'>Fundraise</a>
                        <a href='#'>Donate Food & Goods</a>
                        <a href='#'>Make A Corporate Donation</a>
                        <a href='#'>Events</a>
                        <a href='#'>Youth</a>
                    </div>
                    <div className='drop-right'>
                        <div className='free-food-links drop-links'>
                            <h3>Donate</h3>
                            <p>Find a food pantry near you and explore the free services that can help you and your family.</p>
                            <a href='#'>Summer Feeding Programs for Kids</a>
                            <a href='#'>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='volunteer-drop drops-con'>
                    <div className='drop-left'>
                        <a href='#'>Sign Up To Volunteer</a>
                        <a href='#'>Corporate Groups</a>
                        <a href='#'>Special Volunteer Programs</a>
                        <a href='#'>Youth</a>
                    </div>
                    <div className='drop-right'>
                        <div className='free-food-links drop-links'>
                            <h3>Volunteer</h3>
                            <p>Find a food pantry near you and explore the free services that can help you and your family.</p>
                            <a href='#'>Summer Feeding Programs for Kids</a>
                            <a href='#'>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='our-story-drop drops-con'>
                    <div className='drop-left'>
                        <a href='#'>About Us</a>
                        <a href='#'>Strategic Plan</a>
                        <a href='#'>How A Food Bank Works</a>
                        <a href='#'>Leadership</a>
                        <a href='#'>Annual Report & Financials</a>
                        <a href='#'>Careers</a>
                        <a href='#'>News & Press</a>
                        <a href='#'>Our Locations</a>
                        <a href='#'>Our Programs</a>
                    </div>
                    <div className='drop-right'>
                        <div className='free-food-links drop-links'>
                            <h3>Our Story</h3>
                            <p>Find a food pantry near you and explore the free services that can help you and your family.</p>
                            <a href='#'>Summer Feeding Programs for Kids</a>
                            <a href='#'>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
