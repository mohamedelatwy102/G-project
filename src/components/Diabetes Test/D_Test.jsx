import React from "react";

import './D_testStyle.css'
import { useNavigate } from 'react-router-dom';
const Dtest = () => {

    const link = useNavigate()
    const click_submit = (e) => {
        e.preventDefault();
        link('/res',{replace:true})
    }
    return (
        <React.Fragment>
            <div className="content_test">
                <div class="main">
                    <form action="" method="post" onSubmit={click_submit}>
                        <label>Glucose</label>
                        <input type="number" class="main-input" name="data1" placeholder="Enter Glucose" />
                        <label>BloodPressure</label>
                        <input type="number" className="main-input" name="data2" placeholder="Enter BloodPressure" />
                        <label>Insulin</label>
                        <input type="number" className="main-input" name="data3" placeholder="Enter Insulin" />
                        <label >BMI</label>
                        <input type="number" class="main-input" name="data4" placeholder="Enter BMI" />
                        <label>Age</label>
                        <input type="number" class="main-input" name="data5" placeholder="Enter Age" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </ React.Fragment>
    );
}

export default Dtest;