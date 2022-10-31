import React from 'react';
import './counter.css'
import CountDown from './CountDownTime';



const ShowCounter = () => {
    return (

        <div className="home-counter">
            <div className="home-counter2">
                <div className="home-counter3">
                    <h2 className="home-mint-counter">Days For Mint</h2>
                    <div className="home-counter4">

                        <CountDown/>


                        <div className="mint-display-timer">
                            <h1 className="mint-day">Days</h1>
                            <h1 className="mint-day">Hours</h1>
                            <h1 className="mint-day">Minutes</h1>
                            <h1 className="mint-day">Seconds</h1>
                        </div>

                        <div className="home-mint-button">
                            <button disabled className="redirect-mintpage"><p className="home-mint-button2">Mint</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default ShowCounter
