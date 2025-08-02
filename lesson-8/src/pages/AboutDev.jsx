import Button from "../components/Button";
import frontRoutes from "../routes/frontRoutes";

function AboutDev() {
    return (
        <div className="about-dev-page">
            <div className="about-dev-page__container">
                <div className="about-dev-page__box">
                    <h1 className="about-dev-page__title">Про розробника</h1>
                    <Button
                        color={"green"}
                        path={frontRoutes.navigate.home}
                        buttonTitle={'На головну'} />
                </div>
            </div>
        </div>
    );
}

export default AboutDev;