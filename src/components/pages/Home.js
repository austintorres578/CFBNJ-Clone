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
                    <img src='#'></img>
                    <h2>Find Food</h2>
                    <p>Locate food pantries, soup kitchens and other resources for you and you family.</p>
                    <a href='#'><button className='orange-button'>Find Food</button></a>
                </div>
                <div>
                    <img src='#'></img>
                    <h2>Take Action</h2>
                    <p>Serve your community by volunteering, advocating, hosting a drive and more.</p>
                    <a href='#'><button className='orange-button'>Take Action</button></a>
                </div>
                <div>
                    <img src='#'></img>
                    <h2>Donate Today</h2>
                    <p>$1 = 3 Meals.</p>
                    <a href='#'><button className='orange-button'>Donate</button></a>
                </div>
            </div>
        </section>
        </div>

    )
}

export default Home