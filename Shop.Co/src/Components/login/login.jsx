import React from 'react'
import Styles from './login.module.css'
import Footer from '../Register/footer/footer'
import Navbar from '../Register/navbar/navbar'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div>
            <Navbar />
            <div className={Styles.loginWrapper}>
            <div className={Styles.loginLeft}>
                <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
            </div>
            <div className={Styles.loginRight}>
                <h1>SHOP.CO</h1>
                <h1>LOGIN TO YOUR ACCOUNT</h1>
                <h4>Welcome back! please enter your details</h4>
                <form action="">
                    <h3>EMAIL ADDRESS</h3>
                    <input type="text" placeholder="enter your email" />
                    <div className={Styles.passwordRow}>
                        <h3>PASSWORD</h3>
                        <p>forgot password?</p>
                    </div>
                    <input type="password" placeholder="......." />
                    <div className={Styles.loginBtnWrap}>
                        <button>LOGIN</button>
                    </div>
                </form>
                <hr />
                <div className={Styles.socialBtns}>
                    <button>GOOGLE</button>
                    <button>APPLE</button>
                </div>
                <p className={Styles.signupText}>Don't have an account? <span><Link to='/register'>Sign Up</Link></span></p>
                </div>
                
                </div>
        <Footer />
        </div>
       
    )
}

export default Login