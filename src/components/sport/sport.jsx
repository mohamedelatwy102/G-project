import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Show from '../slider/box_show';
import './sport.css';
const Sport = () => {
    const [sport, setsport] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/sport').then((res) => {
            setsport(res.data)
        })

    }, [])
    return (
        <>
            <Show />
            <section className="advice-sport">
                <div className="container">
                    <div className="content-advice">
                        <h2 className='header'>
                            Even little changes make a big difference
                        </h2>
                        <p>If you’re still struggling with getting started or feeling overwhelmed by the idea of starting a more active life,
                            take heart: every change, no matter how small, makes a difference in your ability to manage diabetes. Even losing 10-15 pounds can have a significant impact on your health.
                            The power to change is firmly in your hands—so get moving today.</p>
                        <div className="question">
                            <h2>Need some tips to help you along your fitness journey</h2>
                            <div className="content-ques">
                                <h4>The Benefits of Walking</h4>
                                <span>Walking is one of the easiest activities to start with, and most people with diabetes can do it.</span>
                            </div>
                            <div className="content-ques">
                                <h4>Putting the fun in fitness</h4>
                                <span>Exercise is often recommended prescription-style, not suggested as a fun part of life. Reframing physical activity is key.</span>
                            </div>
                            <div className="content-ques">
                                <h4>Putting the fun in fitness</h4>
                                <span>Exercise is often recommended prescription-style, not suggested as a fun part of life. Reframing physical activity is key.</span>
                            </div>
                            <div className="content-ques">
                                <h4>Sports drinks impact on glucose (blood sugar)</h4>
                                <span>Dehydration can lead to mildly higher blood sugar levels or significant spikes in your blood sugar.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sport-box">
                <div className="container">
                    <h2 className='header'>We’re here to help.</h2>
                    <div className="content-sport">
                        {sport.map((el) => {
                            return(
                                <div className="box" key={el.id}>
                                <img src={el.img} alt="" />
                                <div className="text">
                                    <h3>{el.des}</h3>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sport;