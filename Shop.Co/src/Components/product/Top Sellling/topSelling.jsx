import { useEffect, useState } from "react"
import Styles from "./topselling.module.css"
import { Link } from "react-router-dom"

const TopSelling = () => {
    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(4)
    const [loading,setLoading]=useState(true)

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products')
                const data = await response.json()
                const prog = data.products
                setProducts(prog)
                
            } catch (error) {
                console.log(error)
            }finally{ setLoading(false)
            }

        }
        getAllProducts()
    }, [])

      if(loading) 
                return
             <p className={Styles.loading}>Loading...</p>

    return (
          
        <div className={Styles.wrapper}>
            <h2 className={Styles.heading}>TOP SELLING</h2>
            <div className={Styles.grid}>
                {products.slice(0, limit).map((oneProduct) => (
                    <div key={oneProduct.id} className={Styles.card}>
                        <div className={Styles['img-wrap']}>
                            <img src={oneProduct.images[0]} alt={oneProduct.title} />
                        </div>
                        <h3>{oneProduct.title}</h3>
                        <p className={Styles.category}>{oneProduct.category}</p>
                        <p className={Styles.price}>${oneProduct.price}</p>
                    </div>
                ))}
            </div>
            {limit < products.length && (
                <button className={Styles['view-btn']} ><Link to="/viewall2" style={{textDecoration}}>View All</Link></button>
            )}
        </div>
    )
}

export default TopSelling