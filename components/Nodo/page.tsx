"use client"

import React from 'react';

export const Nodos = () => {
    return (
        <section
            className="bg-primary-500 rounded-3xl px-4 lg:px-40">
            <div className="flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-8">
                <span className="h-2 w-2 bg-primary-700 block rounded-full"/>
                <span className="text-primary-400">Integraciones</span>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between p-8 bg-white shadow-md rounded-lg">
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <h2 className="text-2xl font-bold">Deploy a module in seconds</h2>
                    <ul className="mt-4 space-y-4">
                        <li className="flex items-center">
                            <span className="text-purple-500 mr-2">🚀</span>
                            <span>Deploy on Google Cloud, AWS, Azure</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-purple-500 mr-2">⚖️</span>
                            <span>Scale to millions of users with a click of a button</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-purple-500 mr-2">🔒</span>
                            <span>SOC2 and LGPD Compliant platform for all of your experiments</span>
                        </li>
                    </ul>
                    <div className="mt-8 flex space-x-4">
                        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg">Book a Demo</button>
                        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg">Read the Docs</button>
                    </div>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg">
                        <h3 className="text-xl font-bold flex items-center">
                            <span className="mr-2">📊</span> Income Estimation
                        </h3>
                        <p className="mt-2 text-gray-600">Improve total payment volume by analyzing user cashflow trends
                            to accurately determine user earnings, employer, and job stability - even if you're not
                            their primary bank.</p>
                    </div>
                    <div className="bg-purple-100 p-4 rounded-lg">
                        <h3 className="text-xl font-bold flex items-center">
                            <span className="mr-2">👥</span> Audience Segmentation
                        </h3>
                        <p className="mt-2 text-gray-600">Enhance users' long-term engagement and lifetime value by
                            creating target audiences based on their financial behavior and lookalike audiences.</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                        <h3 className="text-xl font-bold flex items-center">
                            <span className="mr-2">🔧</span> Model Finetuning
                        </h3>
                        <p className="mt-2 text-gray-600">Fine-tune Mandelbrot (proprietary LLM), on any predictive
                            model. Augment your features with embeddings that capture user behavior through the LLM.</p>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Nodos;
