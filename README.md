PocketSmart AI

Your Smart Budget & Recommendation Assistant

PocketSmart AI is a Generative AI-powered budget planning and recommendation platform. It helps users create personalized, budget-aware plans for home interiors, party planning, and jewelry selection.


The system uses FastAPI with Google Gemini 1.5 Flash Pro to understand user budgets, preferences, contextual requirements, and optional images, then generates relevant recommendations.


Features:


Home Interior Budget Planner:

Enter budget, room types, quantities, and preferences.
Get recommendations for furniture, lighting, decor, fans, dining tables, and more.

Party Budget Planner:

Enter event type, budget, guest count, and venue details.
Get suggestions for food, decoration, venues, and accommodation.

Jewelry Budget Planner:

Enter budget, occasion, and style preferences.
Optionally upload an outfit image for color and style coordination.
Receive occasion- and outfit-matched jewelry suggestions.

User Authentication:

Register and login functionality.
JWT-based authentication and session management.

Personalized Dashboard:

View recent recommendations and saved queries.

Recommendation History:

Review previous recommendation requests and results.

Generative AI Recommendations:

Gemini processes text, budget information, preferences, and images to generate contextual suggestions.


How It Works:


User selects a planner: Home, Party, or Jewelry.

User enters the required budget and preferences.

Optional image input can be provided for the Jewelry Planner.

FastAPI receives and validates the request.

Gemini 1.5 Flash Pro processes the information.

The system generates personalized recommendations.

Recommendations are displayed through the responsive web interface.

Previous queries and results can be maintained through session/history features.


Tech Stack:

Technology	Purpose
Python	Core programming language
FastAPI	Backend API framework
Google Gemini 1.5 Flash Pro	Generative AI and multimodal recommendations
HTML	Frontend structure
CSS	Styling and responsive UI
JavaScript	Frontend interactions
Jinja2	Dynamic HTML templates
JWT	Authentication
Uvicorn	FastAPI server
CORS	Cross-origin communication
Third-party platforms/APIs	Product and service sourcing

Project Structure:

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


The exact folder/file structure may vary depending on the implementation.



Main API Routes:

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

Installation & Setup:

1. Clone the Repository

git clone https://github.com/your-username/PocketSmart-AI.git
cd PocketSmart-AI

2. Create a Virtual Environment

python -m venv venv

Activate it:


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


Gemini API Setup:

PocketSmart AI requires access to the Gemini API.


General setup:



Create/configure your Google Cloud or supported Gemini API environment.

Generate an API key.

Store the key securely in an environment variable.

Configure the application to use the Gemini model.

Test both text and optional image-based requests.


Recommendation Sources:

The project is designed to work with or reference popular platforms such as:



Amazon

Flipkart

IKEA

Swiggy

Zomato

OYO


Availability and pricing depend on the connected implementation and external platform data.


Testing:

The project can be tested using different real-world scenarios:


Home


Different budgets

Different room types

Furniture and decor requirements


Party


Birthday events

Corporate events

Weddings

Different guest counts and budgets


Jewelry


Different occasions

Different style preferences

Outfit image inputs

Different budgets


Testing focuses on recommendation quality, budget adherence, input validation, and reliable API behavior.


 Security Notes:


Keep API keys inside environment variables.

Do not commit .env files to GitHub.

Use secure authentication and JWT handling.

Validate user inputs before sending them to AI services.

Configure CORS according to the deployment environment.


 Future Enhancements:


Real-time product price and availability tracking

More shopping and service platforms

Advanced budget optimization

Better recommendation ranking

Mobile application

User preference learning

Saved budget templates

More AI-powered planning categories


 Use Cases:

PocketSmart AI can help users:



Plan home interiors within a fixed budget.

Organize parties and events.

Find jewelry matching an outfit and occasion.

Compare recommendations across multiple categories.

Save time while making budget-conscious decisions.


Project Goal:

The goal of PocketSmart AI is to make everyday budgeting and planning simple, personalized, and AI-powered by combining generative AI with web technologies.


Project:

PocketSmart AI — Your Smart Budget & Recommendation Assistant


Built with FastAPI + Gemini 1.5 Flash Pro + HTML/CSS/JavaScript.
