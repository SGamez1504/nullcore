// NULL/CORE — archivo de episodios (lo actualiza Claude después de cada transmisión; el más reciente va PRIMERO)
// estado: "programado" (escaleta lista, aún no sale) · "emitido" (con recap, VOD y lo que sonó)
window.NC_EPISODIOS = [
  {
    id: "2026-10-30",
    num: "001",
    titulo: "Víspera de brujas: GPUs en llamas",
    fecha: "2026-10-30",
    hora: "9:00 p.m. COL",
    estado: "programado",
    resumen: "GTA VI con fecha de predescarga, el cierre de BioWare, GPUs 35% más caras, Hush llega a VALORANT y LOUD bicampeón de Champions.",
    recap: [],                       // párrafos del recap (se llenan después del show)
    momentos: [],                    // [{ t: "0:45:10", texto: "..." }] momentos destacados con marca de tiempo del VOD
    vod: { id: "" },                 // id numérico del VOD de Twitch (twitch.tv/videos/ID)
    playlistDia: {                   // playlist preparada para el episodio
      spotifyId: "",
      tracks: [
        { artista: "VALORANT, Grabbitz, Oli Sykes & Courtney LaPlante", titulo: "If The Sun Burns Out Tonight", bloque: "B-SIDE" },
        { artista: "My Chemical Romance", titulo: "Helena", bloque: "B-SIDE" },
        { artista: "VALORANT & Grabbitz", titulo: "Die For You", bloque: "VALORANT" },
        { artista: "Bring Me The Horizon", titulo: "Kingslayer (feat. BABYMETAL)", bloque: "VALORANT" },
        { artista: "Spiritbox", titulo: "Holy Roller", bloque: "VALORANT" },
        { artista: "Turnstile", titulo: "MYSTERY", bloque: "VALORANT" },
        { artista: "Grabbitz & bbno$", titulo: "Ticking Away", bloque: "VALORANT" },
        { artista: "Knocked Loose", titulo: "Counting Worms", bloque: "VALORANT" },
        { artista: "Architects", titulo: "Animals", bloque: "VALORANT" },
        { artista: "Bad Omens", titulo: "THE DEATH OF PEACE OF MIND", bloque: "VALORANT" },
        { artista: "Linkin Park", titulo: "The Emptiness Machine", bloque: "VALORANT" }
      ]
    },
    sonoEnVivo: { spotifyId: "", tracks: [] },   // lo que realmente sonó esa noche: [{ hora: "21:24", artista, titulo }]
    titulares: [
      { bloque: "CORE DUMP", titular: "gta vi: predescarga el 12 de noviembre", detalle: "Sale el 19 en PS5 y Xbox Series; la edición física trae código.", url: "https://www.digitalcitizen.life/gta-6-preloads-begin-on-november-12-for-digital-and-physical-code-copies/", fuente: "Digital Citizen" },
      { bloque: "CORE DUMP", titular: "phantom blade zero ya salió", detalle: "Lanzamiento el 29 de octubre en PS5 y PC; Game Informer le dio 9.5.", url: "https://gameinformer.com/review/phantom-blade-zero/wuxian-wonder-abounds", fuente: "Game Informer" },
      { bloque: "CORE DUMP", titular: "the duskbloods se retrasa a 2027", detalle: "FromSoftware necesita más tiempo para ajustar reglas y balance.", url: "https://gameinformer.com/2026/10/29/the-duskbloods-delayed-to-2027-so-fromsoftware-can-adjust-game-rules-and-balancing", fuente: "Game Informer" },
      { bloque: "CORE DUMP", titular: "muere sir patrick stewart a los 86", detalle: "Picard, el Profesor X y voz en varios videojuegos.", url: "https://gameinformer.com/obituary/2026/10/29/sir-patrick-stewart-star-trek-x-men-and-myriad-video-games-actor-passes-away", fuente: "Game Informer" },
      { bloque: "DEEP SCAN", titular: "ea habría cerrado bioware", detalle: "Según el reporte, para invertir en Star Wars Battlefront III.", url: "https://gameinformer.com/2026/10/30/ea-reportedly-closed-bioware-to-invest-in-developing-star-wars-battlefront-iii-instead", fuente: "Game Informer" },
      { bloque: "DEEP SCAN", titular: "despidos en sucker punch", detalle: "Se reportan unos 26 puestos tras Ghost of Yōtei.", url: "https://gameinformer.com/2026/10/26/report-ghost-of-yotei-developer-sucker-punch-hit-with-layoffs", fuente: "Game Informer" },
      { bloque: "PATCH NOTES", titular: "valorant 13.09: llega hush", detalle: "Nueva duelista, nerf a Clove y buff a la Warden.", url: "https://playvalorant.com/en-us/news/game-updates/", fuente: "Riot Games" },
      { bloque: "PATCH NOTES", titular: "pokémon unite cierra en marzo", detalle: "El MOBA de Pokémon apaga servidores.", url: "https://gameinformer.com/2026/10/27/free-to-play-moba-pokemon-unite-is-shutting-down-in-march", fuente: "Game Informer" },
      { bloque: "HARDWARE LAB", titular: "gpus: +35% en tres meses", detalle: "Sondeo de Hardware Unboxed en diez países.", url: "https://mixed-news.com/en/gpu-prices-three-months-hardware-unboxed-october-2026/", fuente: "Mixed" },
      { bloque: "HARDWARE LAB", titular: "rtx 5080 ronda los 2.000 dólares", detalle: "Más de lo que costaba una 5090 en su lanzamiento.", url: "https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5080-prices-hit-usd2-000-costing-more-than-the-rtx-5090-did-at-launch-and-with-limited-stock-available-original-usd999-msrp-long-forgotten-with-prices-now-2-3x-higher", fuente: "Tom's Hardware" },
      { bloque: "VALORANT", titular: "loud, bicampeón de champions", detalle: "Le ganó la final de Shanghai a Team Vitality.", url: "https://www.gosugamers.net/valorant/news/79367-loud-defeat-team-vitality-to-win-valorant-champions-2026", fuente: "GosuGamers" }
    ]
  }
];
