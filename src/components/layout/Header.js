import '../../styles/header.css'

import headerLogo from '../../images/global images/cfbnj-logo.svg'
import findFoodImage from '../../images/header-images/Find-Food.svg'
import getHelpImage from '../../images/header-images/Get-Help.svg'
import takeActionImage from '../../images/header-images/Take-Action.svg'
import volunteerImage from '../../images/header-images/Volunteer.svg'
import ourStoryImage from '../../images/header-images/Our-Story.svg'
 

function Header(){

    console.log(document.querySelectorAll('.drop-toggle'))

    return(
        <header>
            <div className="clone-notification">
                <h3>THIS IS A CLONE OF <a href='https://cfbnj.org/'> CFBNJ.ORG</a>, IF YOU WANT TO MAKE A DONATION GO TO THEIR WEBSITE!!!!!!</h3>
            </div>
            <div className='header-top'>
                <div className='header-top-email'>
                    <p>Stay Informed:</p>
                    <input type='email' placeholder='Your Email'>
                    
                    </input>
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
                    <button className='header-search-button'>

                    </button>
                </div>
            </div>
            <div className='main-header'>
                <a className='site-logo' href='#'><img src={headerLogo}></img></a>
                <nav>
                    <a href='#'>
                        <img src={findFoodImage}></img>
                        <p>Find Food</p>
                    </a>

                    <a className='drop-toggle' href='#'>
                        <img src={getHelpImage}></img>
                        <div>
                            <p>Get Help</p>
                            <span>^</span>
                        </div>
                    </a>

                    <a className='drop-toggle' href='#'>
                        <img src={takeActionImage}></img>
                        <div>
                            <p>Take Action</p>
                            <span>^</span>
                        </div>
                    </a>

                    <a className='drop-toggle' href='#'>
                        <img src={volunteerImage}></img>
                        <div>
                            <p>Volunteer</p>
                            <span>^</span>
                        </div>
                    </a>

                    <a className='drop-toggle' href='#'>
                        <img src={ourStoryImage}></img>
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
            </div>
        </header>
    )


}

export default Header