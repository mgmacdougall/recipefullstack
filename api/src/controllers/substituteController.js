
const getSubstitutes = async (req, res) => {
    console.log('Received a Ger request on /substitutes');
    const { ingredients } = req.body;
    console.log(ingredients)
    try {
        // Simulate fetching substitutes from a database or external API
        const substitutes = [
            { ingredient: 'milk', substitute: 'almond milk' },
            { ingredient: 'eggs', substitute: 'flaxseed meal' },
            { ingredient: 'butter', substitute: 'coconut oil' }
        ];
        res.json(ingredients);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching substitutes' });
    }
}

export default {
    getSubstitutes
}