import React from "react";

export default function Features() {
    return (
        <section
            className="bg-primary-500 rounded-3xl px-4 lg:px-40">
            <div className="flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-8">
                <span className="h-2 w-2 bg-primary-700 block rounded-full"/>
                <span className="text-primary-400">Integraciones</span>
            </div>

            <div className="relative w-full h-[500px] bg-[url('/placeholder.svg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)]"/>
                <div className="container mx-auto px-4 py-12 relative z-10">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold text-white">Enhancing legal operations</h2>
                        <p className="text-lg text-white/80">Benefits</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                    <InfoIcon className="w-6 h-6 text-primary-foreground"/>
                                </div>
                                <h3 className="text-xl font-semibold">Intelligence</h3>
                            </div>
                            <p className="text-muted-foreground mt-2">
                                Leverage data-driven insights to make informed decisions and optimize legal operations.
                            </p>
                        </div>
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                    <SpaceIcon className="w-6 h-6 text-primary-foreground"/>
                                </div>
                                <h3 className="text-xl font-semibold">Science</h3>
                            </div>
                            <p className="text-muted-foreground mt-2">
                                Leverage data-driven insights to make informed decisions and optimize legal operations.
                            </p>
                        </div>
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                    <DatabaseIcon className="w-6 h-6 text-primary-foreground"/>
                                </div>
                                <h3 className="text-xl font-semibold">Data</h3>
                            </div>
                            <p className="text-muted-foreground mt-2">
                                Leverage data-driven insights to make informed decisions and optimize legal operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

function DatabaseIcon(props) {
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
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
            <path d="M3 12A9 3 0 0 0 21 12"/>
        </svg>
    )
}


function InfoIcon(props) {
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
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4"/>
            <path d="M12 8h.01"/>
        </svg>
    )
}


function SpaceIcon(props) {
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
            <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"/>
        </svg>
    )
}


function XIcon(props) {
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
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    )
}