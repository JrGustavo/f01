import Header from '../components/Header';
import Frase from "@/components/Frase";
import Positions from "@/components/Positions";
import {Footer} from "@/components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <Frase />
            <Positions />
            <Footer />
            {/* Resto de tu contenido */}
        </div>
    );
}
