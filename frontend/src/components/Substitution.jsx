import React from 'react'
function Substitution() {
    return (
        <div>
            <h2 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>Substitutions</h2>
            <p className='text-base text-gray-700 leading-relaxed font-serif p-4'>
                If you don't have a specific ingredient, you can use these substitutions.
            </p>

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                Enter your ingredients or pantry items htmlFor recipe ideas or substitutions
            </label>
            <textarea
                id="message"
                rows="4"
                className="w-full p-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your ingredients here..."
            ></textarea>

        </div>
    )
}

export default Substitution