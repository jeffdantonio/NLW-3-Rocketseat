const options = {
   dragging: false,
   touchZoom: false,
   doubleClickZoom: false,
   scrollWheelZoom: false,
   zoomControl: false
}


// create map
const map = L.map('mapid', options).setView([-23.5852223,-46.680588], 16);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// create icon layer
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})



// create and add marker
L.marker([-23.5852223,-46.680588], {icon}).addTo(map)
 

// image gallery

function selectImage(event){
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {button.classList.remove("active")});
    console.log(buttons);

    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");
    imageContainer.src = image.src;

    button.classList.add("active");
  
}

