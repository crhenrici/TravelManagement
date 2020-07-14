import { Stay } from './stay';
import { Promotion } from './promotion';
import { Travel } from './travel';
import { Person } from './person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockData {
  promotion: Promotion = { bookingReference: 'some reference', bookingState: true, price: 24.35, paidCurrency: 'Swiss francs' };
  person: Person = {
    name: 'Cristian Henrici', personId: 1, birthday: new Date(1998, 1, 31), position: 'Software Engineer',
    bonusProgramm: ['someprogram', 'someprogram'], swisspassState: true, swisspassId: '123', avisState: true, avisId: '12421', preferredSit: 'there', book: 'yes', notes: ['affa', 'faasfa']
  };
  travel: Travel = {
    person: this.person, travelId: 1, departTime: '10:12', departDate: new Date(2020, 2, 24), arrivalTime: '12:34',
    arrivalDate: new Date(2020, 2, 24), departPlace: 'Winterthur', departCountry: 'Switzerland',
    destinationPlace: 'Barcelona', destinationCountry: 'Spain',
    promotion: this.promotion, comment: 'some comment'
  };

  stay: Stay = {
    person: this.person, stayId: 1, checkinTime: '10:12', checkinDate: new Date(2020, 2, 24), checkoutTime: '14:10',
     checkoutDate: new Date(2020, 2, 28), accomodationPlace: 'Barcelona', accomodationCountry: 'Spain',
     promotion: this.promotion, comment: 'some comment'
  };
  dataPerson: Person[] = [this.person];

  dataTravel: Travel[] = [this.travel];

  dataStay: Stay[] = [this.stay];

}
