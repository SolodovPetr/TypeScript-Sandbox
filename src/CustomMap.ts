import { Mappable } from './interfaces';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  }

  addMarker(mappable: Mappable): void {
    let marker: google.maps.Marker;

    marker = new google.maps.Marker({
      map: this.googleMap,
      title: mappable.markerTitle,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.getMarkerContent(),
      });
      infowindow.open(this.googleMap, marker);
    });
  }
}
