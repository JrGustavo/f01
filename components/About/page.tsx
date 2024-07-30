// components/HeroSection.js
export default function About() {
    return (
        <div className="bg-white text-black py-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-xl font-bold text-purple-600 mb-4">OUR MISSION</h1>
                <h2 className="text-4xl font-extrabold mb-6">
                    We  re creating a new era of AI-enabled finance
                </h2>
                <p className="text-lg mb-12">
                    With Hyperplane, financial institutions can understand each customer's financial needs and create hyper-personalized experiences to improve customer satisfaction.
                </p>
            </div>
            <div className="container mx-auto px-4 flex justify-between items-start">
                <div className="w-2/3">
                    <h3 className="text-2xl font-bold mb-4">Trailblazing the Future of Banking</h3>
                    <p className="text-lg mb-6">
                        Hyperplane is the leading data intelligence platform in helping banks unlock the potential behind their first-party data. The company was founded in 2022 by experts in AI, who spent the better part of the last decade building large-scale AI systems at Google, LinkedIn, and Meta. They experienced first-hand how centralized intelligence is leveraged to transform the way companies use their data to model, understand, and interact with their users. Now, they are bringing this capability to the banking industry.
                    </p>
                    <p className="text-lg mb-6">
                        One of the most transformative avenues for AI in the next decade is in consumer finance. Hyperplane is enabling financial institutions to understand customers' financial needs and preferences through the large amounts of financial footprint that they collect daily. Hyper-personalization in banks will create a system with more relevant and engaging experiences, more financial freedom for consumers.
                    </p>
                </div>
                <div className="w-1/3 text-right">
                    <div className="mb-4">
                        <h4 className="text-xl font-bold">2022</h4>
                        <p>Operating Since</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-xl font-bold text-purple-600">5Bn+</h4>
                        <p>Transactions Processed</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-xl font-bold">$6M</h4>
                        <p>Raised</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-xl font-bold">30+</h4>
                        <p>World-Class Team Members</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
