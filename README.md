POCKETSMART AI
Your Smart Budget & Recommendation Assistant
PocketSmart AI is a Generative AI-powered budget planning and recommendation platform. It helps users create personalized, budget-aware plans for home interiors, party planning, and jewelry selection.

The system uses FastAPI with Google Gemini 1.5 Flash Pro to understand user budgets, preferences, contextual requirements, and optional images, then generates relevant recommendations.

FEATURES
1. Home Interior Budget Planner
Enter budget, room types, quantities, and preferences.

Get recommendations for furniture, lighting, decor, fans, dining tables, and more.

Generate budget-aware interior planning suggestions.

2. Party Budget Planner
Enter event type, budget, guest count, and venue details.

Get suggestions for:

Food

Decoration

Venues

Accommodation

Generate personalized party planning recommendations.

3. Jewelry Budget Planner
Enter budget, occasion, and style preferences.

Optionally upload an outfit image.

Analyze outfit color and style coordination.

Receive occasion- and outfit-matched jewelry suggestions.

4. User Authentication
User registration and login functionality.

JWT-based authentication.

Session management.

Secure user access to personalized features.

5. Personalized Dashboard
View recent recommendations.

View saved queries.

Access personalized planning information from one dashboard.

6. Recommendation History
Review previous recommendation requests.

View previously generated results.

Maintain a history of user planning activities.

7. Generative AI Recommendations
Gemini processes:

Text inputs

Budget information

User preferences

Contextual requirements

Optional images

The AI then generates context-aware and personalized recommendations.

HOW IT WORKS
User selects a planner

Home

Party

Jewelry

User enters budget and preferences.

Optional image input can be provided for the Jewelry Planner.

FastAPI receives and validates the request.

Gemini 1.5 Flash Pro processes the information.

Personalized recommendations are generated.

Recommendations are displayed through the responsive web interface.

Previous queries and results can be maintained through session and history features.

TECH STACK
Technology	Purpose
Python	Core programming language
FastAPI	Backend API framework
Google Gemini 1.5 Flash Pro	Generative AI and multimodal recommendations
HTML	Frontend structure
CSS	Styling and responsive design
JavaScript	Frontend interactions
Jinja2	Dynamic HTML templates
JWT	Authentication
Uvicorn	FastAPI server
CORS	Cross-origin communication
Third-party APIs	Product and service sourcing

PROJECT STRUCTURE
PocketSmart-AI/
│
├── main.py
├── gemini_utils.py
├── requirements.txt
├── .env
│
├── routes/
│   ├── home.py
│   ├── party.py
│   └── jewelry.py
│
├── services/
│   └── recommendation_service.py
│
├── models/
│   └── schemas.py
│
├── templates/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── home_planner.html
│   ├── party_planner.html
│   └── jewelry_planner.html
│
└── static/
    ├── css/
    ├── js/
    └── images/

Note: The exact folder and file structure may vary depending on the implementation.

MAIN API ROUTES
Planner Routes
POST /generate-home
POST /generate-party
POST /generate-jewelry

Authentication Routes
/register
/login
/logout
/token

Session & History Routes
/session-info
/session-data
/history
/recommendations-details
/startup

INSTALLATION & SETUP
1. Clone the Repository
git clone https://github.com/your-username/PocketSmart-AI.git
cd PocketSmart-AI

2. Create a Virtual Environment
python -m venv venv

Windows
venv\Scripts\activate

Linux / macOS
source venv/bin/activate

3. Install Dependencies
pip install -r requirements.txt

4. Configure Environment Variables
Create a .env file:

GEMINI_API_KEY=your_gemini_api_key

Never upload your real API key or .env file to GitHub.

5. Run the Application
uvicorn main:app --reload

The application can then be accessed through the local server shown by Uvicorn.

GEMINI API SETUP
PocketSmart AI requires access to the Gemini API.

General Setup
Create or configure your Google Cloud or supported Gemini API environment.

Generate an API key.

Store the API key securely in an environment variable.

Configure the application to use the required Gemini model.

Test both text-based and optional image-based requests.

RECOMMENDATION SOURCES
The project is designed to work with or reference popular platforms such as:

Amazon

Flipkart

IKEA

Swiggy

Zomato

OYO

Note: Product/service availability and pricing depend on the connected implementation and external platform data.

TESTING
The project can be tested using different real-world scenarios.

Home Interior
Different budgets

Different room types

Furniture requirements

Decor requirements

Lighting requirements

Party Planning
Birthday events

Corporate events

Weddings

Different guest counts

Different budgets

Different venue requirements

Jewelry Planning
Different occasions

Different style preferences

Different budgets

Outfit image inputs

Color and style matching

Testing Focus
Recommendation quality

Budget adherence

Input validation

AI response reliability

API behavior

Image processing

SECURITY NOTES
Keep API keys inside environment variables.

Do not commit .env files to GitHub.

Use secure authentication and JWT handling.

Validate user inputs before sending them to AI services.

Configure CORS according to the deployment environment.

Protect user history and personalized recommendation data.

FUTURE ENHANCEMENTS
Real-time product price and availability tracking

Integration with more shopping and service platforms

Advanced budget optimization

Improved recommendation ranking

Mobile application

User preference learning

Saved budget templates

More AI-powered planning categories

Advanced image-based recommendations

USE CASES
PocketSmart AI can help users:

Plan home interiors within a fixed budget.

Organize parties and events.

Find jewelry matching an outfit and occasion.

Compare recommendations across multiple categories.

Save time while making budget-conscious decisions.

Get personalized AI-powered planning suggestions.

PROJECT GOAL
The goal of PocketSmart AI is to make everyday budgeting and planning simple, personalized, and AI-powered by combining Generative AI with modern web technologies.

PROJECT
PocketSmart AI — Your Smart Budget & Recommendation Assistant
Built With
FastAPI + Google Gemini 1.5 Flash Pro + HTML + CSS + JavaScript


