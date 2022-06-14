$(document).ready(function () {
    let mymap = L.map("map_garrison", { center: [52.1, 19.0], zoom: 6.5 });
  
    let adresOSM = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    );
    
    
    // dodanie własnych danych 
    
    let garrisons = L.tileLayer.wms("http://127.0.0.1:8080/geoserver/garnizony/wms", {
      layers: "garnizony:Garnizony",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    });

    let counties = L.tileLayer.wms("http://127.0.0.1:8080/geoserver/garnizony/wms", {
        layers: "garnizony:powiaty",
        format: "image/png",
        transparent: "true",
        version: "1.1.1",
      });

      let municipalities = L.tileLayer.wms("http://127.0.0.1:8080/geoserver/garnizony/wms", {
        layers: "garnizony:gminy",
        format: "image/png",
        transparent: "true",
        version: "1.1.1",
      });
    
  
    // obsługa warstw
    let baseMaps = {
      "Podkład OSM": adresOSM
    };
    let overlayMaps = {
    
            
            "Garnizony": garrisons,
            "Powiaty": counties,
            "Gminy": municipalities,
    };
    L.control.layers(baseMaps,overlayMaps).addTo(mymap);
    mymap.addLayer(adresOSM);

  });
  
