import React, { useRef } from "react";

import './foot.css'
import image1 from '../../assets/foot.jpeg'
const FootTest = () => {
    const file = useRef();
    const shoose = useRef();
    const showImage = (obj) => {
        if (obj.current.value !== '') {
            shoose.current.style.color = '#128090'
            shoose.current.style.display = 'block'
        }
    }
    return (
        <>
            <section className="slide-top image-eye foot">
                <div className="content">
                    <span>Foot Health</span>
                    <h3 className="header">About Focus on Diabetes</h3>
                </div>
            </section>
            <section className="eye_advice">
                <div className="container">
                    <div className="eye_content margin">
                        <h3>Know the Warning Signs of Diabetic Foot Disease</h3>
                        <p>Foot problems most often happen when there is nerve damage, also called neuropathy.
                            This can cause tingling, pain (burning or stinging), or weakness in the foot. It can also cause loss of feeling in the foot, so you can injure it and not know it.
                            Poor blood flow or changes in the shape of your feet or toes may also cause problems</p>
                    </div>
                    <div className="eye_content">
                        <h3>Take care of your feet.</h3>
                        <p>
                            When you have diabetes, caring for your feet is very important in avoiding serious foot complications. Take care of your feet by doing the following:
                        </p>
                        <ul>
                            <li>Wash your feet thoroughly everyday</li>
                            <li>Dry them thoroughly, and don’t forget to dry between your toes</li>
                            <li>Moisturize your feet, but avoid moisturizing between your toes </li>
                            <li>Keep your toenails trim, and use an emery board to file down sharp edges</li>
                            <li>Wear shoes that fit well and don’t rub your feet</li>
                        </ul>
                    </div>
                </div>
                <div className="header_health">
                    <h2 className="header">Test Your Foot</h2>
                    <i class="fa fa-angle-double-down" aria-hidden="true"></i>
                </div>
            </section>
            <div className="container">
                <div className="box-test">
                    <div className='image-show'>
                        <img src={image1} alt="" />
                    </div>
                    <form action="" method='post'>
                        <label htmlFor="eye">
                            <i class="fa fa-picture-o" aria-hidden="true"></i> Choose file
                            <i ref={shoose} class="fa fa-check-circle-o" aria-hidden="true"></i>
                        </label>

                        <input ref={file} type="file" name='eyeTest' id='eye' onChange={() => showImage(file)} />
                        <button type='submit'>save</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FootTest;