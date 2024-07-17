import React from 'react';
import Link from 'next/link';
import AnimatedCube from './AnimatedCube';

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50 animate-fade-in-down">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex-shrink-0">
                        <h1 className="text-4xl font-extrabold text-gray-900">The Vertical AI for Financial Services</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-white bg-blue-500 px-4 py-2 rounded-md">Agendar demo</button>
                    </div>
                </div>
            </div>
            <div className="bg-white py-8">
                <AnimatedCube />
            </div>
        </header>
    );
};

export default Header;
