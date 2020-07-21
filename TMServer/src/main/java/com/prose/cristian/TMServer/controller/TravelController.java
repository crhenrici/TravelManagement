package com.prose.cristian.TMServer.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.base.Preconditions;
import com.prose.cristian.TMServer.db.TravelRepository;
import com.prose.cristian.TMServer.model.Travel;

@RestController
@CrossOrigin("http://localhost:4200")
public class TravelController {
	
	private TravelRepository travelRepo;

	public TravelController(TravelRepository travelRepo) {
		super();
		this.travelRepo = travelRepo;
	}
	
	@GetMapping("/travel/fetchAll")
	public List<Travel> getTravels() {
		List<Travel> travels = Preconditions.checkNotNull((List<Travel>) travelRepo.findAll(), "no travels found");
		return travels;
	}
	
	@GetMapping("/travel/{id}")
	public Optional<Travel> getTravelById(@Param("id") long id) {
		Optional<Travel> travel = travelRepo.findById(id);
		return travel;
	}
	
	@PostMapping("/travel/save")
	public Travel saveTravel(@RequestBody Travel travel) {
		Travel result = Preconditions.checkNotNull(travelRepo.save(travel), "Travel not found");
		return result;
	}
	
	@PostMapping("/travel/update")
	public Optional<Travel> updateTravel(@RequestBody Travel newTravel) {
		Preconditions.checkNotNull(newTravel, "travel can't be null");
		long id = newTravel.getTravelId();
		return travelRepo.findById(id).map(travel -> {
			travel.setArrivalDate(newTravel.getArrivalDate());
			travel.setArrivalTime(newTravel.getArrivalTime());
			travel.setComment(newTravel.getComment());
			travel.setDepartCountry(newTravel.getDepartCountry());
			travel.setDeparteDate(newTravel.getDeparteDate());
			travel.setDepartPlace(newTravel.getDepartPlace());
			travel.setDepartTime(newTravel.getDepartTime());
			travel.setDestinationCountry(newTravel.getDestinationCountry());
			travel.setDestinationPlace(newTravel.getDestinationPlace());
			travel.setPersonId(newTravel.getPersonId());
			travel.setPromotion(newTravel.getPromotion());
			return travelRepo.save(travel);
		});
	}

}
