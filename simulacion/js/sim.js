// ========================
// DATA UNIVERSOS (GLOBAL)
// ========================

const DATA = {

    // ========================
    // ⭐ STAR WARS
    // ========================

    starwars: {
        nombre: "Star Wars",
        descripcion: "Explora la galaxia muy, muy lejana",
        hero: "assets/starwars.jpg",

        contenido: [

            // PRECUELA
            { titulo: "Episodio I", año: 1999, tipo: "pelicula", personaje: "Anakin", epoca: "precuela", descripcion: "Descubrimiento de Anakin", img: "assets/starwars.jpg" },
            { titulo: "Episodio II", año: 2002, tipo: "pelicula", personaje: "Anakin", epoca: "precuela", descripcion: "Inicio del conflicto", img: "assets/starwars.jpg" },
            { titulo: "The Clone Wars", año: 2008, tipo: "serie", personaje: "Anakin", epoca: "precuela", descripcion: "Guerra clon", img: "assets/starwars.jpg" },
            { titulo: "Episodio III", año: 2005, tipo: "pelicula", personaje: "Anakin", epoca: "precuela", descripcion: "Nacimiento de Vader", img: "assets/starwars.jpg" },

            // IMPERIO
            { titulo: "The Bad Batch", año: 2021, tipo: "serie", personaje: "Clones", epoca: "imperio", descripcion: "Clones tras la caída", img: "assets/starwars.jpg" },
            { titulo: "Jedi Fallen Order", año: 2019, tipo: "juego", personaje: "Cal", epoca: "imperio", descripcion: "Jedi superviviente", img: "assets/starwars.jpg" },
            { titulo: "Obi-Wan Kenobi", año: 2022, tipo: "serie", personaje: "Obi-Wan", epoca: "imperio", descripcion: "Exilio Jedi", img: "assets/starwars.jpg" },
            { titulo: "Andor", año: 2022, tipo: "serie", personaje: "Cassian", epoca: "imperio", descripcion: "Origen rebelión", img: "assets/starwars.jpg" },
            { titulo: "Rogue One", año: 2016, tipo: "pelicula", personaje: "Jyn", epoca: "imperio", descripcion: "Robo planos", img: "assets/starwars.jpg" },

            // CLÁSICO
            { titulo: "Episodio IV", año: 1977, tipo: "pelicula", personaje: "Luke", epoca: "clasico", descripcion: "Nueva esperanza", img: "assets/starwars.jpg" },
            { titulo: "Episodio V", año: 1980, tipo: "pelicula", personaje: "Luke", epoca: "clasico", descripcion: "Imperio contraataca", img: "assets/starwars.jpg" },
            { titulo: "Episodio VI", año: 1983, tipo: "pelicula", personaje: "Luke", epoca: "clasico", descripcion: "Fin del imperio", img: "assets/starwars.jpg" },

            // REPÚBLICA
            { titulo: "The Mandalorian", año: 2019, tipo: "serie", personaje: "Mando", epoca: "republica", descripcion: "Cazarrecompensas", img: "assets/starwars.jpg" },
            { titulo: "Ahsoka", año: 2023, tipo: "serie", personaje: "Ahsoka", epoca: "republica", descripcion: "Búsqueda Thrawn", img: "assets/starwars.jpg" },

            // SECUELA
            { titulo: "Episodio VII", año: 2015, tipo: "pelicula", personaje: "Rey", epoca: "secuela", descripcion: "Nueva generación", img: "assets/starwars.jpg" },
            { titulo: "Episodio VIII", año: 2017, tipo: "pelicula", personaje: "Rey", epoca: "secuela", descripcion: "Equilibrio", img: "assets/starwars.jpg" },
            { titulo: "Episodio IX", año: 2019, tipo: "pelicula", personaje: "Rey", epoca: "secuela", descripcion: "Final saga", img: "assets/starwars.jpg" },
        
            { titulo: "Darth Plagueis", año: 2012, tipo: "libro", personaje: "Plagueis", epoca: "precuela", descripcion: "Orígenes del lado oscuro", img: "assets/starwars.jpg" },
            { titulo: "Thrawn", año: 2017, tipo: "libro", personaje: "Thrawn", epoca: "imperio", descripcion: "Ascenso del Gran Almirante", img: "assets/starwars.jpg" },
            { titulo: "Aftermath", año: 2015, tipo: "libro", personaje: "Rebelión", epoca: "republica", descripcion: "Tras la caída del Imperio", img: "assets/starwars.jpg" }
        ],

        personajes: [
            { nombre: "Anakin Skywalker", actor: "Hayden Christensen", img: "assets/starwars.jpg" },
            { nombre: "Darth Vader", actor: "James Earl Jones", img: "assets/starwars.jpg" },
            { nombre: "Luke Skywalker", actor: "Mark Hamill", img: "assets/starwars.jpg" },
            { nombre: "Leia Organa", actor: "Carrie Fisher", img: "assets/starwars.jpg" },
            { nombre: "Han Solo", actor: "Harrison Ford", img: "assets/starwars.jpg" },
            { nombre: "Obi-Wan Kenobi", actor: "Ewan McGregor", img: "assets/starwars.jpg" },
            { nombre: "Rey", actor: "Daisy Ridley", img: "assets/starwars.jpg" }
        ]
    },

    // ========================
    // 🍩 SIMPSONS
    // ========================

    simpsons: {
    nombre: "Los Simpson",
    descripcion: "Springfield y sus historias a lo largo de décadas",
    hero: "assets/simpsons.jpg",

    contenido: [

        // 🟡 INICIO
        {
            titulo: "Temporadas 1-3",
            año: 1989,
            tipo: "serie",
            personaje: "Homer",
            epoca: "inicio",
            descripcion: "Primeros años y evolución de personajes",
            img: "assets/simpsons.jpg"
        },

        // 🟢 EDAD DORADA
        {
            titulo: "Temporadas 4-9",
            año: 1993,
            tipo: "serie",
            personaje: "Homer",
            epoca: "dorado",
            descripcion: "Etapa más icónica y mejores episodios",
            img: "assets/simpsons.jpg"
        },

        // 🔵 EXPANSIÓN
        {
            titulo: "Temporadas 10-15",
            año: 1999,
            tipo: "serie",
            personaje: "Homer",
            epoca: "expansion",
            descripcion: "Popularidad global y cambios de estilo",
            img: "assets/simpsons.jpg"
        },

        // 🟣 MODERNO
        {
            titulo: "Temporadas 16-25",
            año: 2005,
            tipo: "serie",
            personaje: "Homer",
            epoca: "moderno",
            descripcion: "Adaptación a nuevas audiencias",
            img: "assets/simpsons.jpg"
        },

        // 🔴 ACTUAL
        {
            titulo: "Temporadas 26-Actualidad",
            año: 2014,
            tipo: "serie",
            personaje: "Homer",
            epoca: "actual",
            descripcion: "Era contemporánea y streaming",
            img: "assets/simpsons.jpg"
        },

        // 🎬 PELÍCULA
        {
            titulo: "Los Simpson: La Película",
            año: 2007,
            tipo: "pelicula",
            personaje: "Homer",
            epoca: "dorado",
            descripcion: "Evento cinematográfico de la serie",
            img: "assets/simpsons.jpg"
        },

        { titulo: "Simpsons Comics", año: 1993, tipo: "libro", personaje: "Bart", epoca: "clasico", descripcion: "Historias en cómic", img: "assets/simpsons.jpg" },
        { titulo: "Bart Simpson Comics", año: 2000, tipo: "libro", personaje: "Bart", epoca: "clasico", descripcion: "Aventuras de Bart", img: "assets/simpsons.jpg" }
    
    ],

    personajes: [

        { nombre: "Homer Simpson", actor: "Dan Castellaneta", img: "assets/simpsons.jpg" },
        { nombre: "Marge Simpson", actor: "Julie Kavner", img: "assets/simpsons.jpg" },
        { nombre: "Bart Simpson", actor: "Nancy Cartwright", img: "assets/simpsons.jpg" },
        { nombre: "Lisa Simpson", actor: "Yeardley Smith", img: "assets/simpsons.jpg" },
        { nombre: "Maggie Simpson", actor: "—", img: "assets/simpsons.jpg" },

        { nombre: "Mr. Burns", actor: "Harry Shearer", img: "assets/simpsons.jpg" },
        { nombre: "Ned Flanders", actor: "Harry Shearer", img: "assets/simpsons.jpg" },
        { nombre: "Krusty", actor: "Dan Castellaneta", img: "assets/simpsons.jpg" },
        { nombre: "Milhouse", actor: "Pamela Hayden", img: "assets/simpsons.jpg" },
        { nombre: "Apu Nahasapeemapetilon", actor: "Hank Azaria", img: "assets/simpsons.jpg" },

        ]
},

    // ========================
    // ⚡ HARRY POTTER
    // ========================

    harrypotter: {
    nombre: "Harry Potter",
    descripcion: "El mundo mágico y la lucha contra Voldemort",
    hero: "assets/harrypotter.jpg",

    contenido: [

        // 🟡 ORÍGENES
        {
            titulo: "Animales Fantásticos",
            año: 2016,
            tipo: "pelicula",
            personaje: "Newt",
            epoca: "origen",
            descripcion: "Antes de Harry, el mundo mágico en expansión",
            img: "assets/harrypotter.jpg"
        },

        // 🟢 HOGWARTS
        {
            titulo: "Piedra Filosofal",
            año: 2001,
            tipo: "pelicula",
            personaje: "Harry",
            epoca: "hogwarts",
            descripcion: "Descubrimiento del mundo mágico",
            img: "assets/harrypotter.jpg"
        },
        {
            titulo: "Cámara Secreta",
            año: 2002,
            tipo: "pelicula",
            personaje: "Harry",
            epoca: "hogwarts",
            descripcion: "El heredero de Slytherin",
            img: "assets/harrypotter.jpg"
        },
        {
            titulo: "Prisionero de Azkaban",
            año: 2004,
            tipo: "pelicula",
            personaje: "Harry",
            epoca: "hogwarts",
            descripcion: "Sirius Black y los dementores",
            img: "assets/harrypotter.jpg"
        },

        // 🔴 GUERRA
        {
            titulo: "Cáliz de Fuego",
            año: 2005,
            tipo: "pelicula",
            personaje: "Harry",
            epoca: "guerra",
            descripcion: "Regreso de Voldemort",
            img: "assets/harrypotter.jpg"
        },
        {
            titulo: "Orden del Fénix",
            año: 2007,
            tipo: "pelicula",
            personaje: "Harry",
            epoca: "guerra",
            descripcion: "Resistencia contra el Ministerio",
            img: "assets/harrypotter.jpg"
        },
        {
            titulo: "Misterio del Príncipe",
            año: 2009,
            tipo: "pelicula",
            personaje: "Harry",
            epoca: "guerra",
            descripcion: "Secretos de Voldemort",
            img: "assets/harrypotter.jpg"
        },
        {
            titulo: "Reliquias de la Muerte Parte 1",
            año: 2010,
            tipo: "pelicula",
            personaje: "Harry",
            epoca: "guerra",
            descripcion: "Huida y búsqueda de horrocruxes",
            img: "assets/harrypotter.jpg"
        },
        {
            titulo: "Reliquias de la Muerte Parte 2",
            año: 2011,
            tipo: "pelicula",
            personaje: "Harry",
            epoca: "guerra",
            descripcion: "Batalla final",
            img: "assets/harrypotter.jpg"
        },

        // 🟣 LEGADO
        {
            titulo: "El legado maldito",
            año: 2016,
            tipo: "libro",
            personaje: "Harry",
            epoca: "legado",
            descripcion: "Historia tras la saga original",
            img: "assets/harrypotter.jpg"
        },

        { titulo: "Piedra Filosofal (Libro)", año: 1997, tipo: "libro", personaje: "Harry", epoca: "hogwarts", descripcion: "Inicio original de la saga", img: "assets/harrypotter.jpg" },
        { titulo: "Cámara Secreta (Libro)", año: 1998, tipo: "libro", personaje: "Harry", epoca: "hogwarts", descripcion: "Segundo libro", img: "assets/harrypotter.jpg" },
        { titulo: "Prisionero de Azkaban (Libro)", año: 1999, tipo: "libro", personaje: "Harry", epoca: "hogwarts", img: "assets/harrypotter.jpg" },
        { titulo: "Cáliz de Fuego (Libro)", año: 2000, tipo: "libro", personaje: "Harry", epoca: "guerra", img: "assets/harrypotter.jpg" },
        { titulo: "Orden del Fénix (Libro)", año: 2003, tipo: "libro", personaje: "Harry", epoca: "guerra", img: "assets/harrypotter.jpg" },
        { titulo: "Misterio del Príncipe (Libro)", año: 2005, tipo: "libro", personaje: "Harry", epoca: "guerra", img: "assets/harrypotter.jpg" },
        { titulo: "Reliquias de la Muerte (Libro)", año: 2007, tipo: "libro", personaje: "Harry", epoca: "guerra", img: "assets/harrypotter.jpg" }
          
    ],

    personajes: [

        { nombre: "Harry Potter", actor: "Daniel Radcliffe", img: "assets/harrypotter.jpg" },
        { nombre: "Hermione Granger", actor: "Emma Watson", img: "assets/harrypotter.jpg" },
        { nombre: "Ron Weasley", actor: "Rupert Grint", img: "assets/harrypotter.jpg" },

        { nombre: "Albus Dumbledore", actor: "Michael Gambon", img: "assets/harrypotter.jpg" },
        { nombre: "Severus Snape", actor: "Alan Rickman", img: "assets/harrypotter.jpg" },

        { nombre: "Lord Voldemort", actor: "Ralph Fiennes", img: "assets/harrypotter.jpg" },
        { nombre: "Draco Malfoy", actor: "Tom Felton", img: "assets/harrypotter.jpg" },

        { nombre: "Sirius Black", actor: "Gary Oldman", img: "assets/harrypotter.jpg" },
        { nombre: "Hagrid", actor: "Robbie Coltrane", img: "assets/harrypotter.jpg" },

        { nombre: "Newt Scamander", actor: "Eddie Redmayne", img: "assets/harrypotter.jpg" }  ]
},

    // ========================
    // ⚡ POKÉMON
    // ========================

    pokemon: {
    nombre: "Pokémon",
    descripcion: "Atrápalos todos a través de generaciones",
    hero: "assets/pokemon.jpg",

    contenido: [

        // 🔴 GEN 1 - KANTO
        {
            titulo: "Pokémon Rojo/Azul",
            año: 1996,
            tipo: "juego",
            personaje: "Red",
            epoca: "kanto",
            descripcion: "Inicio de la saga Pokémon",
            img: "assets/pokemon.jpg"
        },
        {
            titulo: "Pokémon Amarillo",
            año: 1998,
            tipo: "juego",
            personaje: "Ash",
            epoca: "kanto",
            descripcion: "Versión basada en el anime",
            img: "assets/pokemon.jpg"
        },

        // 🟡 GEN 2 - JOHTO
        {
            titulo: "Pokémon Oro/Plata",
            año: 1999,
            tipo: "juego",
            personaje: "Gold",
            epoca: "johto",
            descripcion: "Nuevos Pokémon y ciclo día/noche",
            img: "assets/pokemon.jpg"
        },

        // 🟢 GEN 3 - HOENN
        {
            titulo: "Pokémon Rubí/Zafiro",
            año: 2002,
            tipo: "juego",
            personaje: "Brendan",
            epoca: "hoenn",
            descripcion: "Introducción de habilidades",
            img: "assets/pokemon.jpg"
        },

        // 🔵 GEN 4 - SINNOH
        {
            titulo: "Pokémon Diamante/Perla",
            año: 2006,
            tipo: "juego",
            personaje: "Lucas",
            epoca: "sinnoh",
            descripcion: "Mitología Pokémon",
            img: "assets/pokemon.jpg"
        },

        // 🟣 GEN 5 - UNOVA
        {
            titulo: "Pokémon Negro/Blanco",
            año: 2010,
            tipo: "juego",
            personaje: "Hilbert",
            epoca: "unova",
            descripcion: "Historia más profunda",
            img: "assets/pokemon.jpg"
        },

        // 🟠 GEN 6 - KALOS
        {
            titulo: "Pokémon X/Y",
            año: 2013,
            tipo: "juego",
            personaje: "Calem",
            epoca: "kalos",
            descripcion: "Gráficos en 3D y megaevolución",
            img: "assets/pokemon.jpg"
        },

        // ⚫ GEN 7 - ALOLA
        {
            titulo: "Pokémon Sol/Luna",
            año: 2016,
            tipo: "juego",
            personaje: "Elio",
            epoca: "alola",
            descripcion: "Sistema de islas",
            img: "assets/pokemon.jpg"
        },

        // 🔶 GEN 8 - GALAR
        {
            titulo: "Pokémon Espada/Escudo",
            año: 2019,
            tipo: "juego",
            personaje: "Victor",
            epoca: "galar",
            descripcion: "Dinamax",
            img: "assets/pokemon.jpg"
        },

        // 🟪 GEN 9 - PALDEA
        {
            titulo: "Pokémon Escarlata/Violeta",
            año: 2022,
            tipo: "juego",
            personaje: "Entrenador",
            epoca: "paldea",
            descripcion: "Mundo abierto",
            img: "assets/pokemon.jpg"
        },

        // 🎬 ANIME
        {
            titulo: "Serie Pokémon",
            año: 1997,
            tipo: "serie",
            personaje: "Ash",
            epoca: "anime",
            descripcion: "Viaje de Ash Ketchum",
            img: "assets/pokemon.jpg"
        },

        { titulo: "Pokémon Adventures", año: 1997, tipo: "libro", personaje: "Red", epoca: "kanto", descripcion: "Manga oficial", img: "assets/pokemon.jpg" },
        { titulo: "Pokémon Manga Gold & Silver", año: 1999, tipo: "libro", personaje: "Gold", epoca: "johto", img: "assets/pokemon.jpg" },
        { titulo: "Pokémon Journeys Manga", año: 2020, tipo: "libro", personaje: "Ash", epoca: "anime", img: "assets/pokemon.jpg" }
            ],

    personajes: [

        { nombre: "Ash Ketchum", actor: "Rica Matsumoto", img: "assets/pokemon.jpg" },
        { nombre: "Pikachu", actor: "Ikue Ōtani", img: "assets/pokemon.jpg" },
        { nombre: "Misty", actor: "Mayumi Iizuka", img: "assets/pokemon.jpg" },
        { nombre: "Brock", actor: "Yuji Ueda", img: "assets/pokemon.jpg" },

        { nombre: "Red", actor: "—", img: "assets/pokemon.jpg" },
        { nombre: "Blue", actor: "—", img: "assets/pokemon.jpg" },

        { nombre: "Cynthia", actor: "—", img: "assets/pokemon.jpg" },
        { nombre: "Leon", actor: "—", img: "assets/pokemon.jpg" },

        { nombre: "Mewtwo", actor: "—", img: "assets/pokemon.jpg" },
        { nombre: "Charizard", actor: "—", img: "assets/pokemon.jpg" }
    ]
}};

document.addEventListener("DOMContentLoaded", function () {

    // ========================
    // NAVEGACIÓN
    // ========================

    window.openUniverse = function (name) {
        localStorage.setItem("universo", name);
        window.location.href = "universo.html";
    }

    window.openFicha = function (name) {
    localStorage.setItem("ficha", name);
    window.open("ficha.html", "_blank"); // 🔥 nueva pestaña
}

    // ========================
    // CARGAR UNIVERSO
    // ========================

    const universoID = localStorage.getItem("universo");

    if (universoID && DATA[universoID]) {

        const u = DATA[universoID];

        const titulo = document.getElementById("titulo-universo");
        const desc = document.getElementById("descripcion-universo");
        const hero = document.getElementById("hero-img").src = `assets/universos/${universoID}.jpg`;

        if (titulo) titulo.innerText = u.nombre;
        if (desc) desc.innerText = u.descripcion;
        if (hero) hero.src = u.hero;

        renderTimeline(u.contenido);
        renderPorTipo(u.contenido);
        renderPersonajes(u.personajes);
        initFiltros(u.contenido);
        renderRecomendaciones(u.contenido);
    }

    // ========================
    // RENDER POR TIPO
    // ========================

    function renderPorTipo(lista) {

    if (!lista) return;

    const map = {
        pelicula: "peliculas",
        serie: "series",
        juego: "juegos",
        libro: "libros"
    };

    // limpiar contenedores
    Object.values(map).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = "";
    });

    lista.forEach(item => {

        const id = map[item.tipo];
        const cont = document.getElementById(id);

        if (!cont) return;

        const card = document.createElement("div");
        card.className = "content-card";

        card.innerHTML = `
            <img src="${item.img}">
            <div class="content-info">
                <h4>${item.titulo}</h4>
                <p>${item.año || ""}</p>
            </div>
        `;

        card.onclick = () => openFicha(item.titulo);

        cont.appendChild(card);
    });
}

    // ========================
    // TIMELINE
    // ========================

function renderTimeline(lista) {

    const cont = document.getElementById("timeline-container");
    if (!cont) return;

    cont.innerHTML = "";

    lista.forEach((item, index) => {

        const el = document.createElement("div");
        el.className = `timeline-item ${item.epoca}`;
        el.style.animationDelay = `${index * 0.1}s`;

        el.innerHTML = `
            <div class="timeline-year">${item.año}</div>

            <div class="timeline-dot"></div>

            <div class="timeline-label">
                <strong>${item.titulo}</strong>
                <span>${item.año}</span>
            </div>

            <div class="timeline-card" onclick="openFicha('${item.titulo}')">
                <img src="${item.img}">
                
                <div class="card-info">
                    <h4>${item.titulo}</h4>
                    <p>${item.tipo} · ${item.personaje}</p>
                    <span>${item.descripcion}</span>
                </div>
            </div>
        `;

        cont.appendChild(el);
    });
}
    // ========================
    // PERSONAJES
    // ========================

    function renderPersonajes(lista) {

    const cont = document.getElementById("personajes");
    if (!cont) return;

    cont.innerHTML = "";

    lista.forEach(p => {

        cont.innerHTML += `
        <div class="character">

            <img src="${p.img}">

            <div class="character-info">
                <h4>${p.nombre}</h4>
                <p>${p.actor || ""}</p>
            </div>

        </div>`;
    });
}

    // ========================
    // FILTROS
    // ========================

    function initFiltros(lista) {

        const fP = document.getElementById("filtro-personaje");
        const fE = document.getElementById("filtro-epoca");

        if (!fP || !fE) return;

        const personajes = [...new Set(lista.map(i => i.personaje))];
        const epocas = [...new Set(lista.map(i => i.epoca))];

        personajes.forEach(p => fP.innerHTML += `<option value="${p}">${p}</option>`);
        epocas.forEach(e => fE.innerHTML += `<option value="${e}">${e}</option>`);

        fP.onchange = aplicarFiltros;
        fE.onchange = aplicarFiltros;
    }

    function aplicarFiltros() {

    const p = document.getElementById("filtro-personaje").value;
    const e = document.getElementById("filtro-epoca").value;

    const u = DATA[localStorage.getItem("universo")];

    const filtrado = u.contenido.filter(i =>
        (p === "all" || i.personaje === p) &&
        (e === "all" || i.epoca === e)
    );

    // Animación fade-out
    const cont = document.getElementById("timeline-container");
    cont.style.opacity = 0;

    setTimeout(() => {
        renderTimeline(filtrado);
        cont.style.opacity = 1;
    }, 200);
}

    // ========================
    // FOLLOW
    // ========================

    window.toggleFollow = function () {

        let follows = JSON.parse(localStorage.getItem("follows") || "[]");
        const u = localStorage.getItem("universo");

        if (follows.includes(u)) {
            follows = follows.filter(x => x !== u);
            alert("Dejado de seguir");
        } else {
            follows.push(u);
            alert("Siguiendo ⭐");
        }

        localStorage.setItem("follows", JSON.stringify(follows));
    }

    // ========================
    // RECOMENDACIONES
    // ========================

    function renderRecomendaciones(lista) {

        const cont = document.getElementById("recommendations");
        if (!cont) return;

        cont.innerHTML = "";

        const random = [...lista].sort(() => 0.5 - Math.random()).slice(0, 3);

        random.forEach(i => {
            cont.innerHTML += `
            <div class="card">
                <img src="${i.img}">
            </div>`;
        });
    }

const searchInput = document.querySelector(".search input");
const resultsBox = document.getElementById("search-results");

if (searchInput && resultsBox) {

    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        resultsBox.innerHTML = "";

        if (query.length === 0) return;

        for (let key in universos) {
            if (universos[key].nombre.toLowerCase().includes(query)) {

                const div = document.createElement("div");
                div.classList.add("result-item");
                div.textContent = universos[key].nombre;

                div.onclick = () => openUniverse(key);

                resultsBox.appendChild(div);
            }
        }
    });

}

    // ========================
    // CANVAS ESPACIAL
    // ========================

    const canvas = document.getElementById("space-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    let mouseX = 0;

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
    });

    class Star {
        constructor() { this.reset(); }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 1.5;
            this.speed = Math.random() * 0.3 + 0.05;
            this.depth = Math.random() * 2;
        }

        update() {
            this.y += this.speed;

            if (this.y > canvas.height) {
                this.reset();
                this.y = 0;
            }

            this.x += (mouseX - canvas.width / 2) * 0.00002 * this.depth;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();
        }
    }

    for (let i = 0; i < 300; i++) stars.push(new Star());

    function animate() {
        ctx.fillStyle = "rgba(0, 0, 20, 0.8)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(s => {
            s.update();
            s.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

});