window.onload = function () {
	var tapas = L.layerGroup();
	var restaurantes = L.layerGroup();
	var Icon = L.Icon.extend({
	    iconSize:     [10, 10], //Tamaño del icono
	    iconAnchor:   [20, 40], //Posición del icono respecto al marcador
	    popupAnchor:  [0, 20] //Posición del popup respecto al icono
	});

	var tapaIcon = new Icon({iconUrl: 'tapa.png'}),
		restIcon = new Icon({iconUrl: 'restaurante.png'});

	L.marker([37.237753, -3.568379], {icon: tapaIcon}).bindPopup('Bar Nuevo Plaza II <br> Especialidad en carnes a la brasa').addTo(tapas);
	L.marker([37.235574, -3.565105], {icon: tapaIcon}).bindPopup('Il Club <br> Pizzas caseras').addTo(tapas);
	L.marker([37.237906, -3.567529], {icon: tapaIcon}).bindPopup('Casa Miguel').addTo(tapas);
	L.marker([37.236767, -3.566578], {icon: tapaIcon}).bindPopup('Bar Bodega de Ángeles <br> Comida casera y para llevar').addTo(tapas);
	L.marker([37.236648, -3.566898], {icon: tapaIcon}).bindPopup('Cafetería Marely. Desayunos, meriendas y tapas.').addTo(tapas);

	L.marker([37.236278, -3.570152], {icon: restIcon}).bindPopup('Alfapizza').addTo(restaurantes);
	L.marker([37.236005, -3.564625], {icon: restIcon}).bindPopup('Ruta de Lorca <br> Tapas, Almuerzos y Eventos').addTo(restaurantes);
	L.marker([37.245611, -3.554206], {icon: restIcon}).bindPopup('Fuente Grande <br> Comida casera. Actuaciones en directo.').addTo(restaurantes);
	L.marker([37.246738, -3.554358], {icon: restIcon}).bindPopup('El Patio <br> Comida tradicional.').addTo(restaurantes);


	var normal   = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			id: 'mapbox.light',
			maxZoom: 17,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}),

		carreteras  = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
			id: 'mapbox.streets',
			maxZoom: 17,   
			attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});

	var map = L.map('mapa', {
			center: [37.236830, -3.567236],
			zoom: 15,
			layers: [normal, carreteras]
	});

	var mapas = {
			"Normal": normal,
			"Carreteras": carreteras
	};

	var marcadores = {
			"Tapas": tapas,
			"Restaurantes": restaurantes
	};

	L.control.layers(mapas, marcadores).addTo(map);
};