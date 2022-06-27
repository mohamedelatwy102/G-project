import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from 'react-elastic-carousel';


import "./silde.css"
// import imge1 from '../../assets/type1.jfif';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const Slider = () => {

    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/lowerCarb').then(res => {
            setdata(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <React.Fragment>
            <div className="parent_slide">
                <div className="container">
                    <h1 className='header_slide'>Food Diet</h1>
                    <Carousel breakPoints={breakPoints}>
                        {data.map((el, index) => {
                            return (
                                <div key={index} className="box_slide">
                                    <div className="image_slide">
                                        <img src={el.url} alt="" />
                                        <div className="list">
                                            <ul className='List_prod'>
                                                <li>Serving size</li>
                                                <li>Calories</li>
                                                <li>Total carbohydrates</li>
                                                <li>Total Fat</li>
                                                <li>protein</li>
                                            </ul>
                                            <ul className='List_prod'>
                                                {el.details.map((x, i) => {
                                                    return (
                                                        <li key={i}>{x}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <h2>{el.name}</h2>
                                </div>)
                        })}
                    </Carousel>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Slider;