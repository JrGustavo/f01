"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter';


export default function Header() {
    const [query, setQuery] = useState("");

    return (
        <header className="flex flex-col items-center justify-center w-full min-h-screen bg-white">
            <div className="flex flex-col items-center justify-center w-full text-center">
                <h1 className="text-7xl font-bold">
                    The Vertical AI For{' '}
                    <span className="text-[#0070F3]">
          <Typewriter
              words={['Banking', 'Fintech', 'Lenders']}
              loop={0} // Puedes cambiar este valor para que se repita infinitamente
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
          />
        </span>
                </h1>
                <p className="mt-4 text-xm">
                    La plataforma de Fleet permite lanzar experiencias personalizadas para los consumidores  a través de modelos de base especializados (LLMs).
                </p>
                <Button className="mt-6" variant="default">
                    <BookIcon className="mr-2"/>
              Agendar Demo
                </Button>
            </div>
            <div className="relative w-full max-w-4xl mt-12 overflow-hidden rounded-lg shadow-lg">
                <Image
                    src="/images/Cube3d.jpg"
                    alt="Kante"
                    width={800}
                    height={300}
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 ">
                    <div className="flex items-center w-full max-w-lg p-2 bg-white rounded-full shadow-lg">
                        <Input
                            type="text"
                            placeholder="Crea un Chatbot para atender a los clientes de mi banco"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="flex-1 px-4 py-2 border-none rounded-full focus:outline-none"
                        />
                        <Button variant="default" className="ml-2">
                            <ArrowRightIcon className="w-5 h-5"/>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

function ArrowRightIcon({...props}) {
    return (
        <svg

            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
        </svg>
    );
}

function BookIcon({...props}) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
    );
}

function XIcon({ ...props }) {
    return (
        <svg

            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}
