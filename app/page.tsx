import Navbar from "@/components/Navbar/page";
import {Footer} from "@/components/Footer/page";
import Section2 from "@/components/Section2/page";

import Header from "@/components/Header/page";
import ChartComponent from "@/components/ChartComponents/page";
import Fragment from "@/components/Fragment/page";
import Graphics from "@/components/Graphics/page";
import Nodos from "@/components/Nodo/page";
import Features from "@/components/Features/page";
import About from "@/components/About/page";


export default function Home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <ChartComponent/>
            <Fragment/>
            <Graphics/>
         <Features/>
            <Nodos/>
            <Section2/>
            <Footer/>






        </div>
    );
}
