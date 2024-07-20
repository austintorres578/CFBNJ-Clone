import '../../styles/header.css'

import headerLogo from '../../images/global images/cfbnj-logo.svg'
import findFoodImage from '../../images/header-images/Find-Food.svg'
import getHelpImage from '../../images/header-images/Get-Help.svg'
import takeActionImage from '../../images/header-images/Take-Action.svg'
import volunteerImage from '../../images/header-images/Volunteer.svg'
import ourStoryImage from '../../images/header-images/Our-Story.svg'
 

function Header(){
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

                    <a href='#'>
                        <img src={getHelpImage}></img>
                        <p>Get Help</p>
                    </a>

                    <a href='#'>
                        <img src={takeActionImage}></img>
                        <p>Take Action</p>
                    </a>

                    <a href='#'>
                        <img src={volunteerImage}></img>
                        <p>Volunteer</p>
                    </a>

                    <a href='#'>
                        <img src={ourStoryImage}></img>
                        <p>Our Story</p>
                    </a>
                    <a href='#' id='header-donation-button-con'>
                        <button>
                            <p>Donate</p>
                        </button>
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header