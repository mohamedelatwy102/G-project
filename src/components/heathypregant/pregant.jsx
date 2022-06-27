
import './pregant.css'
import imgnew from '../../assets/breakfast3.webp'
import imgnew2 from '../../assets/breakfast5.webp'
import fiber from '../../assets/fiber2.webp'
const Pregant = () => {
    
    
        return ( 
            <>
   <section className=".slide-top img-advice">
                <div className="cont shad">
                    <span>Patient Education</span>
                    <h3 className="header">Diabetes During Pregnancy & Diet Tips</h3>
                    <p>Blood sugar control during pregnancy is important for your health and the health of your baby.</p>
                </div>
            </section>
            <div className="container">
               <h2 className='fromhead'>Diet tips for pregnant women to control blood sugar during pregnancy.</h2>
               <div className='main'>
                <div className='pgimg'>
                    <img src={imgnew} alt="" />
                </div>
                  <div className='text'>
                    <h3>Eat 3 meals and 2–3 snacks per day</h3>
                    <p>Eating too much at one time can cause your blood sugar to go too high. Eat smaller meals and have snacks. You have increased nutritional needs during your pregnancy.</p>
                  </div>
                
               </div>
               <div className='main'>
                  <div className='text'>
                    <h3> One 8-ounce cup of milk at a time</h3>
                    <p>Milk is a healthy food and it is an important source of calcium. Because it is a liquid, milk sugar is absorbed quickly. Having too much milk at one time can lead to high blood sugar. It is best to limit milk to one cup at a time.</p>
                  </div>
                  <div className='pgimg'>
                    <img src={imgnew2} alt="" />
                </div>
                
               </div>
               <div className='main'>
               <div className='pgimg'>
                    <img src={fiber} alt="" />
                </div>
                  <div className='text'>
                    <h3> Eat more fiber</h3>
                    <p>Try whole grain bread, brown rice, wild rice, whole oats, barley, millet or any other whole grains. Include split peas, lentils</p>
                  </div>
                
               </div>
               <h2 className='fromhead'>Some other important tips for pregnant women that they should take care of.</h2>
               <div className='advance'>
                <h3 className='otheradv'>Measure your servings of starchy foods</h3>
                <p className='otherpadv'>Include a starch choice at every meal. A reasonable serving size is about 1 cup of cooked rice, grain, noodles or potatoes, or 2 pieces of bread, per meal.</p>
               </div>
            <div className='advance'>
                <h3 className='otheradv'>One small portion of fruit at a time</h3>
                <p className='otherpadv'>Fruits are nutritious, but because they have natural sugars, eat only one serving at a time. A serving of fruit is one small piece of fruit, or ½ large fruit, or about 1 cup of mixed fruit. Avoid fruit that has been canned in syrup. Do not drink fruit juice. </p>
            </div>
            <div className='advance'>
                <h3 className='otheradv'>Breakfast Matters</h3>
                <p className='otherpadv'>Blood sugar can be difficult to control in the morning because that is when pregnancy hormones are very strong. These hormones can cause your blood sugar levels to rise even before you eat.

Dry cereals, fruits, and milk are not the best choices for breakfast because they are digested very quickly and can cause blood sugar levels to rise quickly.

A breakfast of whole grains plus a protein food is usually best.</p>
            </div>
            <div className='advance'>
                <h3 className='otheradv'>Avoid fruit juice and sugary drinks</h3>
                <p className='otherpadv'>It takes several pieces of fruit to make a glass of juice. Juice is high in natural sugar. Because it is liquid, it raises blood sugar levels quickly. Avoid regular sodas and sugary soft drinks for the same reason. You may use diet drinks and Crystal Light.</p>
            </div>
            <div className='advance'>
                <h3 className='otheradv'> Strictly limit sweets and desserts </h3>
                <p className='otherpadv'>Cakes, cookies, candies, and pastries are high in sugar and are likely to raise blood sugar levels too much. These foods often contain a lot of fat and offer very little nutrition.</p>
            </div>
            <div className='advance'>
                <h3 className='otheradv'>Stay away from sugars </h3>
                <p className='otherpadv'>Do not add any sugar, honey, or syrup to your foods.</p>
            </div>
            <div className='advance'>
                <h3 className='otheradv'> Look out for sugar-alcohols in sugar-free foods</h3>
                <p className='otherpadv'>Sugar alcohol is often used to make sugar-free desserts and syrups. These products can be labeled "sugar free" but may contain the same amount of carbohydrate as the versions made with regular sugar</p>
            </div>
        </div>
            <div className='footer'>
                <h4>"Life is not merely to be alive, but to be well."</h4>
                <p>To motivate someone with diabetes, make it effortless for them to follow the rules, help them visualize the success, be supportive, encourage a healthy and active lifestyle</p>
            </div>

            
            
            </>

         );

}
 
export default Pregant;