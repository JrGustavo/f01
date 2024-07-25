import Navbar from "@/components/Navbar/page";
import {Footer} from "@/components/Footer/page";
import Section2 from "@/components/Section2/page";

import Header from "@/components/Header/page";
import Features from "@/components/Features/page";
import ChartComponent from "@/components/ChartComponents/page";


export default function Home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <ChartComponent/>
            <Features/>
            <Section2/>
            <Footer/>






        </div>
    );
}
