package com.example.backend.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Event;

@Repository
public interface EventRepo extends JpaRepository<Event, Long> {
    
 @Query("UPDATE Event e SET e.title = :title WHERE e.id = :id")
 int updateEmail(@Param("title") String email, @Param("id") Long id);

}
