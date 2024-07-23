
import { Button } from "@/components/ui/button"
import Image from 'next/image'


export default function Section2() {
    return (
        <div className="w-full max-w-6xl mx-auto py-12">
            <div className="flex flex-col items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold">Open positions</h2>
                <p className="text-muted-foreground">la pequeña desgraciada</p>
            </div>
            <div className="relative group">
                <div className="grid grid-cols-4 gap-4">
                    <div className="relative group">
                        <Image
                            src="/images/Cube3d.jpg"
                            width={300}
                            height={300}
                            alt="Position"
                            className="aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:z-10"
                        />
                    </div>
                    <div className="relative group">
                        <Image
                            src="/images/Cube3d.jpg"
                            width={300}
                            height={300}
                            alt="Position"
                            className="aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:z-10"
                        />
                    </div>
                    <div className="relative group">
                        <Image
                            src="/images/Cube3d.jpg"
                            width={300}
                            height={300}
                            alt="Position"
                            className="aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:z-10"
                        />
                    </div>
                    <div className="relative group">
                        <Image
                            src="/images/Cube3d.jpg"
                            width={300}
                            height={300}
                            alt="Position"
                            className="aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:z-10"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <Button>Explorar roles</Button>
            </div>
        </div>
    )
}