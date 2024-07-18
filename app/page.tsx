import Header from '../components/Header';
import Frase from "@/components/Frase";
import Positions from "@/components/Positions";

export default function Home() {
    return (
        <div>
            <Header />
            <Frase />
            <Positions />
            {/* Resto de tu contenido */}
        </div>
    );
}
