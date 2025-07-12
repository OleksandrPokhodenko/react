import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Contacts from "../pages/Contacts";
import Page404 from "../pages/Page404";
import Layout from "../components/Layout";
import frontRoutes from "./frontRoutes";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/products/ProductDetails";

function AppRoutes() {
    return (
        <Routes>
            <Route path={frontRoutes.pages.home} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={frontRoutes.pages.products.index} >
                    <Route index element={<Products />} />
                    <Route path={frontRoutes.pages.products.details} element={<ProductDetails />} />
                </Route>
                <Route path={frontRoutes.pages.payment} element={<Payment />} />
                <Route path={frontRoutes.pages.contacts} element={<Contacts />} />
                <Route path='*' element={<Page404 />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;