type difficultylevel = 'low' | 'medium' | 'high'
type requireoven = true | false
interface recipe {
    id: number
    name: string
    ingredients: string[]
    preparetime?: string | null
    difficultylevel?: difficultylevel | null
    requireoven?: requireoven | null
}
export function getData() {
  
    const recipe1: recipe = {
        id: 1,
        name: 'Beef Pepper Stir-fry',
        ingredients: ['beef', 'pepper', 'garlic', 'soy sauce', 'onion'],
    }
    const recipe2: recipe = {
        id: 2,
        name: 'Oven-Baked Chicken',
        ingredients: [
            'chicken breast',
            'olive oil',
            'rosemary',
            'garlic',
            'salt',
            'pepper',
        ],

        requireoven: true,
    }
    const recipe3: recipe = {
        id: 3,
        name: 'Avocado Toast',
        ingredients: [
            'bread',
            'avocado',
            'lemon juice',
            'salt',
            'black pepper',
        ],
        preparetime: '10 minutes',
        difficultylevel: 'low',
        requireoven: false,
    }

    const recipes = [recipe1, recipe2, recipe3];
    return recipes
}
function postData(userenter:recipe){
   return {
    status: 201, // HTTP 201 Created
    message: "Recipe successfully posted"}
}