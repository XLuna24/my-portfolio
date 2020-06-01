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


function getFact() {
    fetch('/data').then(response => response.text()).then((quote) => {
        document.getElementById('greeting-container').innerText = quote;
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