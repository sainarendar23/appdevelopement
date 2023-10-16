package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modal.Reminder;

@Repository
public interface ReminderRepository extends JpaRepository<Reminder, Long> {

	Reminder save(Reminder reminder);
}
