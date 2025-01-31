<p align="center">
  <img src="https://laravel.com/img/logomark.min.svg" width="100" alt="Laravel Logo">
  <img src="https://laravel.com/img/logotype.min.svg" width="200" alt="Laravel Logo">
</p>

# **Student Management System (Angular + Laravel 16)**

## **Overview**
This project is a **Student Management System** built using **Angular** for the frontend and **Laravel 16** for the backend. It allows users to **add, delete, and edit student details** through a **CRUD (Create, Read, Update, Delete) API**. The application follows a modern web development approach, using **RESTful API integration** between Angular and Laravel.

## **Features**
✅ **Add** new student details  
✅ **Edit** existing student details  
✅ **Delete** student records  
✅ **Fetch** student details from the backend  
✅ **API integration** between Angular and Laravel  
✅ **Bootstrap** for responsive UI  

## **Technologies Used**

### **Frontend**
- **Angular** (Latest Version)  
- **Bootstrap** (for UI styling)  

### **Backend**
- **Laravel 16** (REST API)  
- **XAMPP**  

## **Installation**

1️⃣ Clone the Repository
      git clone https://github.com/your-username/your-repo.git
      cd your-repo

2️⃣ Backend (Laravel 16) Setup

Navigate to the backend folder:

       cd API_crud
   
Install dependencies:

       composer install
   
Set up environment variables:

      cp .env.example .env

Generate the application key:

    php artisan key:generate
  
Configure database settings in the .env file.


Run database migrations:

      php artisan migrate

Start the Laravel server:

      php artisan serve



3️⃣ Frontend (Angular) Setup

Navigate to the frontend folder:

      cd Angular_crud

Install dependencies:

      npm install

Run the Angular development server:

      ng serve

Additional Laravel Commands

Clear Cache:

    php artisan cache:clear

Clear Config Cache:

    php artisan config:clear

Optimize Route Performance:

    php artisan route:cache
    

Contributing

    Feel free to fork this repository and submit pull requests for improvements!


License

    This project is MIT licensed.

bold the topics in this readme file
