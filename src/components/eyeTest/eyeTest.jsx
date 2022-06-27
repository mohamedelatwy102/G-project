import React, { useRef } from 'react';
import './eyeTest.css'

import image from '../../assets/eyeTwo.webp'
const EyeTest = () => {
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
            <section className="slide-top image-eye">
                <div className="content">
                    <span>Eye Health</span>
                    <h3 className="header">About Focus on Diabetes</h3>
                </div>
            </section>
            <section className="eye_advice">
                <div className="container">
                    <div className="eye_content">
                        <h3>Know the Warning Signs of Diabetic Eye Disease</h3>
                        <p>Some diabetic eye diseases have no signs or symptoms until they are too obvious to ignore, which might present as:</p>
                        <ul>
                            <li>Blurred vision</li>
                            <li>Dark spots or "holes"</li>
                            <li>Flashes of light</li>
                            <li>Seeing an increased amount of floaters</li>
                            <li>Poor night vision</li>
                        </ul>
                    </div>
                    <div className="eye_content">
                        <h3>Take Control of Eye Health</h3>
                        <p>
                            Routine eye exams can help identify problems that when treated can prevent or delay vision loss due to diabetic eye complications. Unfortunately,
                            many people with diabetes don't get their eyes examined regularly.
                            Find an eye care professional.
                        </p>
                    </div>
                </div>
                <div className="header_health">
                    <h2 className="header">Test Your EYE</h2>
                    <i class="fa fa-angle-double-down" aria-hidden="true"></i>
                </div>
            </section>
            <div className="container">
                <div className="box-test">
                    <div className='image-show'>
                        <img src={image} alt="" />
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
export default EyeTest;