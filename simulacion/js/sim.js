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
    hero: "assets/starwars/ep4.jpg",

    contenido: [

        // PRECUELA
        { titulo: "Episodio I", año: 1999, tipo: "pelicula", personaje: "Anakin", epoca: "precuela", descripcion: "Un joven esclavo con un poder extraordinario es descubierto por los Jedi, iniciando el destino de Anakin Skywalker.", img: "assets/starwars/ep1.jpg" },
        { titulo: "Episodio II", año: 2002, tipo: "pelicula", personaje: "Anakin", epoca: "precuela", descripcion: "La galaxia se acerca a la guerra mientras Anakin lucha con sus emociones y su destino.", img: "assets/starwars/ep2.jpg" },
        { titulo: "The Clone Wars", año: 2008, tipo: "serie", personaje: "Anakin", epoca: "precuela", descripcion: "La guerra entre la República y los separatistas se intensifica mientras los Jedi lideran ejércitos clon.", img: "assets/starwars/clonewars.jpg" },
        { titulo: "Episodio III", año: 2005, tipo: "pelicula", personaje: "Anakin", epoca: "precuela", descripcion: "Anakin cae al lado oscuro y nace Darth Vader en el ocaso de la República.", img: "assets/starwars/ep3.jpg" },

        // IMPERIO
        { titulo: "The Bad Batch", año: 2021, tipo: "serie", personaje: "Clones", epoca: "imperio", descripcion: "Un grupo de clones defectuosos busca su lugar en una galaxia dominada por el Imperio.", img: "assets/starwars/badbatch.jpg" },
        { titulo: "Jedi Fallen Order", año: 2019, tipo: "juego", personaje: "Cal", epoca: "imperio", descripcion: "Un joven Jedi superviviente huye del Imperio mientras redescubre la Fuerza.", img: "assets/starwars/fallenorder.jpg" },
        { titulo: "Obi-Wan Kenobi", año: 2022, tipo: "serie", personaje: "Obi-Wan", epoca: "imperio", descripcion: "El maestro Jedi vive oculto mientras vigila a Luke y enfrenta su pasado.", img: "assets/starwars/obiwan.jpg" },
        { titulo: "Andor", año: 2022, tipo: "serie", personaje: "Cassian", epoca: "imperio", descripcion: "La historia del espía rebelde Cassian Andor y el nacimiento de la Rebelión.", img: "assets/starwars/andor.jpg" },
        { titulo: "Rogue One", año: 2016, tipo: "pelicula", personaje: "Jyn", epoca: "imperio", descripcion: "Un grupo de rebeldes se sacrifica para robar los planos de la Estrella de la Muerte.", img: "assets/starwars/rogueone.jpg" },

        // CLÁSICO
        { titulo: "Episodio IV", año: 1977, tipo: "pelicula", personaje: "Luke", epoca: "clasico", descripcion: "Luke Skywalker inicia su viaje para convertirse en Jedi y luchar contra el Imperio.", img: "assets/starwars/ep4.jpg" },
        { titulo: "Episodio V", año: 1980, tipo: "pelicula", personaje: "Luke", epoca: "clasico", descripcion: "El Imperio contraataca y Luke enfrenta una verdad que cambiará su destino.", img: "assets/starwars/ep5.jpg" },
        { titulo: "Episodio VI", año: 1983, tipo: "pelicula", personaje: "Luke", epoca: "clasico", descripcion: "La Rebelión intenta destruir el Imperio mientras Luke busca redimir a su padre.", img: "assets/starwars/ep6.jpg" },

        // REPÚBLICA
        { titulo: "The Mandalorian", año: 2019, tipo: "serie", personaje: "Mando", epoca: "republica", descripcion: "Un cazarrecompensas solitario protege a un misterioso niño sensible a la Fuerza.", img: "assets/starwars/mandalorian.jpg" },
        { titulo: "Ahsoka", año: 2023, tipo: "serie", personaje: "Ahsoka", epoca: "republica", descripcion: "Ahsoka Tano investiga una nueva amenaza que podría cambiar el equilibrio galáctico.", img: "assets/starwars/ahsoka.jpg" },

        // SECUELA
        { titulo: "Episodio VII", año: 2015, tipo: "pelicula", personaje: "Rey", epoca: "secuela", descripcion: "Una nueva generación enfrenta el resurgimiento del lado oscuro.", img: "assets/starwars/ep7.jpg" },
        { titulo: "Episodio VIII", año: 2017, tipo: "pelicula", personaje: "Rey", epoca: "secuela", descripcion: "La Resistencia lucha por sobrevivir mientras Rey busca su lugar en la Fuerza.", img: "assets/starwars/ep8.jpg" },
        { titulo: "Episodio IX", año: 2019, tipo: "pelicula", personaje: "Rey", epoca: "secuela", descripcion: "El conflicto final entre Jedi y Sith decide el destino de la galaxia.", img: "assets/starwars/ep9.jpg" },

        // LIBROS
        { titulo: "Darth Plagueis", año: 2012, tipo: "libro", personaje: "Plagueis", epoca: "precuela", descripcion: "La historia del maestro Sith que dominó los secretos de la vida y la muerte.", img: "assets/starwars/plagueis.jpg" },
        { titulo: "Thrawn", año: 2017, tipo: "libro", personaje: "Thrawn", epoca: "imperio", descripcion: "El ascenso de un estratega brillante dentro del Imperio Galáctico.", img: "assets/starwars/thrawn.jpg" },
        { titulo: "Aftermath", año: 2015, tipo: "libro", personaje: "Rebelión", epoca: "republica", descripcion: "La galaxia intenta reconstruirse tras la caída del Imperio.", img: "assets/starwars/aftermath.jpg" }
    ],

    personajes: [
        { nombre: "Anakin Skywalker", actor: "Hayden Christensen", img: "assets/starwars/anakin.jpg" },
        { nombre: "Darth Vader", actor: "James Earl Jones", img: "assets/starwars/vader.jpg" },
        { nombre: "Luke Skywalker", actor: "Mark Hamill", img: "assets/starwars/luke.jpg" },
        { nombre: "Leia Organa", actor: "Carrie Fisher", img: "assets/starwars/leia.jpg" },
        { nombre: "Han Solo", actor: "Harrison Ford", img: "assets/starwars/han.jpg" },
        { nombre: "Obi-Wan Kenobi", actor: "Ewan McGregor", img: "assets/starwars/obiwan_char.jpg" },
        { nombre: "Rey", actor: "Daisy Ridley", img: "assets/starwars/rey.jpg" }
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

        {
        titulo: "Temporadas 1-3",
        año: 1989,
        tipo: "serie",
        personaje: "Homer",
        epoca: "inicio",
        descripcion: "Los inicios de la familia Simpson mientras Springfield toma forma como icono cultural.",
        img: "assets/simpsons/temp1-3.jpg"
        },
        {
        titulo: "Temporadas 4-9",
        año: 1993,
        tipo: "serie",
        personaje: "Homer",
        epoca: "dorado",
        descripcion: "La edad dorada con los episodios más recordados y el humor más afilado.",
        img: "assets/simpsons/temp4-9.jpg"
        },

    
        {
        titulo: "Temporadas 10-15",
        año: 1999,
        tipo: "serie",
        personaje: "Homer",
        epoca: "expansion",
        descripcion: "La serie evoluciona y se adapta a una audiencia global.",
        img: "assets/simpsons/temp10-15.jpeg"
        },

        {
        titulo: "Temporadas 16-25",
        año: 2005,
        tipo: "serie",
        personaje: "Homer",
        epoca: "moderno",
        descripcion: "Nuevas historias y estilos en una etapa de transición.",
        img: "assets/simpsons/temp-16-25.jpg"
        },

        {
        titulo: "Temporadas 26-Actualidad",
        año: 2014,
        tipo: "serie",
        personaje: "Homer",
        epoca: "actual",
        descripcion: "La serie continúa reinventándose en la era moderna.",
        img: "assets/simpsons/actual.jpeg"
        },

        {
        titulo: "Los Simpson: La Película",
        año: 2007,
        tipo: "pelicula",
        personaje: "Homer",
        epoca: "dorado",
        descripcion: "Homer provoca un desastre que pone en peligro a toda Springfield.",
        img: "assets/simpsons/movie.png"
        },

        { titulo: "Simpsons Comics", año: 1993, tipo: "libro", personaje: "Bart", epoca: "clasico", descripcion: "Historias alternativas y aventuras de los personajes en formato cómic.", img: "assets/simpsons/comic.jpg" },

        { titulo: "Bart Simpson Comics", año: 2000, tipo: "libro", personaje: "Bart", epoca: "clasico", descripcion: "Bart protagoniza travesuras y aventuras en sus propias historias.", img: "assets/simpsons/bart_comic.jpeg" }

        ],

    personajes: [

        { nombre: "Homer Simpson", actor: "Dan Castellaneta", img: "assets/simpsons/homer.jpg" },
        { nombre: "Marge Simpson", actor: "Julie Kavner", img: "assets/simpsons/marge.jpg" },
        { nombre: "Bart Simpson", actor: "Nancy Cartwright", img: "assets/simpsons/bart.jpg" },
        { nombre: "Lisa Simpson", actor: "Yeardley Smith", img: "assets/simpsons/lisa.jpeg" },
        { nombre: "Maggie Simpson", actor: "—", img: "assets/simpsons/maggie.jpg" },

        { nombre: "Mr. Burns", actor: "Harry Shearer", img: "assets/simpsons/burns.jpg" },
        { nombre: "Ned Flanders", actor: "Harry Shearer", img: "assets/simpsons/ned.png" },
        { nombre: "Krusty", actor: "Dan Castellaneta", img: "assets/simpsons/krusti.jpeg" },
        { nombre: "Milhouse", actor: "Pamela Hayden", img: "assets/simpsons/mil.jpg" },
        { nombre: "Apu Nahasapeemapetilon", actor: "Hank Azaria", img: "assets/simpsons/apu.jpeg" },

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
        {
        titulo: "Animales Fantásticos",
        año: 2016,
        tipo: "pelicula",
        personaje: "Newt",
        epoca: "origen",
        descripcion: "Newt Scamander explora criaturas mágicas en una época anterior a Harry Potter.",
        img: "assets/harry/p1.jpg"
        },

        {
        titulo: "Piedra Filosofal",
        año: 2001,
        tipo: "pelicula",
        personaje: "Harry",
        epoca: "hogwarts",
        descripcion: "Harry descubre que es mago y entra en el mundo de Hogwarts.",
        img: "assets/harry/p2.jpg"
        },
        {
        titulo: "Cámara Secreta",
        año: 2002,
        tipo: "pelicula",
        personaje: "Harry",
        epoca: "hogwarts",
        descripcion: "Una amenaza oculta pone en peligro a los estudiantes de Hogwarts.",
        img: "assets/harry/p3.jpg"
        },
        {
        titulo: "Prisionero de Azkaban",
        año: 2004,
        tipo: "pelicula",
        personaje: "Harry",
        epoca: "hogwarts",
        descripcion: "Harry descubre la verdad sobre su pasado y Sirius Black.",
        img: "assets/harry/p4.jpg"
        },

        {
        titulo: "Cáliz de Fuego",
        año: 2005,
        tipo: "pelicula",
        personaje: "Harry",
        epoca: "guerra",
        descripcion: "El Torneo de los Tres Magos marca el regreso de Voldemort.",
        img: "assets/harry/p5.jpg"
        },
        {
        titulo: "Orden del Fénix",
        año: 2007,
        tipo: "pelicula",
        personaje: "Harry",
        epoca: "guerra",
        descripcion: "Harry lidera la resistencia contra el Ministerio y Voldemort.",
        img: "assets/harry/p6.jpg"
        },
        {
        titulo: "Misterio del Príncipe",
        año: 2009,
        tipo: "pelicula",
        personaje: "Harry",
        epoca: "guerra",
        descripcion: "Se revelan secretos clave sobre Voldemort y su pasado.",
        img: "assets/harry/p7.jpg"
        },
        {
        titulo: "Reliquias de la Muerte Parte 1",
        año: 2010,
        tipo: "pelicula",
        personaje: "Harry",
        epoca: "guerra",
        descripcion: "Harry huye mientras busca destruir los horrocruxes.",
        img: "assets/harry/p8.jpg"
        },
        {
        titulo: "Reliquias de la Muerte Parte 2",
        año: 2011,
        tipo: "pelicula",
        personaje: "Harry",
        epoca: "guerra",
        descripcion: "La batalla final decide el destino del mundo mágico.",
        img: "assets/harry/p9.png"
        },

        {
        titulo: "El legado maldito",
        año: 2016,
        tipo: "libro",
        personaje: "Harry",
        epoca: "legado",
        descripcion: "La historia continúa con la nueva generación de magos.",
        img: "assets/harry/l1.jpeg"
        },

        { titulo: "Piedra Filosofal (Libro)", año: 1997, tipo: "libro", personaje: "Harry", epoca: "hogwarts", descripcion: "El inicio literario de la historia original de Harry Potter.", img: "assets/harry/l2.jpeg" },

        { titulo: "Cámara Secreta (Libro)", año: 1998, tipo: "libro", personaje: "Harry", epoca: "hogwarts", descripcion: "Harry regresa a Hogwarts en su segundo año enfrentando nuevos peligros.", img: "assets/harry/l2.jpg" },

        { titulo: "Prisionero de Azkaban (Libro)", año: 1999, tipo: "libro", personaje: "Harry", epoca: "hogwarts", descripcion: "El misterio de Sirius Black cambia la vida de Harry para siempre.", img: "assets/harry/l3.jpeg" },

        { titulo: "Cáliz de Fuego (Libro)", año: 2000, tipo: "libro", personaje: "Harry", epoca: "guerra", descripcion: "El torneo mágico se convierte en una trampa mortal.", img: "assets/harry/l4.jpg" },

        { titulo: "Orden del Fénix (Libro)", año: 2003, tipo: "libro", personaje: "Harry", epoca: "guerra", descripcion: "La resistencia contra Voldemort comienza a tomar forma.", img: "assets/harry/l5.jpg" },

        { titulo: "Misterio del Príncipe (Libro)", año: 2005, tipo: "libro", personaje: "Harry", epoca: "guerra", descripcion: "Se descubren los secretos más oscuros de Voldemort.", img: "assets/harry/l6.jpg" },

        { titulo: "Reliquias de la Muerte (Libro)", año: 2007, tipo: "libro", personaje: "Harry", epoca: "guerra", descripcion: "El enfrentamiento final pone fin a la historia original.", img: "assets/harry/l7.jpg" }

        ],

    personajes: [

        { nombre: "Harry Potter", actor: "Daniel Radcliffe", img: "assets/harry/harry.jpeg" },
        { nombre: "Hermione Granger", actor: "Emma Watson", img: "assets/harry/pe2.jpg" },
        { nombre: "Ron Weasley", actor: "Rupert Grint", img: "assets/harry/pe3.jpg" },

        { nombre: "Albus Dumbledore", actor: "Michael Gambon", img: "assets/harry/pe4.jpeg" },
        { nombre: "Severus Snape", actor: "Alan Rickman", img: "assets/harry/pee.jpeg" },

        { nombre: "Lord Voldemort", actor: "Ralph Fiennes", img: "assets/harry/pe5.jpg" },
        { nombre: "Draco Malfoy", actor: "Tom Felton", img: "assets/harry/draco.jpg" },

        { nombre: "Sirius Black", actor: "Gary Oldman", img: "assets/harry/pe6.jpg" },
        { nombre: "Hagrid", actor: "Robbie Coltrane", img: "assets/harry/hagrid.jpeg" },

        { nombre: "Newt Scamander", actor: "Eddie Redmayne", img: "assets/harry/newt.jpeg" }  ]
},

    // ========================
    // ⚡ POKÉMON
    // ========================

    pokemon: {
        nombre: "Pokémon",
        descripcion: "Atrápalos todos a través de generaciones",
        hero: "assets/pokemon.jpg",

        contenido: [

        {
        titulo: "Pokémon Rojo/Azul",
        año: 1996,
        tipo: "juego",
        personaje: "Red",
        epoca: "kanto",
        descripcion: "El inicio de la aventura Pokémon en la región de Kanto.",
        img: "assets/pokemon.jpg"
        },
        {
        titulo: "Pokémon Amarillo",
        año: 1998,
        tipo: "juego",
        personaje: "Ash",
        epoca: "kanto",
        descripcion: "Una versión inspirada en el anime con Pikachu como compañero.",
        img: "assets/pokemon.jpg"
        },

        {
        titulo: "Pokémon Oro/Plata",
        año: 1999,
        tipo: "juego",
        personaje: "Gold",
        epoca: "johto",
        descripcion: "Nuevos Pokémon y mecánicas en la región de Johto.",
        img: "assets/pokemon.jpg"
        },

        {
        titulo: "Pokémon Rubí/Zafiro",
        año: 2002,
        tipo: "juego",
        personaje: "Brendan",
        epoca: "hoenn",
        descripcion: "Aventuras en Hoenn con nuevas habilidades y estrategias.",
        img: "assets/pokemon.jpg"
        },

        {
        titulo: "Pokémon Diamante/Perla",
        año: 2006,
        tipo: "juego",
        personaje: "Lucas",
        epoca: "sinnoh",
        descripcion: "Exploración de mitos y leyendas en la región de Sinnoh.",
        img: "assets/pokemon.jpg"
        },

        {
        titulo: "Pokémon Negro/Blanco",
        año: 2010,
        tipo: "juego",
        personaje: "Hilbert",
        epoca: "unova",
        descripcion: "Una historia más profunda sobre ideales y verdad.",
        img: "assets/pokemon.jpg"
        },

        {
        titulo: "Pokémon X/Y",
        año: 2013,
        tipo: "juego",
        personaje: "Calem",
        epoca: "kalos",
        descripcion: "La saga da el salto al 3D con nuevas mecánicas y megaevolución.",
        img: "assets/pokemon.jpg"
        },

        {
        titulo: "Pokémon Sol/Luna",
        año: 2016,
        tipo: "juego",
        personaje: "Elio",
        epoca: "alola",
        descripcion: "Una aventura basada en islas con un enfoque diferente.",
        img: "assets/pokemon.jpg"
        },

        {
        titulo: "Pokémon Espada/Escudo",
        año: 2019,
        tipo: "juego",
        personaje: "Victor",
        epoca: "galar",
        descripcion: "Combates gigantes con la mecánica Dynamax.",
        img: "assets/pokemon.jpg"
        },

        {
        titulo: "Pokémon Escarlata/Violeta",
        año: 2022,
        tipo: "juego",
        personaje: "Entrenador",
        epoca: "paldea",
        descripcion: "Un mundo abierto que redefine la saga Pokémon.",
        img: "assets/pokemon.jpg"
        },

        {
        titulo: "Serie Pokémon",
        año: 1997,
        tipo: "serie",
        personaje: "Ash",
        epoca: "anime",
        descripcion: "El viaje de Ash para convertirse en Maestro Pokémon.",
        img: "assets/pokemon.jpg"
        },

        { titulo: "Pokémon Adventures", año: 1997, tipo: "libro", personaje: "Red", epoca: "kanto", descripcion: "Historia más madura del mundo Pokémon en formato manga.", img: "assets/pokemon.jpg" },

        { titulo: "Pokémon Manga Gold & Silver", año: 1999, tipo: "libro", personaje: "Gold", epoca: "johto", descripcion: "Continuación del manga con nuevos protagonistas.", img: "assets/pokemon.jpg" },

        { titulo: "Pokémon Journeys Manga", año: 2020, tipo: "libro", personaje: "Ash", epoca: "anime", descripcion: "Nuevas aventuras inspiradas en el anime moderno.", img: "assets/pokemon.jpg" }

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

    window.openFicha = function (item) {
    localStorage.setItem("ficha", JSON.stringify(item));
    window.open("ficha.html", "_blank");
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

        card.onclick = () => openFicha(item);

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

            <div class="timeline-card" onclick='openFicha(${JSON.stringify(item)})'>
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

// ========================
// CARGAR FICHA PRO
// ========================

const fichaData = localStorage.getItem("ficha");

if (fichaData) {

    const item = JSON.parse(fichaData);

    // 🔥 fondo estilo Netflix
    document.querySelector(".ficha-netflix").style.backgroundImage = `url(${item.img})`;

    document.getElementById("ficha-img").src = item.img;
    document.getElementById("ficha-titulo").innerText = item.titulo;

    document.getElementById("ficha-tipo").innerText = item.tipo.toUpperCase();
    document.getElementById("ficha-año").innerText = item.año || "—";

    document.getElementById("ficha-desc").innerText =
        item.descripcion || "Sin descripción disponible";

    document.getElementById("ficha-prota").innerText =
        item.personaje || "—";
}

function goMultiverse() {
    window.location.href = "multiverso.html"; // 🔥 tu página de simulación
}

function goHome() {
    window.location.href = "../index.html";
}

function login() {
    window.location.href = "index.html";
}