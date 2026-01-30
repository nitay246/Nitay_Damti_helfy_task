# Task Manager App
## Backend Setup
1. cd backend
2. npm install
3. npm start (runs on port 4000)

## Frontend Setup
1. cd frontend
2. npm install
3. npm start (runs on port 3000)

## API Endpoints
Method	Endpoint	Description	Body / Payload
GET	/	Fetch all tasks	-
POST	/	Create a new task	{ title: "...", description: "...", priority: "high/medium/low" }
PUT	/:id	Update a task	{ ...fields to update }
DELETE	/:id	Delete a task	-
PATCH	/:id/toggle	Toggle completion status

Backend API	~0.5 Hours
Frontend Core & State	~2 Hours
Carousel Implementation	~0.5 Hours (Complex Logic)
Styling & Polish	~1 Hour
