import React from 'react';
import { useCountdown } from './Countdown';
import DateTimeDisplay from './DateTimeDisplay';
import './counter.css'

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};


const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (

        <div className="home-counter">
            <div className="home-counter2">
                <div className="home-counter3">
                    <h2 className="home-mint-counter">{days} Days Left For Mint</h2>
                    <div className="home-counter4">
                        <div className="mint-counter">
                            <DateTimeDisplay value={days} isDanger={days <= 3} />
                            <p>:</p>
                            <DateTimeDisplay value={hours} isDanger={false} />
                            <p>:</p>
                            <DateTimeDisplay value={minutes} isDanger={false} />
                            <p>:</p>
                            <DateTimeDisplay value={seconds} isDanger={false} />
                        </div>
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



const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;
