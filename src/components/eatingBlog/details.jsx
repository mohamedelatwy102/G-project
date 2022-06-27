import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
    const [obj, setObj] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/food/${id}`).then(res => {
            setObj(res.data)
        }).catch(err => {

        })
    }, [])
    return (
        <>
            <div className="container">
              <div className="new">
                 <div className="details_show">
                    <div className="det_image">
                        <img src={obj.url} alt="" />
                    </div>
                    <div className="info">
                        <h2>{obj.name}</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Eos unde blanditiis aliquid distinctio debitis deleniti
                            ratione quam temporibus possimus,
                            eveniet et illo velit maxime, vitae consectetur eum delectus? Deleniti,
                            expedita.</p>
                    </div>
                 </div>
              </div>
            </div>
        </>
    );
}
export default Details;