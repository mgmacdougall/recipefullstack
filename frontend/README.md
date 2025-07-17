# ChefGPT

AI-powered MERN app for recipe searching, substitutions, and visualizations.
 MERN + AI App Roadmap: "ChefGPT – AI-Powered Recipe Assistant"

## Features

- Enter ingredients to get recipe suggestions
- GPT-based cooking advice
- Visual dish generation (future feature)

## Stack

- React, Express, MongoDB
- Puter.js GPT API
- Azure DevOps CI/CD (coming soon)


### Project Details
Phase 1: Planning & Setup
- App Goals:
- Users search recipes by ingredients
- Get substitution ideas via GPT
- Visualize dishes with AI-generated images
- Save favorites and meal plans
- Tech Stack Overview:
- React, Express.js, Node.js, MongoDB
- Puter.js or Aimlapi for GPT access
- Azure DevOps for CI/CD and Markdown scripts


Phase 2: Frontend Development
- React Pages:
- Home (Home page) (✅)
- Search results (Recipes page) (✅)
- Substitution tips (TODO)
- Meal Planner (almost) -> this is almost done input form complete, and list on ingredients done - back end call not done for getting recipes based on input values
- Favorites (RecipeBox page)(✅)
- UI Components:
- IngredientInput.js – input ingredients ((✅) IngredientInput)
- RecipeCard.js – show recipe + image (RecipeCard.jsx) (✅)
- SubstitutionTips.js – GPT advice (almost) - got to get the substitions page done with api call to back end.
- MealPlanner.js – drag-and-drop meals (needs to be completed - have components but no drag and drop)
- Features:
- Form validation
- Responsive layout
- MongoDB sync or local storage fallback 
- Cypress installed for E2E testing
    - test directory in place
    - mochawesome + mocha marge in place for hml report
    - command line in place in package.json file


Phase 3: Backend APIs (Express + MongoDB)
- Routes:
- POST /recipes – ingredient search
- GET /recipes/new - ChefGPT - get based on ingredients ("data":{"ingredients:["one", "two", "three"]})
- POST /recipeBox - save collection of recipes with name
- POST /substitute – get GPT suggestions
- GET /favorites – fetch saved recipes
- POST /mealplan – save custom plans
- MongoDB Models:
- User
- Recipe
- MealPlan
- Middleware:
- Auth (JWT)
- Logging & rate limiting

Phase 4: AI Integration
- Text AI:
- GPT-powered cooking advice and trivia
- Substitution logic for missing ingredients
- Image AI:
- Generate dish visuals using text-to-image APIs
- Store image URLs or cache thumbnails


Phase 5: DevOps Automation
- Azure DevOps:
- CI/CD with linting, test, and deploy
- Automated Markdown recipe updates
- Daily “Featured Recipe” pipeline
- Scripts:
- Bash + Node for recipe tables
- GPT-generated summaries
- Markdown push to docs or pages repo

Phase 6: Testing & Optimization
- Testing:
- Unit tests for routes and React components
- Integration tests for AI logic
- E2E testing with Cypress or Playwright
- Performance:
- Debounced search input
- Lazy-loading images
- Index Mongo collections for fast lookup

7: Deployment & Promotion
- Deploy Targets:
- React on Vercel or Netlify
- Express backend on Railway or Render
- MongoDB Atlas for cloud DB
- Marketing Ideas:
- Share AI-generated weekly meal plans
- Tweet food trivia from GPT
- “Surprise Me” button powered by random GPT outputs
