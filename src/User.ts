import faker from 'faker';
import { Mappable } from './interfaces';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerTitle: string;
  getMarkerContent() {
    return `<h1>User name - ${this.name}</h1>`;
  }
  constructor() {
    this.name = faker.name.firstName();
    this.markerTitle = `User Marker`;
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
