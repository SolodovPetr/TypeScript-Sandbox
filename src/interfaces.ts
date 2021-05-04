export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerTitle: string;
  getMarkerContent(): string;
}
