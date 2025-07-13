import apiRoutes from "../../api/apiRoutes";
import { NavLink, useNavigate } from "react-router";
import frontRoutes from "../../routes/frontRoutes";
import useFetch from "../../hooks/useFetch";

function Products() {
    const navigate = useNavigate()
    const { dataList: productsList, isLoading, error } = useFetch(apiRoutes.productsList)
    if (isLoading) return <div>Завантаження...</div>
    if (error) return <div>Помилка завантаження</div>
    return (
        <div className="cnt">
            <ul className="products">
                {productsList?.map(prod => (
                    <li key={prod.id} className="products__item">
                        <NavLink to={frontRoutes.navigate.products.getDetailLink(prod.id)} className={({ isActive }) => (isActive ? "products__link active" : 'products__link')}>
                            <h3 className="products__title">{prod.name}</h3>
                            <img className="products__img" src={prod.imageUrl} alt="Image" />
                            <div className="products__price">{`${prod.price}$`}</div>
                        </NavLink>
                    </li>
                ))
                }
            </ul >
            <button onClick={() => navigate(frontRoutes.pages.home)} className="product__button">На головну</button>
        </div>
    );
}

export default Products;