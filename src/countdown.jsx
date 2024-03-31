import React, {useState, useEffect} from 'react'

function Script({targetDate}){
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining(targetDate));
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const getTimeRemaining = (targetDate) => {
        const now = new Date().getTime();
        const distance = targetDate - now;  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return {days, hours, minutes, seconds}
    };

    return(<>
        <div className="container">
            <h1>Countdown</h1>
            {targetDate.toString()}<br></br>
            Days: {timeLeft.days} <br />
            Hours: {timeLeft.hours} <br />
            Minutes: {timeLeft.minutes} <br />
            Seconds: {timeLeft.seconds}

        </div>
    </>)
}

export default Script