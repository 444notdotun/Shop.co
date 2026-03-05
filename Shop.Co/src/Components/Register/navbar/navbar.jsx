import { Link } from 'react-router-dom'
import Styles from './navbar.module.css'
import Registery from '../RegisterBody/body'

const Navbar = () => {
  return (
    <div className={Styles['navbar-wrapper']}>
      <div className={Styles['announcement-bar']}>
        Sign up and get 20% off to your first order. <span><Link to='/register'>Sign Up Now</Link></span>
      </div>
      <nav className={Styles['nav']}>
        <h2>SHOP.CO</h2>
        <div className={Styles['nav-links']}>
          <p> <Link to="./products">Home</Link></p>
          <p>Shop</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar