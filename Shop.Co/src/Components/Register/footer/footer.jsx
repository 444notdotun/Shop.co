import Styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={Styles['footer-wrapper']}>
            <div className={Styles['footer-top']}></div>
            <div className={Styles['footer-body']}>
                <div className={Styles['footer-brand']}>
                    <h2>SHOP.CO</h2>
                    <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                    <div className={Styles['social-icons']}>
                        <a>f</a>
                        <a>in</a>
                        <a>tw</a>
                    </div>
                </div>
                <div className={Styles['footer-col']}>
                    <h2>COMPANY</h2>
                    <p>About Us</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                <div className={Styles['footer-col']}>
                    <h2>HELP</h2>
                    <p>Customer Support</p>
                    <p>Delivery Details</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className={Styles['footer-col']}>
                    <h2>FAQ</h2>
                    <p>Account</p>
                    <p>Orders</p>
                    <p>Payments</p>
                    <p>Shipping</p>
                </div>
            </div>
            <div className={Styles['footer-bottom']}>
                <p>Shop.co © 2000-2023, All Rights Reserved</p>
                <div className={Styles['payment-icons']}>
                    <span>VISA</span>
                    <span>MC</span>
                    <span>AMEX</span>
                    <span>PAY</span>
                    <span>GPAY</span>
                </div>
            </div>
        </div>
    )
}

export default Footer