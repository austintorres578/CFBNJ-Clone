import findFoodImage from '../../images/home-images/find-food (1).svg'
import takeActionImage from '../../images/home-images/take-action.svg'
import donateTodayImage from '../../images/home-images/Donate.png'
import homePageGif from '../../images/home-images/Homepage1.gif'
import blogPlaceholderImage from '../../images/home-images/NJ-Devils-Partner-Spotlight-1-560x420.webp'
import helpDonoImage from '../../images/home-images/help-dono-image.png'
import helpVolImage from '../../images/header-images/Volunteer.svg'
import helpAdvoImage from '../../images/home-images/donoAdvoImage.png'
import helpFunImage from '../../images/home-images/helpFunImage.png'
import helpEventImage from '../../images/home-images/helpEventsImage.png'
import snapImage from '../../images/home-images/snap-image.jpg'
import jobImage from '../../images/home-images/job-image.jpg'
import bottomMailImage from '../../images/home-images/stay-informed.svg'

import '../../styles/home.css'

function Home(){
    return(
        <div>
        <section className="hero">
            <div className='hero-row padding'>
                <div className='hero-content'>
                    <h1>Give kids the best summer ever. $1 = 3 meals.</h1>
                    <a href="#"><button className='orange-button'>DONATE NOW</button></a>
                </div>
            </div>
        </section>
        <section className="float-boxes">
            <div className='padding'>
                <div>
                    <img src={findFoodImage}></img>
                    <h2>Find Food</h2>
                    <p>Locate food pantries, soup kitchens and other resources for you and you family.</p>
                    <a href='#'><button className='orange-button'>Find Food</button></a>
                </div>
                <div>
                    <img src={takeActionImage}></img>
                    <h2>Take Action</h2>
                    <p>Serve your community by volunteering, advocating, hosting a drive and more.</p>
                    <a href='#'><button className='orange-button'>Take Action</button></a>
                </div>
                <div>
                    <img src={donateTodayImage}></img>
                    <h2>Donate Today</h2>
                    <p>$1 = 3 Meals.</p>
                    <a href='#'><button className='orange-button'>Donate</button></a>
                </div>
            </div>
            <div className='gray-con'>
                <div className='padding'>
                    <h2>We serve as a champion for addressing root causes of hunger, delivering neighbor-centric solutions, and fostering collaborative partnerships across all sectors of society for New Jersey.</h2>
                </div>
            </div>
        </section>
        <section className='our-impact'>
            <div className='padding'>
                <div>
                    <h2>Our Impact</h2>
                    <p>More than 44 million people in the US are food insecure. Nearly <strong>1 million</strong> of them, including over <strong>260,000</strong> children, reside in New Jersey. See how we’re helping hungry neighbors in your community with food, help, and hope.</p>
                    <a href='#'><button className='orange-button'>ABOUT US</button></a>
                </div>
                <div>
                    <img src={homePageGif}></img>
                </div>
            </div>
        </section>
        <section className='highlights'>
            <div className='padding'>
                <h1>Highlights</h1>
                <div className='blog-scroll'>
                    <div>
                        <a href='#'><img src={blogPlaceholderImage}></img></a>
                        <a href='#'>This is a blog title</a>
                        <p>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</p>
                    </div>
                    <div>
                        <a href='#'><img src={blogPlaceholderImage}></img></a>
                        <a href='#'>This is a blog title</a>
                        <p>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</p>
                    </div>
                    <div>
                        <a href='#'><img src={blogPlaceholderImage}></img></a>
                        <a href='#'>This is a blog title</a>
                        <p>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</p>
                    </div>
                    <div>
                        <a href='#'><img src={blogPlaceholderImage}></img></a>
                        <a href='#'>This is a blog title</a>
                        <p>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</p>
                    </div>
                    <div>
                        <a href='#'><img src={blogPlaceholderImage}></img></a>
                        <a href='#'>This is a blog title</a>
                        <p>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='how-you-can-help-con'>
            <div className='padding'>
                <h1>How You Can Help</h1>
            </div>
            <div className='help-boxes'>
                <a href='#'>
                    <img src={helpDonoImage}></img>
                    <p>Donate</p>
                </a>
                <a href='#'>
                    <img src={helpVolImage}></img>
                    <p>Volunteer</p>
                </a>
                <a href='#'>
                    <img src={helpAdvoImage}></img>
                    <p>Advocate</p>
                </a>
                <a href='#'>
                    <img src={helpFunImage}></img>
                    <p>Fundraise</p>
                </a>
                <a href='#'>
                    <img src={helpEventImage}></img>
                    <p>Events</p>
                </a>
            </div>
        </section>
        <section className='stay-informed-section'>
           <div className='stay-informed-email'>
                <p>Stay Informed: </p>
                <input type='text' placeholder='Your Email'></input>
                <button>Submit</button>
           </div>
        </section>
        <section className='hero-map-con'>
            <div className='padding'>
                <h1>Free Food And Services</h1>
                <div className='hero-map'>
                    <div className='hero-map-text'>
                        <h3>Find A Food Pantry</h3>
                        <p>Whether you’re looking for food assistance or other services, we can help. Find a food pantry near you by entering your ZIP code. You can view hours, addresses and information for all of our food pantries, meal programs and distribution partners.</p>
                        <a href='#'><button className='orange-button'>Enter Your Zipcode</button></a>
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/d/embed?mid=1t2TS4V01o6lVDrjwkFHlq2CPzWn6GqgG&amp;ehbc=2E312F"></iframe>
                    </div>
                </div>
            </div>
            <div className='hover-button-con'>
                <div className='padding'>
                    <a href='#'><img src={snapImage}></img>
                        <p>Apply for SNAP Food Assistance</p>
                    </a>
                    <a href='#'><img src={jobImage}></img>
                        <p>Job Training</p>
                    </a>
                </div>
            </div>
        </section>
        <section className='home-bottom-mail-con'>
            <div className='padding'>
                <div>
                    <img src={bottomMailImage}></img>
                </div>
                <div>
                    <h1>Stay <strong>Informed</strong> About The Community FoodBank Of New Jersey</h1>
                    <p>Sign up to receive emails with updates, resources, and ways to get involved.</p>
                    <div className='stay-informed-email'>
                        <input type='text' placeholder='Your Email'></input>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </section>
        </div>

    )
}

export default Home