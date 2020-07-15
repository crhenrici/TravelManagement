package com.prose.cristian.TMServer.model;

import java.util.Arrays;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
public class Person {

	@Getter
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	private long id;
	@Getter
	@Setter
	private String name;
	@Getter
	@Setter
	private Date birthdate;
	@Getter
	@Setter
	private String position;
	@Getter
	@Setter
	private String[] bonusProgramm;
	@Getter
	@Setter
	private Boolean swisspassState;
	@Getter
	@Setter
	private String swisspassId;
	@Getter
	@Setter
	private String avisId;
	@Getter
	@Setter
	private Boolean avisState;
	@Getter
	@Setter
	private String book;
	@Getter
	@Setter
	private String preferredSit;
	@Getter
	@Setter
	private String[] notes;
	
	public Person() {
		
	}
	
	public Person(long id, String name, Date birthdate, String position, String[] bonusProgramm, Boolean swisspassState,
			String swisspassId, String avisId, Boolean avisState, String book, String preferredSit, String[] notes) {
		super();
		this.id = id;
		this.name = name;
		this.birthdate = birthdate;
		this.position = position;
		this.bonusProgramm = bonusProgramm;
		this.swisspassState = swisspassState;
		this.swisspassId = swisspassId;
		this.avisId = avisId;
		this.avisState = avisState;
		this.book = book;
		this.preferredSit = preferredSit;
		this.notes = notes;
	}


	@Override
	public String toString() {
		return "Person [id=" + id + ", name=" + name + ", birthdate=" + birthdate + ", position=" + position
				+ ", bonusProgramm=" + Arrays.toString(bonusProgramm) + ", swisspassState=" + swisspassState
				+ ", swisspassId=" + swisspassId + ", avisState=" + avisState + ", book=" + book + ", preferredSit="
				+ preferredSit + ", notes=" + Arrays.toString(notes) + "]";
	}
	
	
}
