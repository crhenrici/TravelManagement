package com.prose.cristian.TMServer.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
public class Travel {	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Getter
	private int travelId;
	@Getter
	@Setter
	private int personId;
	@Getter
	@Setter
	private String departTime;
	@Getter
	@Setter
	private Date departeDate;
	@Getter
	@Setter
	private String arrivalTime;
	@Getter
	@Setter
	private Date arrivalDate;
	@Getter
	@Setter
	private String departPlace;
	@Getter
	@Setter
	private String departCountry;
	@Getter
	@Setter
	private String destinationPlace;
	@Getter
	@Setter
	private String destinationCountry;
	@Getter
	@Setter
	private String comment;
	@Getter
	@Setter
	private Promotion promotion;
	
	public Travel(int travelId, int personId, String departTime, Date departeDate, String arrivalTime, Date arrivalDate,
			String departPlace, String departCountry, String destinationPlace, String destinationCountry,
			String comment, Promotion promotion) {
		super();
		this.travelId = travelId;
		this.personId = personId;
		this.departTime = departTime;
		this.departeDate = departeDate;
		this.arrivalTime = arrivalTime;
		this.arrivalDate = arrivalDate;
		this.departPlace = departPlace;
		this.departCountry = departCountry;
		this.destinationPlace = destinationPlace;
		this.destinationCountry = destinationCountry;
		this.comment = comment;
		this.promotion = promotion;
	}
	
	@Override
	public String toString() {
		return "Travel [travelId=" + travelId + ", personId=" + personId + ", departTime=" + departTime
				+ ", departeDate=" + departeDate + ", arrivalTime=" + arrivalTime + ", arrivalDate=" + arrivalDate
				+ ", departPlace=" + departPlace + ", departCountry=" + departCountry + ", destinationPlace="
				+ destinationPlace + ", destinationCountry=" + destinationCountry + ", comment=" + comment
				+ ", promotion=" + promotion + "]";
	}
	
	
}
