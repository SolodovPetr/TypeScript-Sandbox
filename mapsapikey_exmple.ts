// Create the script tag, set the appropriate attributes
let script = document.createElement('script');

script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
script.async = true;

let map: google.maps.Map;

(window as any).initMap = function (): void {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
};

export function appendMapsScript() {
  // Append the 'script' element to 'body'
  document.head.appendChild(script);
}
