"use client"

import React, { useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, ScatterController, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ScatterController, LinearScale, PointElement, Tooltip, Legend);

const dataOptions = {
    income: {
        datasets: [{
            label: 'Income',
            data: Array.from({ length: 500 }, () => ({ x: Math.random(), y: Math.random() })),
            backgroundColor: 'rgba(75, 192, 192, 1)'
        }]
    },
    churn: {
        datasets: [{
            label: 'Churn',
            data: Array.from({ length: 500 }, () => ({ x: Math.random(), y: Math.random() })),
            backgroundColor: 'rgba(255, 99, 132, 1)'
        }]
    },
    conversions: {
        datasets: [{
            label: 'Conversions',
            data: Array.from({ length: 500 }, () => ({ x: Math.random(), y: Math.random() })),
            backgroundColor: 'rgba(54, 162, 235, 1)'
        }]
    },
    creditRisk: {
        datasets: [{
            label: 'Credit Risk',
            data: Array.from({ length: 500 }, () => ({ x: Math.random(), y: Math.random() })),
            backgroundColor: 'rgba(153, 102, 255, 1)'
        }]
    }
};

export const ChartComponent = () => {
    const [selectedOption, setSelectedOption] = useState('income');

    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <div className="flex flex-col items-start p-4 space-y-4">
                <h1 className="text-2xl font-bold">Build with <span className="text-purple-500">Mandelbrot</span></h1>
                <p className="text-lg">Our proprietary LLM + Your Data</p>
                <div className="flex space-x-2">
                    {['income', 'churn', 'conversions', 'creditRisk'].map((option) => (
                        <button
                            key={option}
                            className={`py-2 px-4 rounded-full ${selectedOption === option ? 'bg-purple-500 text-white' : 'bg-white border'}`}
                            onClick={() => setSelectedOption(option)}
                        >
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </button>
                    ))}
                </div>
                <p className="text-gray-600 mt-4">
                    Trained from scratch on your data. Mandelbrot is privately trained to automatically extract a user’s financial behavior and their likelihood to adopt different financial products.
                    Fine-tune Mandelbrot embeddings to train any predictive model with our simple APIs.
                </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
                <Scatter data={dataOptions[selectedOption]} />
            </div>
        </div>
    );
};

export default ChartComponent;
