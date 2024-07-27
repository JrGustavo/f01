"use client"


import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

export const Graphics = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: false,
            },
            {
                label: 'Dataset 2',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: 'rgba(255,159,64,1)',
                backgroundColor: 'rgba(255,159,64,0.2)',
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    return (
        <section className="bg-primary-500 rounded-3xl px-4 lg:px-40">
            <div className="flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-8">
                <span className="h-2 w-2 bg-primary-700 block rounded-full"/>
                <span className="text-primary-400">Integraciones</span>
            </div>
            <div className="p-8 bg-white shadow-md rounded-lg">
                <div className="mb-8">
                    <h2 className="text-purple-500 text-sm font-semibold">Model Finetuning</h2>
                    <h3 className="text-2xl font-bold mt-2">Fine-tune Mandelbrot on any predictive model</h3>
                    <p className="mt-2 text-gray-600">Upgrade your feature sets with embeddings for credit, collections,
                        and lookalike modeling</p>
                </div>
                <div className="mb-8">
                    <Line data={data} options={options}/>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Data in your cloud, your way</span>
                    <div className="flex space-x-8">
                        <img src="/logos/AWS.png" alt="AWS" className="w-8 h-8"/>
                        <img src="/logos/Azure.png" alt="GCP" className="w-8 h-8"/>
                        <img src="/logos/Gcp.png" alt="Azure" className="w-8 h-8"/>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Graphics;
