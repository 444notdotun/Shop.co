import { Link } from 'react-router-dom'
import Styles from './body.module.css'

const Registery = () => {
  return (
    <div className={Styles['register-wrapper']}>
      <h1>JOIN THE COMMUNITY</h1>
      <div>
        <p>FULL NAME</p>
        <input type="text" placeholder="Enter your full name" />
      </div>
      <div>
        <p>EMAIL ADDRESS</p>
        <input type="text" placeholder="Enter your email" />
      </div>
      <div>
        <p>PASSWORD</p>
        <input type="password" placeholder="Create a password" />
      </div>
      <div className={Styles['checkbox-row']}>
        <input type="checkbox" />
        <p>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>
      </div>
      <button>SIGN UP</button>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div>
  );
}

export default Registery