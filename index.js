


function initMap() {
 
    const map =  new google.maps.Map(document.getElementById("map"), {
         center: {lat: -35, lng: -55},
         zoom: 4,
         });

  const lugar1 = new google.maps.Marker({
    position : { lat: -23, lng: -42},
    map,
    title: "Cabo frío"
  })
  const lugar2 = new google.maps.Marker({
    position : { lat: -40.1567, lng: -71.3525},
    map,
    title: "San Martín de los Andes"
  })
  const lugar3 = new google.maps.Marker({
    position : { lat: -42, lng: -65},
    map,
    title: "Puerto Madryn"
  })
}





 