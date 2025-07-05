import Task from "./Task";
import products from "../../data/products";
import DebounceRow from "./DebounceRow";
import { useState, useMemo } from "react";
import useDebounce from "../../hooks/useDebounce";

function Debounce() {
    const [searchProduct, setSearchProduct] = useState('')
    const debounceSearch = useDebounce(searchProduct, 1000)

    const productList = useMemo(() => {
        if (!debounceSearch) return products
        return products.filter(el => el.name.toLowerCase().includes(debounceSearch.toLowerCase()))
    }, [debounceSearch])

    return (
        <div className="box">
            <Task />
            <label>Введіть назву товару
                <input type="text" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />
            </label>
            <div className="box__grid">
                <div className="box__row box__row--title">
                    <div>Назва товару</div>
                    <div>Код товару</div>
                    <div>Ціна</div>
                </div>
                {productList.map(el => (
                    <DebounceRow key={el.id} product={el}></DebounceRow>
                ))}
            </div>
        </div>
    );
}

export default Debounce;