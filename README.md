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

## Estimeted times

Backend API	~0.5 Hours

Frontend Core & State	~2 Hours

Carousel Implementation	~0.5 Hours (Complex Logic)

Styling & Polish	~1 Hour


Due to the **4-hour time constraint**, I made the following prioritization decisions:

1.  **Functionality over Styling:**
    My primary focus was on implementing the core logic, backend connection, and React state management. I prioritized a working application over design.

2.  **Carousel Implementation:**
    The carousel logic is implemented using React state and CSS transitions. Due to time limitations, the "infinite loop" animation is functional but requires further polish to be perfectly seamless. I am aware of the logic required to fix this, but I prioritized delivering the other mandatory features first.
