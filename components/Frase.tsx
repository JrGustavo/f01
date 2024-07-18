/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8DhFHpVy5P4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Frase() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:gap-16">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-sm font-medium text-primary">Our Platform</h2>
                        <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your new legal workspace</h3>
                    </div>
                    <div className="grid gap-6">
                        <div className="grid grid-cols-[48px_1fr] items-center gap-4">
                            <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                                <DatabaseIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-medium">Data Science</h4>
                                <p className="text-muted-foreground">Leverage data-driven insights to make informed decisions.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[48px_1fr] items-center gap-4">
                            <div className="rounded-lg bg-accent p-3 text-accent-foreground">
                                <LaptopIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-medium">Machine Learning</h4>
                                <p className="text-muted-foreground">Automate repetitive tasks and unlock new possibilities.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[48px_1fr] items-center gap-4">
                            <div className="rounded-lg bg-secondary p-3 text-secondary-foreground">
                                <BotIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-medium">AI Generative</h4>
                                <p className="text-muted-foreground">Harness the power of AI to generate content and ideas.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative rounded-xl bg-muted p-6 md:p-8">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-10 blur-xl" />
                    <div className="relative z-10 grid gap-4">
                        <div className="flex items-center gap-4 rounded-lg bg-background p-4 shadow-sm">
                            <div className="h-10 w-10 rounded-full bg-muted" />
                            <div>
                                <div className="font-medium">You</div>
                                <div className="text-sm text-muted-foreground">How can your platform help me with my legal work?</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-lg bg-background p-4 shadow-sm">
                            <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground">
                                <WebcamIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="font-medium">Our Platform</div>
                                <div className="text-sm text-muted-foreground">
                                    Our platform offers a range of AI-powered tools to streamline your legal workflows. From data analysis
                                    to document generation, we can help you work more efficiently and effectively.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-lg bg-background p-4 shadow-sm">
                            <div className="h-10 w-10 rounded-full bg-muted" />
                            <div>
                                <div className="font-medium">You</div>
                                <div className="text-sm text-muted-foreground">
                                    That sounds really helpful. Can you tell me more about the specific features?
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-lg bg-background p-4 shadow-sm">
                            <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground">
                                <WebcamIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="font-medium">Our Platform</div>
                                <div className="text-sm text-muted-foreground">
                                    Absolutely! Our platform includes features like data visualization, contract analysis, and document
                                    automation. We use the latest advancements in machine learning and natural language processing to help
                                    you work smarter, not harder.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function BotIcon(props) {
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
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
        </svg>
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
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    )
}


function LaptopIcon(props) {
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
            <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
        </svg>
    )
}


function WebcamIcon(props) {
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
            <circle cx="12" cy="10" r="8" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 22h10" />
            <path d="M12 22v-4" />
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}