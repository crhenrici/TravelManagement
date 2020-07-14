import { Promotion } from './promotion';
import { Person } from './person';
export interface Stay {
  person: Person;
  stayId: number;
  checkinTime: string;
  checkoutTime: string;
  checkinDate: Date;
  checkoutDate: Date;
  accomodationPlace: string;
  accomodationCountry: string;
  promotion: Promotion;
  comment: string;
}
