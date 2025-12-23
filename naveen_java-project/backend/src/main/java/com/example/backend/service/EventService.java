package com.example.backend.service;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Page;
import com.example.backend.repo.EventRepo;
import com.example.backend.model.Event;
import java.util.Optional;

@Service
public class EventService {
    private final EventRepo eventRepo;

    // Constructor Injection (BEST PRACTICE)
    public EventService(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    // Create Event
    public Event createEvent(Event event) {
        return eventRepo.save(event);
    }
    
    // Get Event by ID
    public Optional<Event> getEventById(Long id) {
        return eventRepo.findById(id);
    }

    // Save Event
    public Event saveEvent(Event event) {
        return eventRepo.save(event);
    }

    // Delete Event
    public void deleteEvent(Long id) {
        eventRepo.deleteById(id);
    }

    // Update Email (rename properly)
    public void updateEmail(String email, Long id) {
        eventRepo.updateEmail(email, id);
    }

    // Pagination + Sorting
    public Page<Event> getEvents(int page, int size) {
        Pageable pageable = PageRequest.of(
                page,
                size,
                Sort.by("date").ascending()
        );
        return eventRepo.findAll(pageable);
    }
}
