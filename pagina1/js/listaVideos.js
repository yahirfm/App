var videos = [
    { titulo: 'Perlas', descripcion: 'Latin Mafia', url: 'https://www.youtube.com/embed/EZV_rEwvXCI?si=TzLM9rRp8UlC9rXF' },
    { titulo: 'Mas Humano', descripcion: 'Latin Mafia', url: 'https://www.youtube.com/embed/X-6AkgvH4dM?si=RLTdKaVE24kTkF2V' },
    { titulo: 'Sal Rosa', descripcion: 'Latin Mafia', url: 'https://www.youtube.com/embed/kBqjWBjQX6I?si=B_o0icrNqDKM63A3' },
    { titulo: 'Se fue la luz', descripcion: 'Latin Mafia', url: 'https://www.youtube.com/embed/T4CEq1nK8rY?si=Ob_xDXossLm4seaa' }
];

var listaVideos = document.getElementById('listaVideosArreglos');

mostrarListaVideos(videos);

function mostrarListaVideos(videosBuscados) {
    listaVideos.innerHTML = '';
    videosBuscados.forEach(indiceVideo => {
        var fila = document.createElement('div');
        //Crear div para la url del video (columna 1)
        var col1UrlVideo = document.createElement('div');
        var iframeVideo = document.createElement('iframe');
        fila.setAttribute('class', 'row');
        col1UrlVideo.setAttribute('class', 'col');
        iframeVideo.setAttribute('src', indiceVideo.url);
        iframeVideo.setAttribute('width', '400px');
        iframeVideo.setAttribute('heigth', '400px');
        iframeVideo.setAttribute('frameborder', '0');
        col1UrlVideo.appendChild(iframeVideo);
        fila.appendChild(col1UrlVideo);

        //Crear div para el titulo y descripcion del video (columna 2)
        var col2TituloVideo = document.createElement('div');
        var h4TituloVideo = document.createElement('h4');
        var h6DescripcionVideo = document.createElement('h6');
        col2TituloVideo.setAttribute('class', 'col');
        h4TituloVideo.textContent = indiceVideo.titulo;
        h6DescripcionVideo.textContent = indiceVideo.descripcion;
        col2TituloVideo.appendChild(h4TituloVideo);
        col2TituloVideo.appendChild(h6DescripcionVideo);
        fila.appendChild(col2TituloVideo);

        //Crear el div para el boton (columna 3)
        var col3BotonVideo = document.createElement('div');
        var botonVideo = document.createElement('button');
        col3BotonVideo.setAttribute('class', 'col');
        botonVideo.setAttribute('class', 'btn btn-outline-primary');
        botonVideo.innerHTML = '@';
        col3BotonVideo.appendChild(botonVideo);
        fila.appendChild(col3BotonVideo);


        listaVideos.appendChild(fila);
    });
}


function buscarVideos() {
    var textoVideo = document.getElementById('txtBuscar').value;
    //alert('texto buscado' + textoVideo);
    var videosBuscados = videos.filter(
        indiceVideo => {
            return indiceVideo.titulo.includes(textoVideo);
        }
    );
    
    mostrarListaVideos(videosBuscados);
}