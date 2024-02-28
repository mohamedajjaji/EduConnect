# EduConnect - Learning Management System

EduConnect is a learning management system that aims to bridge gaps and empower minds. It serves as a collaborative learning platform suitable for all age groups.

![EduConnect](/assets/EduConnect.png)

## Introduction

EduConnect utilizes modern web technologies for both the backend and frontend:

### Backend
- **Python:** A high-level programming language suitable for general-purpose programming.
- **Django:** A lightweight WSGI web application framework written in Python.
- **Django Rest:** Django Rest Framework (DRF) for building robust APIs.
- **SQLite:** An open-source relational database management system, suitable for web and mobile developers. It is written in C and operates within a Docker environment.

### Frontend
- **ReactJs:** A JavaScript library designed for building user interfaces.
- **Bootstrap 5:** A popular front-end component library used for building responsive web applications.

## Installation

To get started with EduConnect, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/mohamedajjaji/EduConnect.git
    cd EduConnect
    ```

3. Install backend dependencies and start the Django server:

    Create a virtual environment:

    ```bash
    py venv venv
    venv\Scripts\activate
    ```

    Then install dependencies and run the server:

    ```bash
    cd backend
    pip install -r requirements.txt
    py manage.py runserver 
    ```

4. Install frontend dependencies and start the development server:

    ```bash
    cd frontend
    npm install
    npm start
    ```

## Usage

Once the servers are running, you can access EduConnect at http://localhost:3000 for the frontend and http://localhost:8000 for the backend.

# Connect with Me

You can find me on various platforms:

- **LinkedIn:** [mohamedajjaji](https://www.linkedin.com/in/mohamedajjaji)
- **Twitter:** [mohamedajjaji](https://twitter.com/mohamedajjaji)

Feel free to reach out to me on any of these platforms!

## Licensing

EduConnect is licensed under the [The MIT License (MIT)](LICENSE).