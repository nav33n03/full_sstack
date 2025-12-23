# Database Documentation

## Overview

This project currently uses a **single-table relational database design** to manage event-related data.  
The database is integrated using **Spring Boot + Spring Data JPA (Hibernate)**.

- ORM Framework: Hibernate
- Database Type: SQL (MySQL / PostgreSQL compatible)
- Schema generation: Automatic via JPA annotations

---

## Table: `events`

The `events` table stores information about events such as title, description, location, and date.

### Entity Mapping

This table is mapped to the following JPA entity:

```java
@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String location;
    private String date;
}
