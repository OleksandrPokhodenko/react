import { selectFilteredProducts } from "@/redux/selectors/productsSelector";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, filterProductByName } from '@/redux/slices/productsSlice'
import { useState } from "react";

function Products() {
    const dispatch = useDispatch()
    const filteredProducts = useSelector(selectFilteredProducts)
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')
    const handleChange = () => {
        if (product && price) {
            const newProduct = {
                id: new Date().getTime(),
                name: product,
                price: price
            }
            dispatch(addProduct(newProduct))
            setPrice('')
            setProduct('')
        }
    }

    return (
        <section className="products-page">
            <div className="products-page__container">
                <ul className="products-page__list">
                    {filteredProducts.map(prod => (
                        <li className="products-page__item" key={prod.id}>
                            <span>{prod.name}</span><span>{prod.price}$</span>
                        </li>
                    ))}
                </ul>
                <label className="products-page__label">
                    Пошук товару за назвою
                    <input
                        className="products-page__input"
                        type="text"
                        placeholder="Введіть назву товару"
                        onChange={(e) => dispatch(filterProductByName(e.target.value))}
                    />
                </label>
                <div className="products-page__box">
                    <label className="products-page__label">
                        Введіть назву товару
                        <input
                            className="products-page__input"
                            type="text"
                            value={product}
                            placeholder="Введіть назву товару"
                            onChange={(e) => setProduct(e.target.value)}
                        />
                    </label>
                    <label className="products-page__label">
                        Введіть ціну товару
                        <input
                            className="products-page__input"
                            type="number"
                            value={price}
                            placeholder="Введіть ціну товару"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                    <button disabled={!price || !product} onClick={handleChange} className="products-page__button">Додати товар</button>
                </div>
            </div>
        </section>
    );
}

export default Products;