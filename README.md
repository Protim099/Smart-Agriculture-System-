# ShopSphere E-Commerce Management System

Full-stack starter project using Django REST Framework + React + MySQL.

## Backend
1. `cd backend`
2. Create virtual environment: `python -m venv venv`
3. Activate it on Windows: `venv\Scripts\activate`
4. Install: `pip install -r requirements.txt`
5. Copy `.env.example` to `.env` and configure MySQL.
6. Run migrations: `python manage.py migrate`
7. Create admin: `python manage.py createsuperuser`
8. Start: `python manage.py runserver`

API base: `http://127.0.0.1:8000/api/`
Admin: `http://127.0.0.1:8000/admin/`

## Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

Frontend: `http://localhost:5173`

This is a university-project-ready foundation with products, categories, cart, orders, authentication, and admin API.
