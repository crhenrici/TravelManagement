package com.prose.cristian.TMServer.model;

import lombok.Getter;
import lombok.Setter;

public class Promotion {
	
	@Getter
	@Setter
	private String bookingReference;
	@Getter
	@Setter
	private Boolean bookingState;
	@Getter
	@Setter
	private double price;
	@Getter
	@Setter
	private String paidCurrency;
	
	public Promotion(String bookingReference, Boolean bookingState, double price, String paidCurrency) {
		super();
		this.bookingReference = bookingReference;
		this.bookingState = bookingState;
		this.price = price;
		this.paidCurrency = paidCurrency;
	}
}
