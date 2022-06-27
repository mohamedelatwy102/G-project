import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Carousel from 'react-elastic-carousel';


import './eatingStyle.css'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const EatingBlog = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/food').then(res => {
            setData(res.data)
        }).then(err => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <div className="container">
                <div className="box_meet">
                    <h1 className="header_slide">breakFast</h1>
                    <Carousel breakPoints={breakPoints}>
                        {data.map(el => {
                            if (el.des === 'breakfast') {
                                return (
                                    <div key={el.id} className="box_slide">
                                        <img src={el.url} alt="" />
                                        <NavLink to={`/details/${el.id}`}>{el.name}</NavLink>
                                    </div>
                                )
                            }
                        })}
                    </Carousel>
                </div>
                <div className="box_meet">
                    <h1 className="header_slide">Lunch</h1>
                    <Carousel breakPoints={breakPoints}>
                        {data.map(el => {
                            if (el.des === 'lunch') {
                                return (
                                    <div key={el.id} className="box_slide">
                                        <img src={el.url} alt="" />
                                        <NavLink to={`/details/${el.id}`}>{el.name}</NavLink>
                                    </div>
                                )
                            }
                        })}
                    </Carousel>
                </div>
                <div className="box_meet">
                    <h1 className="header_slide">Dinner</h1>
                    <Carousel breakPoints={breakPoints}>
                        {data.map(el => {
                            if (el.des === 'dinner') {
                                return (
                                    <div key={el.id} className="box_slide">
                                        <img src={el.url} alt="" />
                                        <NavLink to={`/details/${el.id}`}>{el.name}</NavLink>
                                    </div>
                                )
                            }
                        })}
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default EatingBlog;