/* Geography 575 Final Project
April 2019 */
//Create basemap, import OSM tiles
function createMap(){
	//Create map
	var map = L.map('map', {
		center: [38, -97],
		zoom: 3.5
	});
	//Add tiles
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	
	//***CALL DATA***
};
	
//Call function to create map
$(document).ready(createMap);