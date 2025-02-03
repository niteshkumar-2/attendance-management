Attendance Management System (Frontend)

🚀 Project Overview

This is the frontend of an Attendance Management System built with Angular.It allows managers to manage rosters and staff to mark attendance with a webcam image.

✨ Features

Manager Dashboard for roster management
Staff Portal for viewing shifts
Webcam-based Attendance Capture
API Integration with Mock Backend
🛠️ Tech Stack
Frontend: Angular 18, TypeScript
UI: Angular Material, Bootstrap

Backend (Mock API): Express.js (Optional)

📌 Live Demo

👉 Live App

🖥️ How to Run Locally

Clone the repo:

git clone https://github.com/your-repo-link.git

https://github.com/niteshkumar-2/attendance-management.git

Navigate to the project directory:
cd attendance-management-system
Install dependencies:
npm install
Run the development server:
ng serve
Open the app in your browser at:
http://localhost:4200

🔧 Mock API Setup (Optional)

If you don't have a backend yet, you can set up a mock API using JSON Server:

Install JSON Server:

npm install -g json-server

Create a db.json file with mock data:

{
  "attendance": []
}

Start the mock API:

json-server --watch db.json --port 3000

📷 How to Mark Attendance

Login as a Staff.

Navigate to the Mark Attendance page.

Capture an image using the webcam.

Click the Mark Attendance button to submit.

🔐 Login Credentials

Manager:

Username: manager

Password: admin123

Staff:

Username: staff

Password: staff123

🚀 Deployment

To deploy the frontend on Firebase:

Install Firebase CLI:
npm install -g firebase-tools
Login to Firebase:
firebase login
Initialize Firebase:
firebase init

Deploy the project: https://attendance-management-sy-1cc83.web.app/