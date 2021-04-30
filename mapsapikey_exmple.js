// Create the script tag, set the appropriate attributes
let script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY';
script.defer = true;

export function appendMapsScript() {
  // Append the 'script' element to 'body'
  document.body.appendChild(script);
}
