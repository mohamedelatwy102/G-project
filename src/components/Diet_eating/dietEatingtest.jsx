
import './diet.css'
import image from '../../assets/pexels-daniela-constantini-5591663.jpg'
const DietForm = () => {
    return (
        <>
            <div class="main2">
                <div>
                    <img src={image} alt="" />
                </div>
                <div class="input">
                    <form action="">
                        <label >Cholesterol</label>
                        <input type="number" className="main-input" name="data1" placeholder="Enter Cholesterol" />
                        <label >Glyhb</label>
                        <input type="number" className="main-input" name="data2" placeholder="Enter Glyhb" />
                        <label>Age</label>
                        <input type="number" className="main-input" name="data3" placeholder="Enter Age " />
                        <div>
                            <label>Gender</label>
                            <div className="parent">
                                <div className="male">
                                    <input type="radio" className="gender" name="data4" id="male" />
                                    <label htmlFor="male" className="lab_gender">Male</label>
                                </div>
                                <div class="female">
                                    <input type="radio" className="gender" name="data4" id="female" />
                                    <label htmlFor="female" className="lab_gender">Female</label>
                                </div>

                            </div>
                        </div>
                        <label>Height After 10 cm</label>
                        <input type="number" class="main-input" name="data1" placeholder="Enter Height" />
                        <label>Weight</label>
                        <input type="number" class="main-input" name="data1" placeholder="Enter Weight" />
                        <label>Waist</label>
                        <input type="number" class="main-input" name="data1" placeholder="Enter Waist" />
                        <label>Hip</label>
                        <input type="number" class="main-input" name="data1" placeholder="Enter Hip" />
                        <input type="submit" value="Submit" />

                    </form>

                </div>

            </div>
        </>
    );
}

export default DietForm;