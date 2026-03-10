import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Styles from './item.module.css'

const ProductDetail = () => {
  const { state } = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(state?.product || null)
  const [loading, setLoading] = useState(!state?.product)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!product) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [id, product])

  if (loading) return <p className={Styles.loading}>Loading...</p>
  if (!product) return <p className={Styles.loading}>Product not found.</p>

  const stars = Math.round(product.rating?.rate ?? 0)
  const ratingCount = product.rating?.count ?? null

  return (
    <div className={Styles.page}>

     
      <nav className={Styles.breadcrumb}>
        <span onClick={() => navigate('/')} className={Styles.crumbLink}>Home</span>
        <span className={Styles.crumbSep}>/</span>
        <span onClick={() => navigate(-1)} className={Styles.crumbLink}>Shop</span>
        <span className={Styles.crumbSep}>/</span>
        <span className={Styles.crumbActive}>{product.title}</span>
      </nav>

      <div className={Styles.container}>

       
        <div className={Styles.imagePanel}>
          <div className={Styles.imageWrapper}>
            <img src={product.image} alt={product.title} className={Styles.image} />
          </div>
        </div>

      
        <div className={Styles.details}>
          <p className={Styles.category}>{product.category}</p>
          <h1 className={Styles.title}>{product.title}</h1>

         
          <div className={Styles.ratingRow}>
            <div className={Styles.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < stars ? Styles.starFilled : Styles.starEmpty}>★</span>
              ))}
            </div>
            <span className={Styles.ratingText}>
              {product.rating?.rate}/5
              {ratingCount && <span className={Styles.ratingCount}> ({ratingCount} reviews)</span>}
            </span>
          </div>

          
          <p className={Styles.price}>${product.price}</p>

          <hr className={Styles.divider} />

         
          <p className={Styles.descLabel}>Description</p>
          <p className={Styles.description}>{product.description}</p>

          <hr className={Styles.divider} />

          
          <div className={Styles.actions}>
            <div className={Styles.quantityControl}>
              <button className={Styles.qtyBtn} onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
              <span className={Styles.qtyValue}>{quantity}</span>
              <button className={Styles.qtyBtn} onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            <button className={Styles.addToCart}>Add to Cart</button>
          </div>

          <button onClick={() => navigate(-1)} className={Styles.backBtn}>
            ← Back to products
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail