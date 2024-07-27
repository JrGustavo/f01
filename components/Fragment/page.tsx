// components/Fragment.js
import React from 'react';

export const Fragment = () => {
    return (
        <section className="bg-primary-500 rounded-3xl px-4 lg:px-40">
            <div className="flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-8">
                <span className="h-2 w-2 bg-primary-700 block rounded-full"/>
                <span className="text-primary-400">Integraciones</span>
            </div>

            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 p-8 bg-gray-50">

                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-purple-500 text-sm font-semibold">Off-the-shelf Audience Segmentation</h2>
                    <h3 className="text-2xl font-bold mt-2">Better audiences from the richness of transaction data</h3>
                    <p className="mt-2 text-gray-600">Create nuanced personas and effective marketing campaigns based on
                        financial behaviors and consumer interests</p>
                    <div className="bg-gray-100 p-4 mt-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-bold"># 64890</div>
                            <div className="flex space-x-2">
                                <span className="bg-gray-200 p-1 rounded-full">📧</span>
                                <span className="bg-gray-200 p-1 rounded-full">💬</span>
                            </div>
                        </div>
                        <div className="flex space-x-2 mt-4">
                            <span className="bg-purple-200 text-purple-700 py-1 px-3 rounded-full">🚗</span>
                            <span className="bg-blue-200 text-blue-700 py-1 px-3 rounded-full">🏠</span>
                            <span className="bg-pink-200 text-pink-700 py-1 px-3 rounded-full">✈️</span>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <span>Personal Loan</span>
                                <span className="font-bold">75%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                                <div className="bg-purple-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <span>Credit Card</span>
                                <span className="font-bold">48%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                                <div className="bg-purple-500 h-2.5 rounded-full" style={{width: '48%'}}></div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <span>Life Insurance</span>
                                <span className="font-bold">30%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                                <div className="bg-purple-500 h-2.5 rounded-full" style={{width: '30%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-purple-500 text-sm font-semibold">Inflow and Spend based Income</h2>
                    <h3 className="text-2xl font-bold mt-2">Increase user limits, without worrying about default</h3>
                    <p className="mt-2 text-gray-600">Leverage user income estimates that are precise and always
                        up-to-date</p>
                    <div className="bg-gray-100 p-4 mt-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="font-bold">Metrics</h4>
                                <p className="text-xl">Monthly Average</p>
                                <p className="text-2xl font-bold">5.4k</p>
                            </div>
                            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                                {/* Aquí puedes colocar un gráfico o imagen similar */}
                                <div className="text-center">
                                    <div className="w-8 h-8 bg-purple-500 m-1 inline-block"></div>
                                    <div className="w-8 h-8 bg-pink-500 m-1 inline-block"></div>
                                    <div className="w-8 h-8 bg-blue-500 m-1 inline-block"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-bold">Sources</h4>
                            <div className="flex justify-between mt-2">
                                <span>Acme Corp Inc.</span>
                                <span className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full">Salary</span>
                                <span className="font-bold">1.4k</span>
                            </div>
                            <div className="flex justify-between mt-2">
                                <span>Uber</span>
                                <span className="bg-pink-100 text-pink-700 py-1 px-3 rounded-full">Gig Work</span>
                                <span className="font-bold">635.78</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Fragment;
