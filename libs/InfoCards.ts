import {AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon} from "lucide-react";

interface InfoCard {
    title: string;
    icon: LucideIcon;
    bodyText: string;
    id: number;

}

const infoCards: InfoCard[] = [
    {
        title: "Current Temperature",
        icon: ArrowUpNarrowWide,
        bodyText: "The current temperature is 20°C",
        id: 1
    },
    {
        title: "Current Humidity",
        icon: ArrowDownNarrowWide,
        bodyText: "The current humidity is 40%",
        id: 2
    },
    {
        title: "Current Light",
        icon: AlarmClockOff,
        bodyText: "The current light is 60%",
        id: 3
    },
]

export default infoCards;