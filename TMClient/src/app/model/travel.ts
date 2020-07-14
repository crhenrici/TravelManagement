import { Promotion } from './promotion';
import { Person } from './person';
export interface Travel {

  person: Person;
  travelId: number;
  departTime: string;
  departDate: Date;
  arrivalTime: string;
  arrivalDate: Date;
  departPlace: string;
  departCountry: string;
  destinationPlace: string;
  destinationCountry: string;
  promotion: Promotion;
  comment: string;
}
