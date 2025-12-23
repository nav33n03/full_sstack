# API Documentation

## Overview

This document describes all available endpoints exposed by the Spring Boot backend.

The project exposes:
- **REST APIs** for managing events
- **Server-side rendered pages** using Thymeleaf

Base URL (local):
http://localhost:8080


---

## Controllers Overview

| Controller | Type | Purpose |
|-----------|-----|--------|
| `EventController` | REST Controller | CRUD operations on events |
| `PageController` | MVC Controller | Renders frontend pages |

---

## 1️⃣ PageController (Frontend)

### Home Page

**Endpoint**
GET /


**Description**
- Renders the home page using Thymeleaf
- Returns `hello.html` from the templates directory

**Response**
- HTML page

**Example**
http://localhost:8080/


---

## 2️⃣ EventController (REST APIs)

All endpoints below return **JSON responses** unless stated otherwise.

---

### Create Event

**Endpoint**
POST /createevent

**Description**
- Creates a new event and stores it in the database

**Request Body**

{
  "title": "Tech Conference",
  "description": "Annual tech meetup",
  "location": "Delhi",
  "date": "2025-01-10"
}

**Response**

{
  "id": 1,
  "title": "Tech Conference",
  "description": "Annual tech meetup",
  "location": "Delhi",
  "date": "2025-01-10"
}




### Get Event By ID

**Endpoint**

GET /eventsbyid?id={id}

**Description**

Fetches a single event using its ID

**Query Parameters**

Name	Type	Required
`id	`   long	Yes

**Example**
GET /eventsbyid?id=1

**Response**

Event{id=1, title='Tech Conference', location='Delhi'}
Note: This endpoint currently returns a string representation of the entity.




### Get All Events (Paginated)

**Endpoint**
GET /events

**Description**
Retrieves events with pagination support

**Query Parameters**

Name	Default	Description
page	0	Page number
size	5	Number of records per page
sortBy	name	Sorting field (currently unused)
direction	asc	Sort direction (currently unused)

**Example**
GET /events?page=0&size=5

**Response**
{
  "content": [
    {
      "id": 1,
      "title": "Tech Conference",
      "description": "Annual tech meetup",
      "location": "Delhi",
      "date": "2025-01-10"
    }
  ],
  "totalPages": 1,
  "totalElements": 1
}




### Save Event
**Endpoint**
POST /saveevent

**Description**
Saves an event without returning a response body

**Request Body**
{
  "title": "Workshop",
  "description": "Spring Boot workshop",
  "location": "Mumbai",
  "date": "2025-02-01"
}

**Response**
HTTP 200 OK




### Update Event Email (Partial Update)

**Endpoint**
PATCH /updateemail/{id}

**Description**
Updates the email field for an event (if applicable in service logic)

**Path Variable**

`Name`	`Type`
id	Long

**Request Body**
example@email.com

**Response**
Email updated successfully




### Delete Event

**Endpoint**
DELETE /deleteevent/{id}

**Description**
Deletes an event by ID

**Path Variable**
`Name`	`Type`
id	Long

**Response**
Event deleted successfully
