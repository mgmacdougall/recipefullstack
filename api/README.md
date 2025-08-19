Backend for Recipe CRUD App

- /recipes - retuns an array of recipes
- /recipe/?=name = returns an array of recipes containing name


Other notes:
- connects to www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata with the '1' non-product api. 
May need to update


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
- Meal Planner ((✅))
- Favorites (RecipeBox page)(✅)
- UI Components:
- IngredientInput.js – input ingredients ((✅) IngredientInput)
- RecipeCard.js – show recipe + image (RecipeCard.jsx) (✅)
- SubstitutionTips.js – GPT advice (✅)
- MealPlanner.js – drag-and-drop meals (needs to be completed - have components but no drag and drop)
- Features:
- Form validation
- Responsive layout
- MongoDB sync or local storage fallback


Phase 3: Backend APIs (Express + MongoDB)
- Routes:
- POST /recipes – ingredient search (✅)
- POST /substitute – get GPT suggestions (✅)
- GET /favorites – fetch saved recipes (✅)
- POST /mealplan – save custom plans (✅)
- MongoDB Models:
- User (✅)
- Recipe (✅)
- MealPlan (✅)
- Middleware:
- Auth (JWT) needs to be done
    -- routes created, for register/login/logout using bcrypt, session(✅)
        -- added to controller, and secret read from dotenv (✅)
    -- TO DO: Need to add session information to the routes 
    -- TODO: Add tests for the data.
- Logging & rate limiting Logging (Winston (✅)) rate limit not done
- Mongo:
    - db connection  (✅)
    - models (✅)
    - favourites:
        - getFavourite, setFavourite, getFavourite by mongo id.
- Tests Included:
    - Post Man + Newman + Newman Reporter - under the /tests directory
        - Test for favourite end point 
        - Test for post favourite endpoint
        - Test for favorites end point
    - HTML Report produced in the tests/results directory.
    
Phase 4: AI Integration
- Text AI:
- GPT-powered cooking advice and trivia in progress - need to get $ for calls currently does not work.
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
