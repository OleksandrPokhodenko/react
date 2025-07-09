import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Contacts from "../pages/Contacts";
import Page404 from "../pages/Page404";
import Layout from "../components/Layout";
import frontRoutes from "./frontRoutes";
import Products from "../pages/products/Products";

function AppRoutes() {
    return (
        <Routes>
            <Route path={frontRoutes.layout} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={frontRoutes.products} element={<Products />} />
                <Route path={frontRoutes.payment} element={<Payment />} />
                <Route path={frontRoutes.contacts} element={<Contacts />} />
                <Route path='*' element={<Page404 />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;