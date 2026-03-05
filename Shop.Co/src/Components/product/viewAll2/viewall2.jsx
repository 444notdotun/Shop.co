import { useEffect, useState } from "react"
import Styles from "./view.module.css"

const Viewall2 = () => {
    const [products, setProducts] = useState([])

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
                {products.map((oneProduct) => (
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
        
        </div>
    )
}

export default Viewall2