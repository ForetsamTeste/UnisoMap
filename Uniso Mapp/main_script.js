    // Schuab - Leaflet(Inicio)
    // Inicia uma const map que cria um objeto usando L da biblioteca leaflet. setView está determinando as coordernadas e o zoom inicial(18)
    const map = L.map('map', {
        center: [0,0],
        zoom: 4,
        minZoom: 4,
        maxZoom: 7,
    })

    const imageUrl = 'assets/images/mapa.png';
    const imageBounds = [[-50, -100], [50,100]];

    L.imageOverlay(imageUrl, imageBounds).addTo(map);

    // southWest e northWest serão usadas para bloquar o movimento do usuário para além dessas coordenadas, para que ele não possa explorar qualquer canto do mundo.
    const southWest = L.latLng(-50, -100); 
    const northEast = L.latLng(50, 100);

    const bounds = L.latLngBounds(southWest, northEast);

    map.setMaxBounds(bounds);

    // markers
    const mastericon = L.icon({
        iconUrl: 'assets/images/mastericon.svg',
        iconSize: [30, 30], 
    });

    const markerblocoa = L.marker([0.3,-20], {
        title: 'Bloco A',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bloco A </h1> <p><a href="assets/links/blocoa.html">Saiba Mais</a></p>')

    const markerblocob = L.marker([-0.8,-16.9], {
        title: 'Bloco B',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bloco B </h1> <p><a href="assets/links/blocob.html">Saiba Mais</a></p>')

    const markerblococ = L.marker([-1,-13.8], {
        title: 'Bloco C',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bloco C </h1> <p><a href="assets/links/blococ.html">Saiba Mais</a></p>')

    const markerblocod = L.marker([-0.5,-10.7], {
        title: 'Bloco D',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bloco D </h1> <p><a href="assets/links/blocod.html">Saiba Mais</a></p>')

    const markerblocoe = L.marker([9,4.1], {
        title: 'Bloco E',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bloco E </h1> <p><a href="assets/links/blocoe.html">Saiba Mais</a></p>')

    const markerblocof = L.marker([1.5,4.1], {
        title: 'Bloco F',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bloco F </h1> <p><a href="assets/links/blocof.html">Saiba Mais</a></p>')

    const markerapoio1 = L.marker([5,-10], {
        title: 'Apoio 1',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Apoio 1 </h1> <p><a href="assets/links/apoio1.html">Saiba Mais</a></p>')

    const markerapoio2 = L.marker([4,-16], {
        title: 'Apoio 2',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Apoio 2 </h1> <p><a href="assets/links/apoio2.html">Saiba Mais</a></p>')

    const markerapoio3 = L.marker([9,1.4], {
        title: 'Apoio 3',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Apoio 3 </h1> <p><a href="assets/links/apoio3.html">Saiba Mais</a></p>')

    const markerapoio4 = L.marker([13,2.7], {
        title: 'Apoio 4',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Apoio 4 </h1> <p><a href="assets/links/apoio4.html">Saiba Mais</a></p>')

    const markerbiblioteca = L.marker([3.5,-4.5], {
        title: 'Biblioteca',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bibllioteca </h1> <p><a href="assets/links/biblioteca.html">Saiba Mais</a></p>')

    const markersaa = L.marker([1.6,-8.1], {
        title: 'SAA',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> SAA </h1> <p><a href="assets/links/saa.html">Saiba Mais</a></p>')

    const markercasasdeapoio = L.marker([6,-19], {
        title: 'Casas de Apoio',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Casas de Apoio </h1> <p><a href="assets/links/casasdeapoio.html">Saiba Mais</a></p>')

    const markerestacionamento = L.marker([-4,-10], {
        title: 'Estacionamento',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Estacionamentos </h1> <p><a href="assets/links/estacionamento.html">Saiba Mais</a></p>')

    const markerlapec = L.marker([7.7,-21.8], {
        title: 'LAPEC',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> LAPEC </h1> <p><a href="assets/links/lapec.html">Saiba Mais</a></p>')

    const markerquadras = L.marker([3,-22.7], {
        title: 'Quadras',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Quadras </h1> <p><a href="assets/links/quadras.html">Saiba Mais</a></p>')
    // Schuab - Leaflet(Fim)
