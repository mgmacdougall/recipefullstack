import React from 'react'

function RecipeForm({ handleRecipeFormSubmit }) {
    const [recipeTitle, setRecipeTitle] = React.useState('');
    const [instructions, setInstructions] = React.useState('');


    const handleRecipeTitleChange = (e) => {
        setRecipeTitle(e.target.value);
    };

    const handleInstructionsChange = (e) => {
        setInstructions(e.target.value);
    }

    const handleClear = () => {
        setRecipeTitle('');
        setInstructions('');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ title: recipeTitle, instructions: instructions });
        handleRecipeFormSubmit({ title: recipeTitle, instructions: instructions });
        // alert('Form submitted! Check console for details.');
        handleClear();
    }

    return (
        <div className="mb-6">
            <h2>Enter recipe</h2>
            <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input id="title" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="title" placeholder="Recipe Title" onChange={(e) => handleRecipeTitleChange(e)} value={recipeTitle} />
                    <p>{recipeTitle}</p>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <label htmlFor="instructions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">instructions</label>
                    <textarea id="instructions" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => handleInstructionsChange(e)} value={instructions} placeholder="Write your thoughts here..."></textarea>
                    <p>{instructions}</p>
                </div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type='submit'>Save recipe</button>
            </form>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClear}>Clear</button>
        </div >
    )
}

export default RecipeForm