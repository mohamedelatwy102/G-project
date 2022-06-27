
import './advice.css'
import img from '../../assets/baby.jfif'
import img1 from "../../assets/pexels-photo-3768913.webp"
import img2 from "../../assets/pexels-photo-plant.webp"
import img3 from "../../assets/pexels-photo-4846300.webp"
const Advice = () => {
    return (
        <>
            <section className="slide-top image-advice">
                <div className="content shadow">
                    <span>Healthy Living</span>
                    <h3 className="header">General Advices for Diabetes</h3>
                    <p>Get expert information and advice on all aspects of living with diabetes to help people with diabetes manage their disease and avoid some of the risks of the disease.</p>
                </div>
            </section>
            <div className="advice">
                <div className="container">
                    <q>If you have been diagnosed with prediabetes — high blood sugar that doesn't reach the threshold of a diabetes diagnosis — lifestyle changes can prevent or delay the onset of disease.

Making a few changes in your lifestyle now may help you avoid the serious health complications of diabetes in the future, such as nerve, kidney and heart damage. It's never too late to start.</q>
                </div>
            </div>
        <div className="container">
            <h2 className='tohead'>The most important advice that diabetics should adhere to.</h2>
            <div class="content">
                <div class="card">
                    <img src={img1} alt=""/>
                    <div class="text">
                        <h3>Lose extra weight</h3>
                        <p>The American Diabetes Association recommends that people with prediabetes lose at least 7% to 10% of their body weight to prevent disease progression.</p>
                    </div>
                </div>
                <div class="card">
                    <img src={img2} alt=""/>
                    <div class="text">
                        <h3> Eat healthy plant foods</h3>
                        <p>Plants provide vitamins, minerals and carbohydrates in your diet. Carbohydrates include sugars and starches — the energy sources for your body.

</p>
                    </div>
                </div>
                <div class="card">
                    <img src={img3} alt=""/>
                    <div class="text">
                        <h3>Eat more fruit and veg</h3>
                        <p>It’s always a good thing aim to eat more at meal times and have them as snacks if you’re hungry. This can help you get the vitamins, minerals and fibre.</p>
                    </div>
                </div>
               
            </div>
            <h2 className='fromhead'>Some other tips that you should also follow and work with.</h2>
            <div className='advance'>
                <h3 className='otheradv'>Eat healthy fats</h3>
                <p className='otherpadv'>Fatty foods are high in calories and should be eaten in moderation. To help lose and manage weight, your diet should include a variety of foods with unsaturated fats, sometimes called "good fats."</p>
            </div>
            <div className='advance'>
                <h3 className='otheradv'>Be smart with snacks</h3>
                <p className='otherpadv'>If you want a snack, choose yoghurts, unsalted nuts, seeds, fruits and vegetables instead of crisps, chips, biscuits and chocolates. </p>
            </div>
            <div className='advance'>
                <h3 className='otheradv'>Eat less salt</h3>
                <p className='otherpadv'>Try to limit yourself to a maximum of 6g (one teaspoonful) of salt a day. </p>
            </div>
            <div className='advance'>
                <h3 className='otheradv'>Manage stress.</h3>
                <p className='otherpadv'> Stress and diabetes don't mix. Excess stress can elevate blood sugar levels. But you can find relief by sitting quietly for 15 minutes, meditating, or practicing yoga.</p>
            </div>
            <div className='advance'>
                <h3 className='otheradv'>See your doctor. </h3>
                <p className='otherpadv'>Get a complete checkup at least once a year, though you may talk to your doctor more often. At your annual physical, make sure you get a dilated eye exam, blood pressure check, foot exam, and screenings for other complications such as kidney damage, nerve damage, and heart disease.</p>
            </div>
            
            </div>
            <div className='footer'>
                <h4>Some other tips that you should also follow and work with Diabetes is a very common disease in the world</h4>
                <p>But people may never realize how they got diabetes, what will happen to them, and what they will suffer, so they must take care not to develop this disease.</p>
            </div>
            
        </>
    );
}

export default Advice;