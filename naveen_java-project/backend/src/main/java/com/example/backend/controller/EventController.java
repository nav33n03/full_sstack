package com.example.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Event;
import com.example.backend.service.EventService;

@RestController
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping("/createevent")
    public Event createEvent(@RequestBody Event event) {
        return eventService.createEvent(event);
    }

    @GetMapping("/eventsbyid")
    public String getdata(@RequestParam long id) {
        return eventService.getEventById(id).toString();
    }
   
    @GetMapping("/events")
    public Page<Event> getUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "name") String sortBy,
            @RequestParam(defaultValue = "asc") String direction
    ) {
        return eventService.getEvents(page, size);
    }
    @PostMapping("/saveevent")
    public void saveEvent(@RequestBody Event event) {
        eventService.saveEvent(event);
    }
    @PatchMapping("/updateemail/{id}")
    public ResponseEntity<String> updateEmail(@RequestBody String email, @PathVariable Long id) {
        eventService.updateEmail(email, id);
        return ResponseEntity.ok("Email updated successfully");
    } 
    
    
    @DeleteMapping("/deleteevent/{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.ok("Event deleted successfully");
    }
}