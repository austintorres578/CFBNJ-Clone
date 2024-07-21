import '../../styles/footer.css'

import footerLogo from '../../images/footer-images/footer-logo.svg'

function Footer(){
    return(
        <footer>
            <div className="footer-top">
                <div>
                    <img src={footerLogo}></img>
                </div>
                <div>
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
                </div>
                <div>
                    <a href='#'>Take Action</a>
                </div>
                <div>
                    <a href='#'>Volunteer</a>
                </div>
                <div>
                    <a href='#'>Our Story</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer