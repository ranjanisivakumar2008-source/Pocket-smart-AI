**PocketSmart AI**
**Your Smart Budget & Recommendation Assistant**

PocketSmart AI is a Generative AI-powered budget planning and recommendation platform designed to help users make smarter decisions within their budget.

The platform provides personalized recommendations for:

Home Interior Planning

Party and Event Planning

Jewelry Selection

It uses FastAPI as the backend and Google Gemini AI to understand user requirements, budgets, preferences, contextual information, and optional images to generate personalized recommendations.

Features
Home Interior Budget Planner

Plan your home interiors according to your budget and preferences.

Features

Enter your total budget

Select room types

Specify quantities

Add personal preferences

Get furniture recommendations

Get lighting recommendations

Get decor recommendations

Get fan and dining table suggestions

Generate budget-aware interior plans

Party Budget Planner

Plan parties and events while considering your available budget.

Features

Select event type

Enter total budget

Enter guest count

Provide venue details

Get food recommendations

Get decoration suggestions

Get venue suggestions

Get accommodation suggestions

Generate personalized event plans

Supported Event Examples

Birthday Parties

Corporate Events

Weddings

Family Functions

Private Events

Jewelry Budget Planner

Find jewelry recommendations based on your occasion, budget, style, and outfit.

Features

Enter jewelry budget

Select occasion

Select preferred style

Upload outfit image

Analyze outfit colors

Match jewelry with outfit style

Generate personalized jewelry suggestions

Generative AI

PocketSmart AI uses Google Gemini to generate contextual recommendations.

The AI can process:

User requirements

Budget information

Preferences

Event details

Room details

Occasion information

Optional outfit images

The system then generates recommendations based on the information provided by the user.

User Authentication

PocketSmart AI includes user authentication and session management.

Features

User Registration

User Login

Logout

JWT Authentication

Session Management

Protected User Data

Personalized Dashboard

Users can access a personalized dashboard containing:

Recent recommendations

Saved queries

Previous planning requests

Recommendation details

User-specific information

Recommendation History

Users can review their previous AI-generated recommendations.

The history system allows users to:

View previous requests

Review generated recommendations

Access saved planning information

Track previous budgeting decisions

How It Works
                    User
                      |
                      v
              Select Planner
       Home / Party / Jewelry
                      |
                      v
             Enter Budget &
               Preferences
                      |
                      v
                FastAPI
           Request Validation
                      |
                      v
             Google Gemini
             Generative AI
                      |
                      v
        Personalized Recommendations
                      |
                      v
              Web Interface

Tech Stack
Technology	Purpose
Python	Core programming language
FastAPI	Backend API framework
Google Gemini	Generative AI recommendations
HTML5	Frontend structure
CSS3	Styling and responsive design
JavaScript	Frontend interactions
Jinja2	Dynamic HTML templates
JWT	Authentication
Uvicorn	ASGI server
CORS	Cross-origin communication
Third-Party APIs	Product and service sourcing
Project Structure
PocketSmart-AI/
│
├── main.py
├── gemini_utils.py
├── requirements.txt
├── .env
├── .gitignore
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


The exact project structure may vary depending on the implementation.

API Endpoints
Planner Routes
Home Planner
POST /generate-home

Party Planner
POST /generate-party

Jewelry Planner
POST /generate-jewelry

Authentication Routes
POST /register
POST /login
POST /logout
POST /token

Session and History Routes
GET /session-info
GET /session-data
GET /history
GET /recommendations-details
GET /startup

Installation
1. Clone the Repository
git clone https://github.com/your-username/PocketSmart-AI.git
cd PocketSmart-AI

2. Create a Virtual Environment
Windows
python -m venv venv
venv\Scripts\activate

Linux / macOS
python3 -m venv venv
source venv/bin/activate

3. Install Dependencies
pip install -r requirements.txt

Environment Variables

Create a .env file in the root directory.

GEMINI_API_KEY=your_gemini_api_key


Do not commit your actual API key to GitHub.

Add the following entries to .gitignore:

.env
venv/
__pycache__/
*.pyc

Gemini API Configuration

PocketSmart AI requires a Gemini API key to generate AI-powered recommendations.

General setup:

Create or configure your Gemini API environment.

Generate an API key.

Store the API key in the .env file.

Configure the application to use the required Gemini model.

Test both text-based and image-based requests.

Run the Application

Start the FastAPI development server:

uvicorn main:app --reload


The application will be available through the local URL displayed by Uvicorn.

FastAPI's interactive API documentation can typically be accessed at:

http://127.0.0.1:8000/docs

Testing

PocketSmart AI can be tested using different real-world scenarios.

Home Interior Testing

Test with:

Different budgets

Different room types

Different furniture requirements

Different decor preferences

Different quantities

Party Planning Testing

Test with:

Birthday events

Corporate events

Weddings

Different guest counts

Different budgets

Different venue requirements

Jewelry Testing

Test with:

Different occasions

Different budgets

Different jewelry styles

Different outfit colors

Different outfit images

Testing Focus

The application should be tested for:

Recommendation quality

Budget adherence

Input validation

API reliability

Authentication

Session management

Image handling

AI response handling

Recommendation Sources

Depending on the implementation, recommendations may reference popular platforms such as:

Amazon

Flipkart

IKEA

Swiggy

Zomato

OYO

Product prices, availability, links, and services depend on the external platforms and integrations used by the implementation.

Security

PocketSmart AI follows basic security practices such as:

API keys stored in environment variables

JWT-based authentication

Input validation

Protected user sessions

CORS configuration

.env excluded from version control

For production deployment, additional security controls should be implemented according to the deployment environment.

Future Enhancements

Real-time product price tracking

Real-time product availability

Integration with additional shopping platforms

Integration with additional food and event platforms

Advanced budget optimization

Improved recommendation ranking

Mobile application

User preference learning

Saved budget templates

More interior planning options

More event planning categories

Advanced outfit and jewelry image analysis

Use Cases
Home Planning

Plan furniture, lighting, decor, and other home requirements within a predefined budget.

Event Planning

Create personalized event plans based on event type, guest count, venue, and budget.

Jewelry Selection

Find jewelry suggestions based on occasion, budget, personal style, and outfit.

Budget Management

Make planning decisions while keeping the user's specified budget in consideration.

Project Goal

The main goal of PocketSmart AI is to make everyday planning and budgeting simple, personalized, and AI-powered.

By combining Generative AI, FastAPI, and modern web technologies, PocketSmart AI provides users with contextual recommendations while considering their budget and preferences.

Why PocketSmart AI?

Traditional planning often requires users to search through multiple websites and manually compare different options.

PocketSmart AI simplifies this process by allowing users to provide:

Budget + Preferences + Requirements


and receive:

AI-Powered Personalized Recommendations


through a single platform.

Development

PocketSmart AI is built using:

Python
    |
FastAPI
    |
Google Gemini AI
    |
HTML / CSS / JavaScript
    |
Jinja2
    |
JWT Authentication

License

This project can be distributed under the license selected by the project owner.

Example:

MIT License

Project
PocketSmart AI
Your Smart Budget & Recommendation Assistant

Built with FastAPI, Google Gemini, HTML, CSS, and JavaScript.
