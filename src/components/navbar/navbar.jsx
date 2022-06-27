import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';




import './navbar.css'
const NavBar = () => {
    const menu_bar = useRef();
    const over_login = useRef();
    const divLink = useRef()
    const show = (obj) => {
        obj.current.classList.add('show')
    }
    const hide = (obj) => {
        obj.current.classList.remove('show')
    }
    const showLink = (obj) => {
        obj.current.classList.toggle('show')
    }
    return (
        <>
            {/* start nav_bar */}
            <nav className="navbar">
                <div className="container">
                    <div className="inner-navbar">
                        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_czuo1i1a.json"
                            background="transparent"
                            speed="1"
                            style={{ width: '200px', height: '70px' }}
                            loop
                            autoplay>

                        </lottie-player>
                        <div className="box_navbar">
                            <div className="login" onClick={() => show(over_login)}>
                                <i class="fa fa-sign-in" aria-hidden="true"></i>
                                <span>login</span>
                            </div>
                            <div className="menu" onClick={() => show(menu_bar)}>
                                <span>menu</span>
                                <i class="fa fa-bars" aria-hidden="true"></i>                            </div>
                        </div>
                    </div>
                    <div className="menu-box" ref={menu_bar}>
                        {/* cross toolbar */}
                        <span class="fa fa-times" aria-hidden="true" onClick={() => hide(menu_bar)}></span>
                        {/* cross toolbar */}
                        <ul>
                            <li>
                                <NavLink to="/" onClick={_ => hide(menu_bar)}>
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <hr />
                            <li>
                                <NavLink to="/test" onClick={_ => hide(menu_bar)}>
                                    <i class="fa fa-tint" aria-hidden="true"></i>
                                    <span>Diabetes test</span>
                                </NavLink>
                            </li>
                            <hr />
                            <li>
                                <NavLink to="/dietForm" onClick={_ => hide(menu_bar)}>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                    <span>Diet Recommender</span>
                                </NavLink>
                            </li>
                            <hr />
                            <li>
                                <NavLink to="/myplanner" onClick={_ => hide(menu_bar)}>
                                    <i class="fa fa-table" aria-hidden="true"></i>
                                    <span>my planner</span>
                                </NavLink>
                            </li>
                            <hr />
                            <li>
                                <NavLink to="eatingblog" onClick={_ => hide(menu_bar)}>
                                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                                    <span>healthy eating blog</span>
                                </NavLink>
                            </li>
                            <hr />
                            <li>
                                <div className="toggle" onClick={() => showLink(divLink)}>
                                    <div className="toggle-box">
                                        <i class="fa fa-align-justify" aria-hidden="true"></i>
                                        <span> Complication Test</span>
                                    </div>
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </div>
                                <div className="toggle-link" ref={divLink}>
                                    <NavLink to="eyeTest" onClick={_ => hide(menu_bar)}>
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                        <span>eye</span>
                                    </NavLink>
                                    <NavLink to="footTest" onClick={_ => hide(menu_bar)}>
                                        <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                                        <span>foot</span>
                                    </NavLink>
                                </div>
                            </li>
                            <hr />
                            <li>
                                <NavLink to="sport" onClick={_ => hide(menu_bar)}>
                                    <i class="fa fa-male" aria-hidden="true"></i>
                                    <span>exercise</span>
                                </NavLink>
                            </li>
                            <hr />
                            <li>
                                <NavLink to="/advice" onClick={_ => hide(menu_bar)}>
                                    <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                    <span>Advices</span>
                                </NavLink>
                            </li>
                            <hr />
                            <li>
                                <NavLink to="/pregant" onClick={_ => hide(menu_bar)}>
                                    <i class="fa fa-female" aria-hidden="true"></i>
                                    <span>Healthy pregnancy</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/reading" onClick={_ => hide(menu_bar)}>
                                <i class="fa fa-line-chart" aria-hidden="true"></i>
                                    <span>Reading</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" onClick={() => show(over_login)}>
                                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                                    <span>login</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* end nav_bar */}
            <div className="over_login" ref={over_login}>
                <span class="fa fa-times" aria-hidden="true" onClick={() => hide(over_login)}></span>
                <form action="">
                    <h4 className='header_form'>Please login to access all feature</h4>
                    <div>
                        {/* <label htmlFor="username">Username</label> */}
                        <input type="text" name="username" id="username" autoComplete='off' placeholder='Enter username' />
                    </div>
                    <div>
                        {/* <label htmlFor="password">password</label> */}
                        <input type="password" name="password" id="password" placeholder='Enter Password' />
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                    <div>
                        <span>
                            New?
                            <NavLink to='/register' onClick={() => hide(over_login)}>register here</NavLink>
                        </span>
                    </div>
                </form>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;