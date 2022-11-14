/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'

const CountDown = () => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();


    const startTimer = () => {
        const countdownDate = new Date('Nov 20, 2022 00:00:00').toUTCString();
        const dateGetTime = new Date(countdownDate).getTime();

    
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = dateGetTime - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 24)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop timer
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);

    };


    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    }, [])


    return (
        <section className="countdown-box">
            <div className="countdown-mint">
                <div className="time-mint">
                    <p className="mint-display">{timerDays}</p>
                    <p className="mint-display">:</p>
                    <p className="mint-display">{timerHours}</p>
                    <p className="mint-display">:</p>
                    <p className="mint-display">{timerMinutes}</p>
                    <p className="mint-display">:</p>
                    <p className="mint-display">{timerSeconds}</p>
                </div>
            </div>
        </section>
    )
}

export default CountDown