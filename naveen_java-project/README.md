# EventSphere Clone (Spring Boot)

## 📌 Project Overview

This project is a **basic EventSphere-like clone** built using **Spring Boot**.  
The primary goal of this project is to **demonstrate core Spring Boot concepts** such as:

- REST API development
- MVC architecture
- Spring Data JPA & Hibernate
- Thymeleaf-based frontend rendering
- Database integration
- Project structuring & documentation

This project is **educational in nature** and focuses on clarity, structure, and best practices rather than full production features.

---

## 🎯 Project Aim

The aim of this project is to:
- Understand how a real-world backend application is structured
- Learn how Spring Boot handles controllers, services, repositories, and entities
- Demonstrate CRUD operations using REST APIs
- Show how frontend pages can be rendered using Thymeleaf
- Practice proper documentation and project organization

---

## 🛠️ Tech Stack

- **Java**
- **Spring Boot**
- **Spring MVC**
- **Spring Data JPA (Hibernate)**
- **Thymeleaf**
- **SQL Database (MySQL / PostgreSQL compatible)**
- **Maven**

---

## 📂 Project Structure
```
Event-Sphere/
├── backend/ # Spring Boot backend application
│ ├── src/main/java # Java source code
│ ├── src/main/resources
│ │ ├── templates # Thymeleaf HTML pages
│ │ ├── static # CSS, JS, images
│ │ └── application.properties
│ └── pom.xml
│
├── documentation/ # Project documentation
│ ├── API.md # API documentation
│ └── DATABASE.md # Database schema documentation
│
├── test/ # Testing & usage instructions
│ ├── sample requests
│ └── dummy data
│
├── .gitignore
└── README.md
```
---

## 📊 Database Overview

- The project currently uses a **single table**: `events`
- Managed using **Spring Data JPA**
- Schema is auto-generated via Hibernate

For detailed information, refer to: documentation/DATABASE.md

---

## 🔌 API Overview

The backend exposes REST APIs for:
- Creating events
- Fetching events (single & paginated)
- Updating event data
- Deleting events

It also includes a **frontend controller** that renders a basic homepage using Thymeleaf.

For detailed API usage, refer to: documentation/API.md

---

## ▶️ How to Run the Project

### Prerequisites
- Java 17+ (recommended)
- Maven
- MySQL or any SQL database

### Steps

1. **Clone the repository**
git clone <repository-url>

2. **Navigate to backend**
cd backend

3. **Configure database** 
-- Rename application.properties.example → application.properties
-- Update database credentials

4. **Run the application**
mvn spring-boot:run

5. **Access the application**
http://localhost:8080


### 🧪 Testing the APIs

**Refer to the test/ folder for:**
- Sample API requests
- Dummy data
- Instructions to test each endpoint

**You can use tools like:**
-Postman
-curl
-Browser (for GET requests)

### 📌 Disclaimer

-This project is created for learning and demonstration purposes only.
-It is not a full-featured replacement for EventSphere.