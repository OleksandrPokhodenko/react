import { useNavigate, useParams } from "react-router";
import frontRoutes from "../../routes/frontRoutes";
import apiRoutes from "../../api/apiRoutes";
import useFetch from "../../hooks/useFetch";
function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const url = apiRoutes.getProductById(id)
    const { dataList: product, isLoading, error } = useFetch(url, [id])
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
            <button onClick={() => navigate(frontRoutes.pages.products.index)} className="product__button">До магазину</button>
        </div>
    );
}

export default ProductDetails;