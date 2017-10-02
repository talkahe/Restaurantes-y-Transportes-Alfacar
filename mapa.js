window.onload = function () {
	var tapas = L.layerGroup();
	var restaurantes = L.layerGroup();
	var transporte = L.layerGroup();
	var Icon = L.Icon.extend({
	    iconSize:     [10, 10], //Tamaño del icono
	    iconAnchor:   [20, 40], //Posición del icono respecto al marcador
	    popupAnchor:  [0, 20] //Posición del popup respecto al icono
	});

	var tapaIcon = new Icon({iconUrl: 'tapa.png'}),
		restIcon = new Icon({iconUrl: 'restaurante.png'});
		busIcon = new Icon({iconUrl: 'bus.png'});

	L.marker([37.237753, -3.568379], {icon: tapaIcon}).bindPopup('Bar Nuevo Plaza II <br> Especialidad en carnes a la brasa').addTo(tapas);
	L.marker([37.235574, -3.565105], {icon: tapaIcon}).bindPopup('Il Club <br> Pizzas caseras').addTo(tapas);
	L.marker([37.237906, -3.567529], {icon: tapaIcon}).bindPopup('Casa Miguel').addTo(tapas);
	L.marker([37.236767, -3.566578], {icon: tapaIcon}).bindPopup('Bar Bodega de Ángeles <br> Comida casera y para llevar').addTo(tapas);
	L.marker([37.236648, -3.566898], {icon: tapaIcon}).bindPopup('Cafetería Marely. Desayunos, meriendas y tapas.').addTo(tapas);

	L.marker([37.236278, -3.570152], {icon: restIcon}).bindPopup('Alfapizza').addTo(restaurantes);
	L.marker([37.236005, -3.564625], {icon: restIcon}).bindPopup('Ruta de Lorca <br> Tapas, Almuerzos y Eventos').addTo(restaurantes);
	L.marker([37.245611, -3.554206], {icon: restIcon}).bindPopup('Fuente Grande <br> Comida casera. Actuaciones en directo.').addTo(restaurantes);
	L.marker([37.246738, -3.554358], {icon: restIcon}).bindPopup('El Patio <br> Comida tradicional.').addTo(restaurantes);

	var coordsBus = [
		[37.23494114472999,-3.5659381449386273],
		[37.2369761137715,-3.5660654157481985],
		[37.23804327873195,-3.5602176636621152],
		[37.24416922865809,-3.5564610957771947],
		[37.24554,-3.5535],
		[37.24697879098673,-3.5553368479259006],
		[37.24477968241316,-3.5594824701547622],
		[37.242666880649644,-3.560989201068878],
		[37.24311827147246,-3.5636162906803292],
		[37.23819585165096,-3.5662246048696033],
		[37.23692,-3.5663],
		[37.23469898201313,-3.5671000779166206]
	];

	for (i = 0; i < coordsBus.length; i++){
		L.marker(coordsBus[i], {icon: busIcon})
			.bindPopup('Línea 101 y 102. <br> <b>Frecuencia:</b> <br>Mañanas de lunes a viernes: 30 min <br>Tardes de lunes a viernes: 1h <br>Sábados: 2h <br>Domingos: 10:00, 12:00, 16:00, 19:00 <br><a href="http://siu.ctagr.es/es/horarios_lineas.php?lang=es&municipioLineas=248">+info</a>').addTo(transporte);
	}

	var normal   = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			id: 'mapbox.light',
			maxZoom: 17,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}),

		carreteras  = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
			id: 'mapbox.streets',
			maxZoom: 17,   
			attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}),

		sateliteGoogle = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
		    maxZoom: 17,
		    subdomains:['mt0','mt1','mt2','mt3'],
		    attribution: 'Google Maps'
		});

	var map = L.map('mapa', {
			center: [37.236830, -3.567236],
			zoom: 15,
			layers: [normal]
	});

	var mapas = {
			"Normal": normal,
			"Carreteras": carreteras,
			"Satélite": sateliteGoogle
	};

	var marcadores = {
			"Tapas": tapas,
			"Restaurantes": restaurantes,
			"Transporte": transporte
	};

	L.control.layers(mapas, marcadores).addTo(map);

	Limite2 = L.marker([37.247863, -3.554884]);
	Limite1 = L.marker([37.233017, -3.569075]);

	var limites = new L.featureGroup([Limite1, Limite2]);
	map.setMaxBounds(limites.getBounds());
};