import '../../styles/mapPage.css'
import monmouth from '../../images/map-page-images/monmouth.png'
import mercer from '../../images/map-page-images/mercer.png'
import sussex from '../../images/map-page-images/susexx.png'
import camden from '../../images/map-page-images/camden.png'
import snapApply from '../../images/map-page-images/snap-apply.png'
import snapBenefits from '../../images/map-page-images/snap-updates.png'
import mobileImg from '../../images/map-page-images/mobile-img.png'

import numberOne from '../../images/map-page-images/number-1-1.png'
import numberTwo from '../../images/map-page-images/number-2-1.png'
import numberThree from '../../images/map-page-images/number-3-1.png'
import left from '../../images/map-page-images/left.png'
import right from '../../images/map-page-images/right.png'
import mobileBus from '../../images/map-page-images/mobile-bus.png'

function MapPage(){
    return(
        <div>
            <section className="interior-hero map-page-hero">
                <div>
                    <h1>Find Free Food And Services Near You</h1>
                    <p>The Community FoodBank of New Jersey can help connect you with resources for free food and other services. We partner directly with over 800 partner agencies across 11 counties that provide food and other services to neighbors in their communities. We can also help you apply or get recertified for SNAP benefits.</p>
                    <a href='#'><button className='orange-button'>Find Food</button></a>
                </div>
            </section>
            <section className='interior-gray-con'>
                <div className='interior-gray'>
                    <div className='map-gray-left'>
                        <h1><strong>Find Food</strong> Near You</h1>
                        <p>To locate CFBNJ partner food pantries, soup kitchens and shelters in <strong>Atlantic, Bergen, Cape May, Cumberland, Essex, Hudson, Middlesex, Morris, Passaic, Somerset or Union County:</strong></p>
                    </div>
                    <div className='map-gray-right'>
                        <div>
                            <img src={numberOne}></img>
                            <p>Enter your ZIP code into the searchbar below.</p>
                        </div>
                        <div>
                            <img src={numberTwo}></img>
                            <p>Select the maximum distance that you’re able to travel.</p>
                        </div>
                        <div>
                            <img src={numberThree}></img>
                            <p>Press the search button to view a map and a list of food pantry locations near you.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='map-con'>
                <form>
                    <input placeholder='ZIPCODE'></input>
                    <select name="distance">
                        <option value="5">5 Miles</option>
                        <option value="10">10 Miles</option>
                    </select>
                    <button>SEARCH</button>
                </form>
                <div className='map-blocks'>
                    <div className='map-block'>
                        <h3>Jewish Family Service</h3>
                        <h3>Distance number</h3>
                        <h4>away</h4>
                        <div className='block-type'>
                            <img src='#'></img>
                            <p>Food Pantry</p>
                        </div>
                        <p>655 Westfield Ave Elizabeth, NJ 9085789189</p>
                        <div className='block-buttons'>
                            <button className='orange-button'>Get Directions</button>
                            <button className='orange-button'>Call</button>
                        </div>
                    </div>
                    <div className='map-block'>
                        <h3>Jewish Family Service</h3>
                        <h3>Distance number</h3>
                        <h4>away</h4>
                        <div className='block-type'>
                            <img src='#'></img>
                            <p>Food Pantry</p>
                        </div>
                        <p>655 Westfield Ave Elizabeth, NJ 9085789189</p>
                        <div className='block-buttons'>
                            <button className='orange-button'>Get Directions</button>
                            <button className='orange-button'>Call</button>
                        </div>
                    </div>
                    <div className='map-block'>
                        <h3>Jewish Family Service</h3>
                        <h3>Distance number</h3>
                        <h4>away</h4>
                        <div className='block-type'>
                            <img src='#'></img>
                            <p>Food Pantry</p>
                        </div>
                        <p>655 Westfield Ave Elizabeth, NJ 9085789189</p>
                        <div className='block-buttons'>
                            <button className='orange-button'>Get Directions</button>
                            <button className='orange-button'>Call</button>
                        </div>
                    </div>
                </div>
                <div className='bottom-map-text'>
                    <p>You can also text <strong>“FindFood” (English Service)</strong> or <strong>“Comida” (Spanish Service)</strong> to <a>908-224-7776</a>
                    to receive helpful information on your phone.</p>
                    <p>Please note: The addresses, phone numbers and hours of our agency partners are subject to change. Please confirm with the individual organization. You can reach our multilingual Food Assistance Line at <a>908-838-4831</a></p>
                </div>
            </section>
            <section className='resource-con'>
                <h2>Resources for NJ Residents Served by Other Food Banks</h2>
                <div className='resource-blocks'>
                    <div>
                        <img src={monmouth}></img>
                        <p>Monmouth and Ocean Counties</p>
                    </div>
                    <div>
                        <img src={mercer}></img>
                        <p>Mercer County</p>   
                    </div>
                    <div>
                        <img src={sussex}></img>
                        <p>Sussex, Hunterdon and Warren Counties</p>
                    </div>
                    <div>
                        <img src={camden}></img>
                        <p>Camden, Gloucester, Salem and Burlington counties</p>
                    </div>
                </div>
            </section>
            <section className='divider'>

            </section>
            <section className='snap-benefits-con'>
                <h2>Apply or Recertify for SNAP Benefits <strong>(Formerly Food Stamps)</strong></h2>
                <div className='snap-benefits'>
                    <div>
                        <img src={snapApply}></img>
                        <p>How To Apply For SNAP</p>
                        <button className='orange-button'>APPLY FOR SNAP</button>
                    </div>
                    <div>
                        <img src={snapBenefits}></img>
                        <p>SNAP Benefits Updates & Info</p>
                        <button className='orange-button'>rEAD mORE</button>
                    </div>
                </div>
            </section>
            <section className='mobile-food-con'>
                <div className='mobile-on-site'>
                    <img src={mobileImg}></img>
                    <h2>Mobile & On-Site Food Pantries in South Jersey</h2>
                    <h4>(Serving Atlantic, Cape May, and Cumberland Countries)</h4>
                    <p>We welcome all New Jersey residents to receive food from our mobile and on-site food pantries operated by CFBNJ in Egg Harbor Township.</p>
                    <p>We have made two important changes to these programs:</p>
                    <ol>
                        <li>ID or proof of residence is helpful but neither are required</li>
                        <li>We are happy to serve <strong>any New Jersey resident</strong> at any of these pantries, no matter what city or county you live in.</li>
                    </ol>
                </div>
                <div className='mobile-on-dates'>
                    <h3>Our on site pantry at 6735 Black Horse Pike, Egg Harbor Township is open to clients during the following times:</h3>
                    <div className='mobile-on-dates-flex'>
                        <ol>
                            <li><strong>Monday:</strong> Closed</li>
                            <li><strong>Tuesday:</strong> 1PM – 4PM</li>
                        </ol>
                        <ol>
                            <li><strong>Wednesday:</strong> 1PM – 4PM</li>
                            <li><strong>Thursday:</strong> 1PM – 4PM</li>
                        </ol>
                        <ol>
                            <li><strong>Friday:</strong> 1PM – 4PM</li>
                            <li><strong>Saturday:</strong> 9AM – 1PM</li>
                            <li><strong>Sunday:</strong> Closed</li>
                        </ol>
                    </div>
                    <p>Please make an appointment by calling the pantry phone at 908-418-8716.</p>
                    <button className='orange-button'>Call Now</button>
                </div>
                <div className='mobile-scroll-con'>
                    <h3>Mobile Food Pantry Dates & Times</h3>
                    <h3>Mondays</h3>
                    <div className='mobile-scroll'>
                        <button><img src={left}></img></button>
                        <div>
                            <p className='mobile-slide-date'><strong>August 1st</strong></p>
                            <p>Wildwood Housing Authority</p>
                            <p>3700 New Jersey Ave.</p>
                            <p>Wildwood, NJ 08260</p>
                            <p>9:30AM - 11:30AM</p>
                        </div>
                        <div>
                            <p className='mobile-slide-date'><strong>August 2st</strong></p>
                            <p>Wildwood Housing Authority</p>
                            <p>3700 New Jersey Ave.</p>
                            <p>Wildwood, NJ 08260</p>
                            <p>9:30AM - 11:30AM</p>
                        </div>
                        <button><img src={right}></img></button>
                    </div>
                    <h3>Tuesday</h3>
                    <div className='mobile-scroll'>
                        <button><img src={left}></img></button>
                        <div>
                            <p className='mobile-slide-date'><strong>August 1st</strong></p>
                            <p>Wildwood Housing Authority</p>
                            <p>3700 New Jersey Ave.</p>
                            <p>Wildwood, NJ 08260</p>
                            <p>9:30AM - 11:30AM</p>
                        </div>
                        <div>
                            <p className='mobile-slide-date'><strong>August 2st</strong></p>
                            <p>Wildwood Housing Authority</p>
                            <p>3700 New Jersey Ave.</p>
                            <p>Wildwood, NJ 08260</p>
                            <p>9:30AM - 11:30AM</p>
                        </div>
                        <button><img src={right}></img></button>
                    </div>
                    <h3>Wednesday</h3>
                    <div className='mobile-scroll'>
                        <button><img src={left}></img></button>
                        <div>
                            <p className='mobile-slide-date'><strong>August 1st</strong></p>
                            <p>Wildwood Housing Authority</p>
                            <p>3700 New Jersey Ave.</p>
                            <p>Wildwood, NJ 08260</p>
                            <p>9:30AM - 11:30AM</p>
                        </div>
                        <div>
                            <p className='mobile-slide-date'><strong>August 2st</strong></p>
                            <p>Wildwood Housing Authority</p>
                            <p>3700 New Jersey Ave.</p>
                            <p>Wildwood, NJ 08260</p>
                            <p>9:30AM - 11:30AM</p>
                        </div>
                        <button><img src={right}></img></button>
                    </div>
                    <h3>Thursday</h3>
                    <div className='mobile-scroll'>
                        <button><img src={left}></img></button>
                        <div>
                            <p className='mobile-slide-date'><strong>August 1st</strong></p>
                            <p>Wildwood Housing Authority</p>
                            <p>3700 New Jersey Ave.</p>
                            <p>Wildwood, NJ 08260</p>
                            <p>9:30AM - 11:30AM</p>
                        </div>
                        <div>
                            <p className='mobile-slide-date'><strong>August 2st</strong></p>
                            <p>Wildwood Housing Authority</p>
                            <p>3700 New Jersey Ave.</p>
                            <p>Wildwood, NJ 08260</p>
                            <p>9:30AM - 11:30AM</p>
                        </div>
                        <button><img src={right}></img></button>
                    </div>
                    <h3>Friday</h3>
                    <div className='mobile-scroll'>
                        <button><img src={left}></img></button>
                        <div>
                            <p className='mobile-slide-date'><strong>August 1st</strong></p>
                            <p>Wildwood Housing Authority</p>
                            <p>3700 New Jersey Ave.</p>
                            <p>Wildwood, NJ 08260</p>
                            <p>9:30AM - 11:30AM</p>
                        </div>
                        <div>
                            <p className='mobile-slide-date'><strong>August 2st</strong></p>
                            <p>Wildwood Housing Authority</p>
                            <p>3700 New Jersey Ave.</p>
                            <p>Wildwood, NJ 08260</p>
                            <p>9:30AM - 11:30AM</p>
                        </div>
                        <button><img src={right}></img></button>
                    </div>
                    <div className='snap-app-truck-con'>
                        <div className='snap-app-truck'>
                            <img src={mobileBus}></img>
                            <p>SNAP application truck will be at these mobile pantry locations</p>
                        </div>
                        <p>Call Us for More Information: <a href="#">908-838-4981</a></p>
                        <button className='orange-button'>Call Now</button>
                    </div>
                </div>
            </section>
            <section className='map-page-iframe-con'>
                <div className='map-page-iframe-block'>
                    <h3>Free Summer Meal Programs For Kids</h3>
                    <div>
                        <div>
                            <h3>Find a summer meal program near you</h3>
                            <p>Please Note: Sites marked with a green pin indicate summer programs that require enrollment.</p>
                            <p>Through our annual Summer Food Service Program (SFSP), healthy and nutritious meals prepared by our professional staff, volunteers, and Food Service Training Academy students will be served at various sites across the state, including camps, Boys & Girls Clubs, libraries and more. These meals will be available onsite at the locations mapped below. In South Jersey, where child hunger is especially high, CFBNJ’s Egg Harbor Township location is continuing its longstanding summer partnership with <a href='#'>let us eat – please</a>, an initiative with Atlantic County law firm Cooper Levenson that provides biweekly groceries to families in need at participating school districts.</p>
                        </div>
                        <div>
                            <iframe src='about:blank'></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MapPage