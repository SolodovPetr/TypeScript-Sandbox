import faker from 'faker';
import { Mappable } from './interfaces';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  markerTitle: string;
  getMarkerContent() {
    return `
    <h1>Company name - ${this.name}</h1>
    <h3>Slogan: "${this.catchPhrase}"</h3>
    `;
  }

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.markerTitle = `Company Marker`;
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
