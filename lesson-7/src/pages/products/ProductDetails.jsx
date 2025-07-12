import { useNavigate, useParams } from "react-router";
import frontRoutes from "../../routes/frontRoutes";
import { useEffect, useState } from "react";
import apiRoutes from "../../api/apiRoutes";
function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const res = await fetch(apiRoutes.getProductById(id))
                const data = await res.json()
                setProduct(data)
            }
            catch (err) {
                setError(err)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [id])
    if (isLoading) return <div>Завантаження...</div>
    if (!product) return <div>Товар не знайдено</div>
    if (error) return <div>Помилка завантаження</div>
    return (
        <div className="cnt">
            <div className="product">
                <h3 className="product__title">{product.name}</h3>
                <img className="product__img" src={product.imageUrl} alt="Image" />
                <div className="product__price">{`${product.price}$`}</div>
            </div>
            <button onClick={() => navigate(frontRoutes.pages.products.index)} className="product__button">На головну</button>
        </div>
    );
}

export default ProductDetails;