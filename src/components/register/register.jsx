import './register.css'
const Register = () => {
    return (
        
    <div class="regist">
        <div class="conten">
            <div class="loginform">
                <p>New account ?</p>
                 <hr/>
                <form action="">
                  <input type="text" name="username" placeholder="UserName" class="forminput"/>
                  <input type="password" name= 'password' placeholder="password" class="forminput"/>
                  <input type="password" name="confirmpass" placeholder="confirm password" class="forminput"/>
                  <select required class="forminput" id="city" name="country" label="city">
                      <option value="" disabled selected hidden >City</option>
                      <option value="eg">Egypt</option>
                      <option value="ku">Kuwait</option>
                      <option value="uc">UAC</option>
                      <option value="sa">Saudi Arabia</option>

                      
                  </select>
                  <input type="email" name= 'email'placeholder="Email" class="forminput"/>
                  <input type="tel" name="phone" placeholder="phone number" class="forminput"/>
                  <button type="submit"> Register</button>
               
              </form>
            </div>
        </div>
    </div>
        
    );
}

export default Register;