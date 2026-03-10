import { useEffect, useState } from "react"
import Styles from './newArrival.module.css'
import { Link, useNavigate } from "react-router-dom"

const NewArrival = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [limit, setLimit] = useState(4)
  const navigate = useNavigate()

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

  if (loading) return <p className={Styles.loading}>Loading...</p>

  return (
    <div className={Styles.wrapper}>
      <h2 className={Styles.heading}>NEW ARRIVALS</h2>
      <div className={Styles.grid}>
        {products.slice(0, limit).map((product) => (
          <div
            key={product.id}
            className={Styles.card}
            onClick={() => navigate(`/item/${product.id}`, { state: { product } })}
          >
            <div className={Styles['img-wrap']}>
              <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <p className={Styles.category}>{product.category}</p>
            <p className={Styles.price}>${product.price}</p>
          </div>
        ))}
      </div>
        <button className={Styles['view-btn']}>
          <Link to={"./viewAll"}></Link>View All
        </button>
     
    </div>
  )
}

export default NewArrival