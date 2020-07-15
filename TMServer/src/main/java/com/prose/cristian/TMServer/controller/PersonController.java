package com.prose.cristian.TMServer.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.base.Preconditions;
import com.prose.cristian.TMServer.db.PersonRepository;
import com.prose.cristian.TMServer.model.*;

@RestController
@CrossOrigin("http://localhost:4200")
public class PersonController {
	
	PersonRepository personRepo;

	public PersonController(PersonRepository repo) {
		this.personRepo = repo;
	}
	
	@GetMapping("/person/fetchAll")
	public List<Person> getAllPerson() {
		List<Person> persons = Preconditions.checkNotNull((List<Person>) personRepo.findAll(), "list of person is null");
		return persons;
	}
	
	@GetMapping("/person/{id}")
	public Optional<Person> getPersonById(@Param("id") long id) {
		Optional<Person> person = Preconditions.checkNotNull(personRepo.findById(id), "person is null");
		return person;
	}
	
	@PostMapping("/person/save")
	public Person savePerson(@RequestBody Person person) {
		Person result = Preconditions.checkNotNull(personRepo.save(person), "person can't be null");
		return result;
	}
	
	@PutMapping("/person/update")
	public Optional<Person> updatePerson(@RequestBody Person newPerson) {
		Preconditions.checkNotNull(newPerson, "person can't be null");
		long id = newPerson.getId();
		return personRepo.findById(id).map(
				person -> {
					person.setName(newPerson.getName());
					person.setBirthdate(newPerson.getBirthdate());
					person.setPosition(newPerson.getPosition());
					person.setBonusProgramm(newPerson.getBonusProgramm());
					person.setSwisspassId(newPerson.getSwisspassId());
					person.setSwisspassState(newPerson.getSwisspassState());
					person.setAvisState(newPerson.getAvisState());
					person.setAvisId(newPerson.getAvisId());
					person.setBook(newPerson.getBook());
					person.setNotes(newPerson.getNotes());
					person.setPreferredSit(newPerson.getPreferredSit());
					return personRepo.save(person);
				});
		
	}
	
}
