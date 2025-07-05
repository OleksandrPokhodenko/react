import Task from "./Task";
import products from "../../data/products";
import GridRow from "./GridRow";
import { useState, useDeferredValue, useCallback, useMemo } from "react";

function DataGrid() {
    const [filterParam, setFilterParam] = useState(null)
    const [searchProduct, setSearchProduct] = useState('')
    const deferredProduct = useDeferredValue(searchProduct)
    let productList = useMemo(() => {
        let list = [...products]
        deferredProduct ? list = list.filter(el => el.name.toLowerCase().includes(deferredProduct.toLowerCase())) : list
        if (filterParam) {
            if (filterParam === 'code') list.sort((a, b) => Number(a.code) - Number(b.code))
            if (filterParam === 'price') list.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            if (filterParam === 'clear') list = [...products]
        }
        return list
    }, [deferredProduct, filterParam])
    const filteredByCode = useCallback(() => setFilterParam('code'), [])
    const filteredByPrice = useCallback(() => setFilterParam('price'), [])
    const filteredClear = useCallback(() => setFilterParam('clear'), [])

    return (
        <div className="box">
            <Task />
            <label>Введіть назву товару
                <input type="text" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />
            </label>
            <div className="box__buttons">
                <button onClick={filteredByCode}>Фільтрувати по коду</button>
                <button onClick={filteredByPrice}>Фільтрувати за ціною</button>
                <button onClick={filteredClear}>Відмінити фільтрацію</button>
            </div>
            <div className="box__grid">
                <div className="box__row box__row--title">
                    <div>Назва товару</div>
                    <div>Код товару</div>
                    <div>Ціна</div>
                </div>
                {productList.map(el => (
                    <GridRow key={el.id} product={el}></GridRow>
                ))}
            </div>
        </div>
    );
}

export default DataGrid;