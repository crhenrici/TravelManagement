package com.prose.cristian.TMServer.db;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.prose.cristian.TMServer.model.Travel;

@Repository
public interface TravelRepository extends CrudRepository<Travel, Long> {

}
