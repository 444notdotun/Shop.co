import Styles from './productPage1.module.css'

const Page1 = () => {
    return (
        <div>
            <div className={Styles['hero-wrapper']}>
                <div className={Styles['hero-content']}>
                    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p>Browse through our diverse collection and find the perfect pieces that reflect your unique taste and style.</p>
                    <button>SHOP NOW</button>
                    <div className={Styles.stats}>
                        <div className={Styles['stat-item']}>
                            <div className={Styles['stat-number']}>200+</div>
                            <p>International Brands</p>
                        </div>
                        <div className={Styles['stat-item']}>
                            <div className={Styles['stat-number']}>2,000+</div>
                            <p>High-Quality Products</p>
                        </div>
                        <div className={Styles['stat-item']}>
                            <div className={Styles['stat-number']}>30,000+</div>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className={Styles['hero-image']}>
                <span className={`${Styles.sparkle} ${Styles['sparkle-top']}`}>✦</span>
                <span className={`${Styles.sparkle} ${Styles['sparkle-mid']}`}>✦</span>
                </div>
            </div>
            <div className={Styles['brands-bar']}>
                <div><h3>VERSACE</h3></div>
                <div><h3>GUCCI</h3></div>
                <div><h3>PRADA</h3></div>
                <div><h3>ZARA</h3></div>
                <div><h3>H&M</h3></div>
            </div>
        </div>
    )
}

export default Page1