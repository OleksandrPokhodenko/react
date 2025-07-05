import { memo } from "react";
function GridRow({ product }) {
    return (
        <div className="box__row">
            <div className="box__item">{product.name}</div>
            <div className="box__item">{product.code}</div>
            <div className="box__item">{`${product.price}$`}</div>
        </div>
    );
}

export default memo(GridRow)