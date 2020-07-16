package com.prose.cristian.TMServer.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
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
		String[] bonusprogramm = {"some programm", "some other programm"};
		Integer[] bonusprogrammId = {312, 2132};
		String[] notes = {"notes", "some other notes"};
		Person person = new Person(1, "Cristian Henrici", new Date(1998, 01, 31), "Software Engineer", bonusprogramm, bonusprogrammId, true,
				"CH324202", "124212", true, "booked", "at the window", notes);
		this.personRepo.save(person);
	}
	
	@GetMapping("/person/fetchAll")
	@ResponseBody
	public List<Person> getAllPerson() {
		List<Person> persons = Preconditions.checkNotNull((List<Person>) personRepo.findAll(), "list of person is null");
		return persons;
	}
	
	@GetMapping("/person/{id}")
	@ResponseBody
	public Optional<Person> getPersonById(@Param("id") long id) {
		Optional<Person> person = Preconditions.checkNotNull(personRepo.findById(id), "person is null");
		return person;
	}
	
	@PostMapping("/person/save")
	@ResponseBody
	public Person savePerson(@RequestBody Person person) {
		Person result = Preconditions.checkNotNull(personRepo.save(person), "person can't be null");
		System.out.println("Person received: " + person.toString());
		return result;
	}
	
	@PutMapping("/person/update")
	@ResponseBody
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
