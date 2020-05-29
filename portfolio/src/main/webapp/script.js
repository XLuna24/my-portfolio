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

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['I was originally going to be an Electrical Engineer but CS is much more fun!!!',
      'Got 2 dogs, A Chihuahua and a Shih Tzu name Clyde and Coco',
      'Was able to win my first hackathon with my amazing team!!!',
      'Would rather build a 1,000 piece puzzle and hang it on my wall then buy a poster'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;


}

var i = 0;
var time = 3000;
var kImage = ['images/k-color-draw.jpg', 'images/k-side-draw.jpg', 'images/k-face.jpg',
    'images/k-hollow-body.jpg', 'images/k-clothed-dody.jpg', 'images/k-final-kat.jpg']

function photoCycle() {
    document.getElementById('k-slide').src = kImage[i];

    if(i < kImage.length-1){
        i++;
    } else {
        i=0;
    }

    setTimeout("photoCycle", time);
}