import Link from "next/link";
import {Facebook, Instagram, Linkedin} from "lucide-react";



export const Footer = () => {
    return (
        <div className="p-4">
            <footer className="bg-primary-700 rounded-3xl py-24 sm:py-48 relative overflow-hidden">
                <div className="absolute h-full top-0">

                </div>
                <div className="container mx-auto relative px-8">
                    <div className="grid sm:grid-cols-6 xl:grid-cols-12 gap-8 items-center">
                        <div className="col-span-2 md:col-span-1 mr-8">

                        </div>
                        <div className="col-span-9 grid sm:grid-cols-9 gap-8">
                            <div className="col-span-3 w-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-0 grid sm:col-span-6">
                                <ul className="list-none text-white grid gap-6">
                                    <label className="text-white font-semibold">Tecnología</label>
                                    <li>
                                        <Link href="/">Productos</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Soluciones</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Documentación</Link>
                                    </li>
                                </ul>
                                <ul className="list-none text-white grid gap-6">
                                    <label className="text-white font-semibold">Empresa</label>
                                    <li>
                                        <Link href="/">Nosotros</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Carreras</Link>
                                        <span className="ml-2 p-1 bg-secondary-100 rounded-md text-white">
                                            Hiring
                                        </span>
                                    </li>
                                    <li>
                                        <Link href="/">Blog</Link>
                                    </li>
                                </ul>
                                <ul className="list-none text-white grid gap-6">
                                    <label className="text-white font-semibold">Experiencia</label>
                                    <li>
                                        <Link href="/">Recursos</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Legal</Link>
                                    </li>
                                    <li>
                                        <a href="mailto:hola@joinpetal.com">hola@joinpetal.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-3 grid gap-4 sm:col-end-10">
                                <Link href="https://www.facebook.com" passHref>
                                    <h5 className="flex items-center gap-4 p-1 bg-secondary-150 rounded-full hover:bg-secondary-150  transition-colors">
                                        <span className="bg-secondary-150  p-3 flex items-center justify-center rounded-full">
                                            <Facebook />
                                        </span>
                                        <p className="text-white font-medium">
                                            Síguenos en Facebook
                                        </p>
                                    </h5>
                                </Link>
                                <Link href="https://www.instagram.com" passHref>
                                    <h5 className="flex items-center gap-4 p-1 bg-secondary-150 rounded-full hover:bg-secondary-150  transition-colors">
                                        <span className="bg-secondary-150  p-3 flex items-center justify-center rounded-full">
                                            <Instagram />
                                        </span>
                                        <p className="text-white font-medium">
                                            Síguenos en Instagram
                                        </p>
                                    </h5>
                                </Link>
                                <Link href="https://www.linkedin.com" passHref>
                                    <h5 className="flex items-center gap-4 p-1 bg-secondary-150 rounded-full hover:bg-secondary-150  transition-colors">
                                        <span className="bg-secondary-150  p-3 flex items-center justify-center rounded-full">
                                            <Linkedin />
                                        </span>
                                        <p className="text-white font-medium">
                                            Síguenos en Linkedin
                                        </p>
                                    </h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-primary-500 text-center py-4 mt-8 border-t border-white/20">
                        <div className="px-8">

                        </div>
                        <span>© {new Date().getFullYear()} Todos los derechos reservados - Petal S.A.S NIT: 901402442-6</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};