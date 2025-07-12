import { useEffect, useState } from "react";
import apiRoutes from "../../api/apiRoutes";
import { NavLink } from "react-router";
import frontRoutes from "../../routes/frontRoutes";

function Products() {
    const [productsList, setProductsList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const res = await fetch(apiRoutes.productsList)
                const data = await res.json()
                setProductsList(data)
            } catch (err) {
                setError(err)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    if (isLoading) return <div>Завантаження...</div>
    if (error) return <div>Помилка завантаження</div>
    console.log(productsList);
    return (
        <ul className="products">
            {productsList.map(prod => (
                <NavLink key={prod.id} to={frontRoutes.navigate.products.getDetailLink(prod.id)} className={({ isActive }) => (isActive ? "products__link active" : 'products__link')}>
                    <li className="products__item">
                        <h3 className="products__title">{prod.name}</h3>
                        <img className="products__img" src={prod.imageUrl} alt="Image" />
                        <div className="products__price">{`${prod.price}$`}</div>
                    </li>
                </NavLink>
            ))
            }
        </ul >
    );
}

export default Products;