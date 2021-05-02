import { CustomMap } from './src/CustomMap';

// Create the script tag, set the appropriate attributes
let script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY=initMap';
script.defer = true;

// Set callback for google scripts loaded
(window as any).initMap = function (): void {
  // Now we can init Map
  new CustomMap('map');
};

export function initCustomMap() {
  // Append the 'script' element to 'head'
  document.head.appendChild(script);
}
