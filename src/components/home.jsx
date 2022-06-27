import React from "react";




import './home.css'
import Slider from "./slider/slide_lo_carb";
import Footer from "./slider/footer";

import imge1 from '../assets/type1.jfif';
import imge2 from '../assets/type11.jpg';
import imge3 from '../assets/type 111.jpg';
import imge4 from '../assets/type2.jpg';
import imge5 from '../assets/type22.jfif';
import imge6 from '../assets/type222.jpg';
import brain_icon from '../assets/iconbrain.jpg'
import fitness_icon from '../assets/fitnessicon.jpg'
import eat_icon from '../assets/eaticon.jpg'
const Home = () => {
    return (
        <>
            <nav className="nav_home">
                <div className="conatiner">
                    <ul>
                        <li>
                            <a href="#diabetes">Diabetes</a>
                        </li>
                        <li>
                            <a href="#living">Healthy living</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* start Diabetes */}
            <div className="silde_Diabetes" id="diabetes">
                <div className="container">
                    <div className="innerslide_Diabete">
                        <div className="box">
                            <p>Diabetes Overview</p>
                            <h1>The path to understanding <br /> diabetes starts here.</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* end Diabetes */}
            <div className="advice">
                <div className="container">
                    <q>Whether you’ve been newly diagnosed,
                        have been fighting against type 1 or type 2 diabetes for a while,
                        or are helping a loved one, you’ve come to the right place.
                        This is the start of gaining a deeper understanding of how you can live a healthier life—with all the tools, health tips, and food ideas you need.
                        Wherever you’re at with your diabetes,
                        know that you have options and that you don’t have to be held back. You can still live your best life.
                        All you have to do is take action and stick with it. </q>
                </div>
            </div>
            <div className="typeone">
                <div className="container">
                    <div className="innerTypeOne">
                        <h2 className="header_type">Understanding type 1</h2>
                        <p className="p_type">Here’s what you need to know about type 1 diabetes. Type 1 diabetes occurs at every age and in people of every race, shape, and size. There is no shame in having it,
                            and you have a community of people ready to support you.
                            Learning as much as you can about it and working closely with your diabetes care team can give you everything you need to thrive.</p>
                    </div>
                    <div className="image">
                        <div>
                            <img src={imge1} alt="type 1" />
                        </div>
                        <div>
                            <img src={imge2} alt="type 1" />
                        </div>
                        <div>
                            <img src={imge3} alt="type 1" />
                        </div>
                    </div>
                    <div className="p_type">
                        In type 1 diabetes, the body does not produce insulin. The body breaks down the carbohydrates you eat into blood sugar (blood glucose) that it uses for energy—and insulin is a hormone that the body needs to get glucose from the bloodstream into the cells of the body. With the help of insulin therapy and other treatments, everyone can learn to manage their condition and live long, healthy lives.
                    </div>
                </div>
            </div>
            <div className="typeone">
                <div className="container">
                    <div className="innerTypeOne">
                        <h2 className="header_type">Understanding type 2</h2>
                        <p className="p_type">Type 2 diabetes is the most common form of diabetes—and it means that your body doesn’t use insulin properly. And while some people can control their blood sugar levels with healthy eating and exercise, others may need medication or insulin to help manage it. Regardless,
                            you have options—and we're here with the tools, resources, and support you need.</p>
                    </div>
                    <div className="image">
                        <div>
                            <img src={imge5} alt="type 2" />
                        </div>
                        <div>
                            <img src={imge4} alt="type 2" />
                        </div>
                        <div>
                            <img src={imge6} alt="type 2" />
                        </div>
                    </div>
                    <div className="p_type">
                        A key part of managing type 2 diabetes is maintaining a healthy diet.
                        You need to eat something sustainable that helps you feel better and still makes you feel happy and fed. Remember, it’s a process. Work to find helpful tips and diet plans that best suit your lifestyle—and how you can make your nutritional intake work the hardest for you.
                    </div>
                </div>
            </div>
            {/* start Healthylive */}
            <div className="health" id="living">
                <div className="header_health">
                    <h2 className="header">To avoid diabetes and Healthy living</h2>
                    <i class="fa fa-angle-double-down" aria-hidden="true"></i>
                </div>
                <div className="loss_weight">
                    <div className="container">
                        <div className="box_loss_weight">
                            <div>
                                <span>Weight Loss</span>
                                <h2>Lose weight for good.</h2>
                                <p>When you have diabetes, being overweight brings added risks.
                                    Find the best strategy to keep extra weight off and stay healthy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end Healthylive */}
            {/* start devices */}
            <div className="adivces_more">
                <div className="container">
                    <div className="inner_adivces">
                        <div className="box_adivce">
                            <img src={brain_icon} alt=" brain_icon" />
                            <h3>More on mental health</h3>
                            <p>if you’re feeling depressed or overwhelmed , you’re not alone.
                                and asking for help is a sign of strength
                            </p>
                        </div>
                        <div className="box_adivce">
                            <img src={fitness_icon} alt=" brain_icon" />
                            <h3>get & stay fit</h3>
                            <p>somtime fitness successis just about finding the activites you love
                                andsticking with them
                            </p>
                        </div>
                        <div className="box_adivce">
                            <img src={eat_icon} alt=" brain_icon" />
                            <h3>nutrition</h3>
                            <p>the benefits of healthy eaiting can go alongway.
                                see what it cand do for you
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end devices */}
            <Slider />
            <Footer />
        </>
    );
}

export default Home;