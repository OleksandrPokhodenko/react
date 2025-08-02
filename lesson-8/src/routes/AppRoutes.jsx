import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import frontRoutes from "./frontRoutes";
import Teachers from "../pages/teachers/Teachers";
import Meeting from "../pages/Meeting";
import AboutApp from "../pages/AboutApp";
import AboutDev from "../pages/AboutDev";
import TeachersForm from "../pages/teachers/TeachersForm";
import SimpleLayout from '../layouts/SimpleLayout'
import MainLayout from '../layouts/MainLayout'
import Page404 from "../pages/page404";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path={frontRoutes.pages.home} element={<Home />} />
                <Route path={frontRoutes.pages.teachers.index}>
                    <Route index element={<Teachers />} />
                    <Route path={frontRoutes.pages.teachers.edit} element={<TeachersForm />} />
                    <Route path={frontRoutes.pages.teachers.add} element={<TeachersForm />} />
                </Route>
                <Route path={frontRoutes.pages.meeting} element={<Meeting />} />
            </Route>
            <Route element={<SimpleLayout />} >
                <Route path={frontRoutes.pages.aboutApp} element={<AboutApp />} />
                <Route path={frontRoutes.pages.aboutDev} element={<AboutDev />} />
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;