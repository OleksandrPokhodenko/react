import { CardListContext } from "@/context/CardListContext";
import { buses } from "@/data/busesData";
import { hotels } from "@/data/hotelsData";

function CardListProvider({ children }) {
    const dataBuses = buses
    const dataHotels = hotels
    return (
        <CardListContext value={{ dataBuses, dataHotels }}>
            {children}
        </CardListContext>
    );
}

export default CardListProvider;