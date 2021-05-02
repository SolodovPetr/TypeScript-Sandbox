import { User } from './User';
import { Company } from './Company';
import { initGoogleMapsScript } from '../mapsapikey';
import { CustomMap } from './CustomMap';

initGoogleMapsScript();

// Set callback for google maps scripts loaded
(window as any).initMap = function (): void {
  const user = new User();
  const company = new Company();
  const customMap = new CustomMap('map');
  customMap.addMarker(user);
  customMap.addMarker(company);
};
