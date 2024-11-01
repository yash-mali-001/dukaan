import React from 'react'
import './Home.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import home_image from '../Assets/hero_image.png'

const Home = () => {
  return (
    <div className='home'>
        <div className="home-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="home-hand-icon">
                    <p>NEW</p>
                    <img src={hand_icon}/>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>

            <div className="home-latest-btn">
                <div class="animation">Latest Collection</div>
                <img src={arrow_icon}/>
            </div>

        </div>

        <div className="home-right">
            <img src={home_image}/>
        </div>
    </div>
  )
}

export default Home
