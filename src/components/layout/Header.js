import React, { useEffect, useState, setState } from 'react';
import '../../styles/header.css'

import headerLogo from '../../images/global images/cfbnj-logo.svg'
import findFoodImage from '../../images/header-images/Find-Food.svg'
import getHelpImage from '../../images/header-images/Get-Help.svg'
import takeActionImage from '../../images/header-images/Take-Action.svg'
import volunteerImage from '../../images/header-images/Volunteer.svg'
import ourStoryImage from '../../images/header-images/Our-Story.svg'

// Select all dropdown elements

let exampleObj = {
    header:'',
    subText:'',
    links:[]
}

// let exampleObj = {
//     header:'ABOUT US',
//     subText:'Discover how our journey began almost 50 years ago, and how we are committed to ending hunger in New Jersey.',
//     links:['Hunger In New Jersey','Our History','Mission, Vision, Values','General FAQs']
// }

function hideMobileMenu(){
    document.querySelector('.mobile-nav-content-con').style.backgroundColor="rgba(0, 0, 0, 0.0)";
    document.querySelector('.mobile-nav-content').style.width="0px";
    document.querySelector('.mobile-nav-content').style.pointerEvents='none';
}

function revealMobileMenu(){
    document.querySelector('.mobile-nav-content-con').style.backgroundColor="rgba(0, 0, 0, 0.473)";
    document.querySelector('.mobile-nav-content').style.width="350px";
    document.querySelector('.mobile-nav-content').style.pointerEvents='all';
    
}

function revealRightLinks(Array){

    let resultArray = []

    for (let index = 0; index < Array.length; index++) {


          resultArray.push(<a href={Array[index]['Link'][1]}>{Array[index]['Link'][0]}</a>)
        
        
    }

    return resultArray
}

// revealRightLinks([{'Link':['Name 1','#']},{'Link':['Name 2','#']},{'Link':['Name 3','#']}])

revealRightLinks([{'Link':['Name 1','#']},{'Link':['Name 2','#']},{'Link':['Name 3','#']}])

function revealDropDown(className){
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

function closeDropdownsOnScroll(){
    let allDrops = document.querySelectorAll('.drops-con');
    for(let i = 0; i < allDrops.length; i++){
        console.log(allDrops[i])
            allDrops[i].style.opacity=0;
            allDrops[i].style.pointerEvents='none';
        }
}

window.addEventListener('scroll', closeDropdownsOnScroll);

function Header(){

    const [dropRight , setDropRight] = useState(
        {header:'Title',subText:'SubText',links:revealRightLinks([{'Link':['Name 1','#']},{'Link':['Name 2','#']},{'Link':['Name 3','#']}])}
    );
    // const [dropRight , setDropRight] = useState(
    //     {
    //         header:'Title',
    //         subText:'SubText',
    //         links:revealRightLinks([{'Link':['Name 1','#']},{'Link':['Name 2','#']},{'Link':['Name 3','#']}])
    //     }
    // );

    let object = 
    {header:'Title',subText:'SubText',links:revealRightLinks([{'Link':['Name 1','#']},{'Link':['Name 2','#']},{'Link':['Name 3','#']}])}

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

                    <a onMouseEnter={() => {revealDropDown('get-help-drop'); setDropRight( {header:'Free Food & Services',subText:'Find a food pantry near you and explore the free services that can help you and your family.',links:revealRightLinks([{'Link':['Summer Feeding Programs for Kids','#']},{'Link':['Learn More','#']}])}) }} className='drop-toggle' href='#'>
                        <img src={getHelpImage} alt="Get Help" />
                        <div>
                            <p>Get Help</p>
                            <span>^</span>
                        </div>
                    </a>

                    <a onMouseEnter={() => {revealDropDown('take-action-drop'); setDropRight({header:'Donate',subText:'Learn about all the ways to give a monetary gift, including recurring donations, planned gifts, tributes, and more to CFBNJ to lift up our neighbors.',links:revealRightLinks([{'Link':['Donate Now','#']},{'Link':['Give A Recurring Gift','#']},{'Link':['Honor and Memorial Tributes','#']},{'Link':['Appreciated Security, Stocks, and DAFs','#']},{'Link':['Learn More','#']}])})}} className='drop-toggle' href='#'>
                        <img src={takeActionImage} alt="Take Action" />
                        <div>
                            <p>Take Action</p>
                            <span>^</span>
                        </div>
                    </a>

                    <a onMouseEnter={() => {revealDropDown('volunteer-drop');setDropRight({header:'SIGN UP TO VOLUNTEER',subText:'Sign up to sort and pack food with your company, family, and friends at either our Hillside or Egg Harbor locations.',links:revealRightLinks([{'Link':['Sign Up Now','#']},{'Link':['Women Fighting Hunger','#']},{'Link':['The Care Crew','#']},{'Link':['FAQs','#']},{'Link':['Learn More','#']}])})}} className='drop-toggle' href='#'>
                        <img src={volunteerImage} alt="Volunteer" />
                        <div>
                            <p>Volunteer</p>
                            <span>^</span>
                        </div>
                    </a>

                    <a onMouseEnter={() => {revealDropDown('our-story-drop');setDropRight({header:'About Us',subText:'Discover how our journey began almost 50 years ago, and how we are committed to ending hunger in New Jersey.',links:revealRightLinks([{'Link':['Hunger in New Jersey','#']},{'Link':['Our History','#']},{'Link':['Mission, Vision, and Values','#']},{'Link':['General FAQs','#']},{'Link':['Learn More','#']}])})}} className='drop-toggle' href='#'>
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
                        <a onMouseEnter={()=>{setDropRight({header:'Free Food & Services',subText:'Find a food pantry near you and explore the free services that can help you and your family.',links:revealRightLinks([{'Link':['Summer Feeding Programs for Kids','#']},{'Link':['Learn More','#']}])})}} href='#'>Free Food & Services</a>
                        <a onMouseEnter={()=>{setDropRight({header:'APPLY FOR SNAP FOOD ASSISTANCE',subText:'Get free help applying for SNAP and accessing the benefits available to you and your family.',links:revealRightLinks([{'Link':['Learn More','#']}])})}} href='#'>Apply For Snap Food Services</a>
                        <a onMouseEnter={()=>{setDropRight({header:'JOB TRAINING',subText:'Sign up for one of CFBNJ’s free job training programs that can prepare you for a career in the culinary or logistics industries.',links:revealRightLinks([{'Link':['Food Service Training Academy','#']},{'Link':['Workforce Logistics Training Program','#']},{'Link':['Learn More','#']}])})}} href='#'>Job Training</a>
                        <a onMouseEnter={()=>{setDropRight({header:'HEALTHY RECIPES',subText:'Healthy recipes, cooking videos, and tips are all here. Browse through the info provided by our Nutrition Education team to get the most out of your grocery budget without compromising on nutrition.',links:revealRightLinks([{'Link':['Learn More','#']}])})}} href='#'>Healthy Recipes</a>
                    </div>
                    <div className='drop-right'>
                        <div className='free-food-links drop-links'>
                            <h3>{dropRight.header}</h3>
                            <p>{dropRight.subText}</p>
                            <div>{dropRight.links}</div>
                        </div>
                    </div>
                </div>
                <div className='take-action-drop drops-con'>
                    <div className='drop-left'>
                        <a onMouseEnter={()=>{setDropRight({header:'DONATE',subText:'Learn about all the ways to give a monetary gift, including recurring donations, planned gifts, tributes, and more to CFBNJ to lift up our neighbors.',links:revealRightLinks([{'Link':['Donate Now','#']},{'Link':['Give A Recurring Gift','#']},{'Link':['Honor and Memorial Tributes','#']},{'Link':['Appreciated Security, Stocks, and DAFs','#']},{'Link':['Learn More','#']}])})}} href='#'>Donate</a>
                        <a onMouseEnter={()=>{setDropRight({header:'VOLUNTEER',subText:'Explore the many opportunities to volunteer – whether that is packing food with your company, family, and friends at either our Hillside or Egg Harbor Township locations, distributing healthy food at one of our partners, or making phone calls from the comfort of your home.',links:revealRightLinks([{'Link':['Volunteer FAQs','#']},{'Link':['Sign Up','#']},{'Link':['Learn More','#']}])})}} href='#'>Volunteer</a>
                        <a onMouseEnter={()=>{setDropRight({header:'ADVOCATE',subText:'Take action to support our advocacy efforts that address the root causes of hunger and learn more about how CFBNJ collaborates with legislators.',links:revealRightLinks([{'Link':['Learn More','#']}])})}} href='#'>Advocate</a>
                        <a onMouseEnter={()=>{setDropRight({header:'FUNDRAISE',subText:'Coordinate a virtual or in-person fundraiser with friends, family, or coworkers.',links:revealRightLinks([{'Link':['Host A Fundraiser','#']},{'Link':['Virtual Food Drives','#']},{'Link':['Start an Online Fundraiser','#']},{'Link':['Learn More','#']}])})}} href='#'>Fundraise</a>
                        <a onMouseEnter={()=>{setDropRight({header:'DONATE FOOD & GOODS',subText:'Over one-third of our food is donated by generous supporters like you. Set up a food or special product drive, join our retail food donation program, and more.',links:revealRightLinks([{'Link':['Retail Food Donations','#']},{'Link':['Host an On-Site Food Drive','#']},{'Link':['Diaper & Period Product Drives','#']},{'Link':['Meal Kit & Packing Parties','#']},{'Link':['Learn More','#']}])})}} href='#'>Donate Food & Goods</a>
                        <a onMouseEnter={()=>{setDropRight({header:'MAKE A CORPORATE DONATION',subText:'Manufacturers, retailers, corporations, and small businesses can donate food, funds, and time.',links:revealRightLinks([{'Link':['Matching Gifts','#']},{'Link':['Volunteer','#']},{'Link':['Retail Food Donations','#']},{'Link':['Host an On-Site Food Drive or Special Packing Party','#']},{'Link':['Learn More','#']}])})}} href='#'>Make A Corporate Donation</a>
                        <a onMouseEnter={()=>{setDropRight({header:'EVENTS',subText:'Attend a CFBNJ event to show your support and meet other like-minded supporters.',links:revealRightLinks([{'Link':['Learn More','#']}])})}} href='#'>Events</a>
                        <a onMouseEnter={()=>{setDropRight({header:'YOUTH',subText:'Opportunities for youth engagement includes fundraising, food drives, and service days.',links:revealRightLinks([{'Link':['Students Change Hunger','#']},{'Link':['Learn More','#']}])})}} href='#'>Youth</a>
                    </div>
                    <div className='drop-right'>
                        <div className='free-food-links drop-links'>
                            <h3>{dropRight.header}</h3>
                            <p>{dropRight.subText}</p>
                            <div>{dropRight.links}</div>
                        </div>
                    </div>
                </div>
                <div className='volunteer-drop drops-con'>
                    <div className='drop-left'>
                        <a onMouseEnter={()=>{setDropRight({header:'SIGN UP TO VOLUNTEER',subText:'Sign up to sort and pack food with your company, family, and friends at either our Hillside or Egg Harbor locations.',links:revealRightLinks([{'Link':['Sign Up Now','#']},{'Link':['Women Fighting Hunger','#']},{'Link':['The Care Crew','#']},{'Link':['FAQs','#']},{'Link':['Learn More','#']}])})}} href='#'>Sign Up To Volunteer</a>
                        <a onMouseEnter={()=>{setDropRight({header:'CORPORATE GROUPS',subText:'Use your next company outing to give back to your community.',links:revealRightLinks([{'Link':['Learn More','#']}])})}} href='#'>Corporate Groups</a>
                        <a onMouseEnter={()=>{setDropRight({header:'SPECIAL VOLUNTEER PROGRAMS',subText:'View the opportunities available for regular volunteers to level up their participation at CFBNJ.',links:revealRightLinks([{'Link':['Women Fighting Hunger','#']},{'Link':['Emerging Leaders','#']},{'Link':['The Care Crew','#']},{'Link':['Learn More','#']}])})}} href='#'>Special Volunteer Programs</a>
                        <a onMouseEnter={()=>{setDropRight({header:'YOUTH',subText:'Opportunities for youth engagement includes fundraising, food drives, and service days.',links:revealRightLinks([{'Link':['Students Change Hunger','#']},{'Link':['Learn More','#']}])})}} href='#'>Youth</a>
                    </div>
                    <div className='drop-right'>
                        <div className='free-food-links drop-links'>
                            <h3>{dropRight.header}</h3>
                            <p>{dropRight.subText}</p>
                            <div>{dropRight.links}</div>
                        </div>
                    </div>
                </div>
                <div className='our-story-drop drops-con'>
                    <div className='drop-left'>
                    <a onMouseEnter={()=>{setDropRight({header:'ABOUT US',subText:'Discover how our journey began almost 50 years ago, and how we are committed to ending hunger in New Jersey.',links:revealRightLinks([{'Link':['Hunger in New Jersey','#']},{'Link':['Our History','#']},{'Link':['Mission, Vision, and Values','#']},{'Link':['General FAQs','#']},{'Link':['Learn More','#']}])})}} href='#'>About Us</a>
                        <a onMouseEnter={()=>{setDropRight({header:'STRATEGIC PLAN',subText:'Explore the roadmap of the future of CFBNJ and how we plan on helping hungry neighbors going forward.',links:revealRightLinks([{'Link':['Learn More','#']}])})}} href='#'>Strategic Plan</a>
                        <a onMouseEnter={()=>{setDropRight({header:'HOW A FOODBANK WORKS',subText:'Understand how food and hygiene supplies get from our two warehouses to your community.',links:revealRightLinks([{'Link':['Learn More','#']}])})}} href='#'>How A Food Bank Works</a>
                        <a onMouseEnter={()=>{setDropRight({header:'LEADERSHIP',subText:'Meet our executive leadership team and Board of Directors.',links:revealRightLinks([{'Link':['Learn More','#']}])})}} href='#'>Leadership</a>
                        <a onMouseEnter={()=>{setDropRight({header:'ANNUAL REPORT & FINANCIALS',subText:'Get a clear picture of our finances, how our programs impact the community, and how it all ties together.',links:revealRightLinks([{'Link':['Learn More','#']}])})}} href='#'>Annual Report & Financials</a>
                        <a onMouseEnter={()=>{setDropRight({header:'CAREERS',subText:'Check out our career opportunities and don’t miss a chance to put your talents to work for a great purpose.',links:revealRightLinks([{'Link':['Learn More','#']}])})}} href='#'>Careers</a>
                        <a onMouseEnter={()=>{setDropRight({header:'NEWS & PRESS',subText:'Keep up to date with the latest news about our work to end hunger.',links:revealRightLinks([{'Link':['Blog','#']},{'Link':['Learn More','#']}])})}} href='#'>News & Press</a>
                        <a onMouseEnter={()=>{setDropRight({header:'OUR LOCATIONS',subText:'We have locations in Hillside and Egg Harbor Township, each with their own events and volunteering opportunities.',links:revealRightLinks([{'Link':['Hillside','#']},{'Link':['Egg Harbor Township','#']},{'Link':['Learn More','#']}])})}} href='#'>Our Locations</a>
                        <a onMouseEnter={()=>{setDropRight({header:'OUR PROGRAMS',subText:'Learn about what we do to help our neighbors in need.',links:revealRightLinks([{'Link':['Learn More','#']}])})}} href='#'>Our Programs</a>
                    </div>
                    <div className='drop-right'>
                        <div className='free-food-links drop-links'>
                            <h3>{dropRight.header}</h3>
                            <p>{dropRight.subText}</p>
                            <div>{dropRight.links}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-nav'>
                <button onClick={revealMobileMenu}>Menu</button>
            </div>
            <div className='mobile-nav-content-con'>
                <div className='mobile-nav-content'>
                    <div id='mobile-close-button-con'>
                        <button onClick={hideMobileMenu} className='mobile-close-button'>X</button>
                    </div>
                    <div>
                        <a href='#'>Home</a>
                    </div>
                    <div>
                        <a href='#'>Home</a>
                    </div>
                    <div>
                        <a href='#'>Home</a>
                        <button>➔</button>
                    </div>
                    <div>
                        <a href='#'>Home</a>
                        <button>➔</button>
                    </div>
                    <div>
                        <a href='#'>Home</a>
                        <button>➔</button>
                    </div>
                    <div>
                        <a href='#'>Home</a>
                        <button>➔</button>
                    </div>
                    <div>
                        <a href='#'>Home</a>
                    </div>
                    <div>
                        <a href='#'>Home</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
