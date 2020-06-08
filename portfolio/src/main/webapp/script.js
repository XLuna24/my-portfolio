// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


function getComments() {
    fetch('/get-comments').then(response => response.json()).then((comment) => {
        const commentList = document.getElementById('comnt-list');
        comment.forEach((comments) => {
            commentList.appendChild(createListElement(comments));
        })
    });
}

function deleteComments() {
    fetch('delete-data', {method: 'POST'});
    getComments();
}

function createListElement(comnt) {
  const commentBox = document.createElement('li');
  commentBox.className = 'comment-box';

  const uName = document.createElement('li');
  uName.className = 'comnt-post-title'
  uName.innerText = comnt.name + ' :';
  
  const data = document.createElement('span');
  data.innerText = comnt.comment;

  commentBox.appendChild(uName);
  commentBox.appendChild(data);
  return commentBox;
}

var map;
function createMap() {
    map = new google.maps.Map(
        document.getElementById('map'),{
        center: {lat: 35.883031, lng: -80.082047},
        zoom: 12,
        styles: [
            {"elementType": "geometry", "stylers": [{"color": "#1d2c4d"}]},
            {"elementType": "labels.text.fill", "stylers": [{"color": "#8ec3b9"}]},
            {"elementType": "labels.text.stroke","stylers": [{"color": "#1a3646"}]},
            {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#4b6878"}]},
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#64779e"}]},
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#4b6878"}]},
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#334e87"}]},
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [{"color": "#023e58"}]},
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{"color": "#283d6a"}]},
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#6f9ba5"}]},
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [{"color": "#1d2c4d"}]},
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#023e58"}]},
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#3C7680"}]},
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{"color": "#304a7d"}]},
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#98a5be"}]},
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [{"color": "#1d2c4d"}]},
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{"color": "#2c6675"}]},
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#255763"}]},
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#b0d5ce"}]},
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [{"color": "#023e58"}]},
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#98a5be"}]},
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [{"color": "#1d2c4d"}]},
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#283d6a"}]},
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [{"color": "#3a4762"}]},
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{"color": "#0e1626"}]},
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#4e6d70"}]}
    ]
        });

    const trexMarker = new google.maps.Marker({
    position: {lat: 35.883031, lng: -80.082047},
    map: map,
    title: 'Hometown'
  });
}

var i = 0;
var kImage = ['images/k-color-draw.jpg', 'images/k-side-draw.jpg', 'images/k-face.jpg',
    'images/k-hollow-body.jpg', 'images/k-clothed-dody.jpg', 'images/k-final-kat.jpg'];

function photoCycle() {
    const x = document.getElementById('k-slide');
    x.src = kImage[i];

    if(i < kImage.length-1){
        i++;
    } else {
        i=0;
    }

    setTimeout("photoCycle", 3000);
}