import { Outlet } from "react-router"
import Button from "../components/Button";
import frontRoutes from "../routes/frontRoutes";

function SimpleLayout() {
    return (
        <>
            <Outlet />
            <div className="button-box">
                <Button
                    color={"green"}
                    path={frontRoutes.navigate.home}
                    buttonTitle={'На головну'} />
            </div>
        </>
    );
}

export default SimpleLayout;