import { useEffect, useState } from "react"
import Styles from './view.module.css'

const ViewAll = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error('Error fetching products:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    if (loading) 
        return <p className={Styles.loading}>Loading...</p>

    return (
        <div className={Styles.wrapper}>
            <h2 className={Styles.heading}>NEW ARRIVALS</h2>
            <div className={Styles.grid}>
                {products.map((product) => (
                    <div key={product.id} className={Styles.card}>
                        <div className={Styles['img-wrap']}>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <h3>{product.title}</h3>
                        <p className={Styles.category}>{product.category}</p>
                        <p className={Styles.price}>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ViewAll