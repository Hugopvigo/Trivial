const QUESTIONS = [
  {
    q: "¿Cuál es la capital de Australia?",
    a: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país se encuentra el monte Kilimanjaro?",
    a: ["Kenia", "Tanzania", "Etiopía", "Sudáfrica"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es el río más largo de Europa?",
    a: ["Danubio", "Volga", "Rin", "Tajo"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué océano baña la costa este de África?",
    a: ["Atlántico", "Pacífico", "Índico", "Ártico"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es la ciudad más poblada de Sudamérica?",
    a: ["Buenos Aires", "Bogotá", "São Paulo", "Lima"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país se encuentra la ciudad de Kioto?",
    a: ["Corea del Sur", "China", "Japón", "Tailandia"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es el país más grande del mundo por superficie?",
    a: ["China", "Estados Unidos", "Canadá", "Rusia"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿Qué cordillera separa Europa de Asia?",
    a: ["Alpes", "Andes", "Urales", "Himalaya"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Nueva Zelanda?",
    a: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país se encuentra Machu Picchu?",
    a: ["Bolivia", "Perú", "Ecuador", "Colombia"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es el desierto más grande de África?",
    a: ["Kalahari", "Sahara", "Namib", "Danakil"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es el lago más grande de África?",
    a: ["Tanganica", "Victoria", "Malawi", "Turkana"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué continente está Bangladesh?",
    a: ["África", "Oceanía", "Asia", "América"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Canadá?",
    a: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿Qué estrecho separa África de Europa?",
    a: ["Bósforo", "Hormuz", "Gibraltar", "Mallaca"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es el país más pequeño del mundo?",
    a: ["Mónaco", "San Marino", "Ciudad del Vaticano", "Liechtenstein"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país se encuentra el Taj Mahal?",
    a: ["Pakistán", "India", "Nepal", "Bangladés"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Argentina?",
    a: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué isla es la más grande del Mediterráneo?",
    a: ["Cerdeña", "Creta", "Chipre", "Sicilia"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿En qué año llegó Colón a América?",
    a: ["1490", "1492", "1498", "1500"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Quién pintó la Mona Lisa?",
    a: ["Miguel Ángel", "Rafael", "Leonardo da Vinci", "Botticelli"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿En qué año cayó el Muro de Berlín?",
    a: ["1987", "1989", "1991", "1993"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Qué imperio construyó las pirámides de Giza?",
    a: ["Romano", "Persa", "Egipcio", "Griego"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Quién fue el primer ser humano en pisar la Luna?",
    a: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué año comenzó la Segunda Guerra Mundial?",
    a: ["1935", "1937", "1939", "1941"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Qué civilización inventó la escritura cuneiforme?",
    a: ["Egipcia", "China", "Sumeria", "Fenicia"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Quién escribió Don Quijote de la Mancha?",
    a: ["Lope de Vega", "Cervantes", "Calderón", "Quevedo"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué país se originó la Revolución Francesa?",
    a: ["Inglaterra", "España", "Francia", "Alemania"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Qué país fue el primero en otorgar sufragio femenino?",
    a: ["Francia", "Estados Unidos", "Nueva Zelanda", "Reino Unido"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿En qué año se firmó la independencia de Estados Unidos?",
    a: ["1774", "1776", "1783", "1789"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Qué emperador romano legalizó el cristianismo?",
    a: ["Nerón", "Julio César", "Constantino", "Augusto"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Cuánto duró la Guerra de los Cien Años?",
    a: ["100 años", "116 años", "80 años", "50 años"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Qué cultura precolombina construyó Machu Picchu?",
    a: ["Azteca", "Maya", "Inca", "Olmeca"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿En qué año se hundió el Titanic?",
    a: ["1910", "1912", "1914", "1916"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Quién fue el primer presidente de España en la democracia?",
    a: ["Adolfo Suárez", "Felipe González", "Juan Carlos I", "Manuel Azaña"],
    c: 0, cat: "Historia"
  },
  {
    q: "¿Qué imperio construyó la Gran Muralla China?",
    a: ["Imperio Mongol", "Imperio Chino", "Imperio Japonés", "Imperio Manchú"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué año se descubrió la penicilina?",
    a: ["1908", "1918", "1928", "1938"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Qué país ganó la Copa del Mundo de fútbol de 2010?",
    a: ["Países Bajos", "Brasil", "España", "Alemania"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Quién fue Cleopatra?",
    a: ["Una diosa griega", "Una faraona egipcia", "Una emperatriz romana", "Una reina persa"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Cuál es el elemento químico más abundante en el universo?",
    a: ["Oxígeno", "Carbono", "Hidrógeno", "Helio"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuántos huesos tiene el cuerpo humano adulto?",
    a: ["186", "206", "226", "256"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Cuál es la velocidad de la luz en kilómetros por segundo?",
    a: ["150.000", "300.000", "450.000", "600.000"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Qué planeta del sistema solar es conocido como el planeta rojo?",
    a: ["Júpiter", "Saturno", "Marte", "Venus"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuál es la fórmula química del agua?",
    a: ["HO₂", "H₂O", "H₂O₂", "OH"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Qué científica descubrió la radioactividad junto a su marido?",
    a: ["Rosalind Franklin", "Marie Curie", "Ada Lovelace", "Jane Goodall"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Cuál es el órgano más grande del cuerpo humano?",
    a: ["Hígado", "Cerebro", "Piel", "Intestino"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué gas es el más abundante en la atmósfera terrestre?",
    a: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Argón"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuántos planetas tiene el sistema solar?",
    a: ["7", "8", "9", "10"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Qué tipo de animal es una ballena?",
    a: ["Pez", "Mamífero", "Reptil", "Anfibio"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Cuál es la unidad de medida de la intensidad eléctrica?",
    a: ["Voltio", "Vatio", "Amperio", "Ohmio"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué planeta tiene los anillos más espectaculares?",
    a: ["Júpiter", "Saturno", "Urano", "Neptuno"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Cuántos cromosomas tiene una célula humana normal?",
    a: ["23", "44", "46", "48"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué científico formuló la teoría de la relatividad?",
    a: ["Newton", "Hawking", "Einstein", "Bohr"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuál es el metal más ligero?",
    a: ["Aluminio", "Litio", "Magnesio", "Titanio"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Qué vitamina se produce al exponerse al sol?",
    a: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina E"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuál es la temperatura del cuerpo humano en grados centígrados?",
    a: ["35,5", "36,6", "37,5", "38,0"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Qué parte de la célula contiene el ADN?",
    a: ["Mitocondria", "Ribosoma", "Núcleo", "Membrana"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué fuerza mantiene los planetas en órbita?",
    a: ["Magnética", "Nuclear", "Gravitatoria", "Eléctrica"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuántos dientes tiene un adulto humano normal?",
    a: ["28", "30", "32", "34"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cada cuántos años se celebran los Juegos Olímpicos de verano?",
    a: ["2 años", "3 años", "4 años", "5 años"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores tiene un equipo de fútbol en el campo?",
    a: ["9", "10", "11", "12"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿En qué deporte se usa un bumerán?",
    a: ["Cricket", "Golf", "Bádminton", "Ninguno de estos"],
    c: 3, cat: "Deportes"
  },
  {
    q: "¿Quién tiene más Balones de Oro en la historia?",
    a: ["Cristiano Ronaldo", "Lionel Messi", "Pelé", "Diego Maradona"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿En qué país se inventó el baloncesto?",
    a: ["Inglaterra", "Estados Unidos", "Canadá", "Francia"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Cuánto mide una portería de fútbol?",
    a: ["6 x 2 metros", "7 x 2,5 metros", "8 x 2,5 metros", "7 x 3 metros"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Qué deporte se practica en Wimbledon?",
    a: ["Golf", "Cricket", "Tenis", "Remo"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Cuántos sets hay que ganar para ganar un partido de tenis masculino en Grand Slam?",
    a: ["2", "3", "4", "5"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿En qué país se celebró el Mundial de fútbol de 2022?",
    a: ["Rusia", "Brasil", "Qatar", "Japón"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Quién ganó el Tour de Francia 2023?",
    a: ["Tadej Pogačar", "Jonas Vingegaard", "Primož Roglič", "Egan Bernal"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores forman un equipo de baloncesto en pista?",
    a: ["4", "5", "6", "7"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Qué deporte practica Rafael Nadal?",
    a: ["Golf", "Tenis", "Pádel", "Natación"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Cuánto dura un partido de rugby estándar?",
    a: ["60 minutos", "70 minutos", "80 minutos", "90 minutos"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿En qué país se originó el yoga?",
    a: ["China", "Japón", "India", "Tailandia"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Cuántos anillos tiene el símbolo olímpico?",
    a: ["4", "5", "6", "7"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Qué deporte se juega en el Madison Square Garden de Nueva York?",
    a: ["Béisbol", "Boxeo", "Hockey", "Todos los anteriores"],
    c: 3, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores hay en un equipo de voleibol en pista?",
    a: ["5", "6", "7", "8"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Quién es el máximo goleador de la historia de la selección española?",
    a: ["Raúl", "David Villa", "Fernando Torres", "Luis Enrique"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿En qué país se celebró el primer Mundial de fútbol?",
    a: ["Italia", "Brasil", "Uruguay", "Francia"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores componen un equipo de ajedrez?",
    a: ["1", "2", "3", "4"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Quién escribió Cien años de soledad?",
    a: ["Pablo Neruda", "Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿En qué museo se encuentra la Mona Lisa?",
    a: ["British Museum", "Museo del Prado", "Museo del Louvre", "Galería Uffizi"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién compuso La Novena Sinfonía?",
    a: ["Mozart", "Bach", "Beethoven", "Vivaldi"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué escritor español ganó el Nobel de Literatura en 1989?",
    a: ["Camilo José Cela", "García Márquez", "Vargas Llosa", "Cortázar"],
    c: 0, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién pintó La noche estrellada?",
    a: ["Claude Monet", "Pablo Picasso", "Van Gogh", "Salvador Dalí"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué instrumento tocaba Freddie Mercury?",
    a: ["Guitarra", "Batería", "Piano y voz", "Saxofón"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿En qué país nació el escritor Franz Kafka?",
    a: ["Alemania", "Austria", "Chequia", "Hungría"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién compuso Las Cuatro Estaciones?",
    a: ["Mozart", "Bach", "Vivaldi", "Handel"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué artista español pintó Guernica?",
    a: ["Salvador Dalí", "Joan Miró", "Pablo Picasso", "Antoni Tàpies"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién escribre Harry Potter?",
    a: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Ursula K. Le Guin"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿En qué museo está expuesta La Persistencia de la Memoria de Dalí?",
    a: ["MOMA", "Reina Sofía", "Metropolitan", "Tate Modern"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué banda británica cantó Bohemian Rhapsody?",
    a: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién esculpió el David de Florencia?",
    a: ["Donatello", "Miguel Ángel", "Bernini", "Rodin"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué autor escribió 1984?",
    a: ["Ray Bradbury", "George Orwell", "H.G. Wells", "Isaac Asimov"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿En qué país nació Wolfgang Amadeus Mozart?",
    a: ["Alemania", "Austria", "Suiza", "Italia"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué movimiento artístico lideró Salvador Dalí?",
    a: ["Impresionismo", "Cubismo", "Surrealismo", "Expresionismo"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién escribre El Principito?",
    a: ["Jules Verne", "Antoine de Saint-Exupéry", "Albert Camus", "Victor Hugo"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué instrumento es el principal en una orquesta sinfónica?",
    a: ["Guitarra", "Piano", "Violín", "Flauta"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién pintó Las Meninas?",
    a: ["Goya", "Velázquez", "El Greco", "Zurbarán"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué película ganó el primer Oscar a Mejor Película Animada?",
    a: ["Shrek", "Finding Nemo", "Toy Story", "Frozen"],
    c: 0, cat: "Arte y Literatura"
  },
  {
    q: "¿Cuál es el animal terrestre más rápido del mundo?",
    a: ["León", "Guepardo", "Gacela", "Caballo"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuántos corazones tiene un pulpo?",
    a: ["1", "2", "3", "4"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal puede regenerar sus extremidades?",
    a: ["Lagartija", "Estrella de mar", "Salamandra", "Todos los anteriores"],
    c: 3, cat: "Naturaleza"
  },
  {
    q: "¿Cuál es el mamífero más grande que ha existido?",
    a: ["Elefante africano", "Ballena azul", "Diplodoco", "Megalodón"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal duerme de pie?",
    a: ["Vaca", "Caballo", "Jirafa", "Todos los anteriores"],
    c: 3, cat: "Naturaleza"
  },
  {
    q: "¿Cuántos años puede vivir una tortuga gigante?",
    a: ["50 años", "100 años", "Más de 150 años", "30 años"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal es el más inteligente del reino marino?",
    a: ["Tiburón", "Pulpo", "Delfín", "Ballena"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuántos sentidos tiene el ser humano de forma estándar?",
    a: ["3", "4", "5", "6"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué flor es la más vendida del mundo?",
    a: ["Tulipán", "Rosa", "Girasol", "Lirio"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuántos años tarda un bambú en crecer completamente?",
    a: ["1-2 años", "5-10 años", "30-50 años", "No crece"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué porcentaje de la Tierra está cubierto por agua?",
    a: ["50%", "60%", "71%", "85%"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Cuál es el árbol más alto del mundo?",
    a: ["Secuoya", "Eucalipto", "Pino", "Roble"],
    c: 0, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal no puede saltar?",
    a: ["Rana", "Elefante", "Canguro", "Pulga"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuántos dientes tiene un tiburón en total aproximadamente?",
    a: ["100", "300", "1.000", "3.000"],
    c: 3, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal es símbolo de la paz?",
    a: ["Paloma", "Cordero", "Mariposa", "Golondrina"],
    c: 0, cat: "Naturaleza"
  },
  {
    q: "¿Cuántas patas tiene una araña?",
    a: ["6", "8", "10", "12"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal tiene el cuello más largo del mundo?",
    a: ["Avestruz", "Jirafa", "Camello", "Flamenco"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuál es el océano más grande del mundo?",
    a: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué insecto puede vivir sin cabeza durante días?",
    a: ["Cucaracha", "Hormiga", "Grillo", "Escarabajo"],
    c: 0, cat: "Naturaleza"
  },
  {
    q: "¿Cuántos años puede vivir una mariposa monarca?",
    a: ["1 semana", "1 mes", "6 meses", "5 años"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué banda española cantó \"La flaca\"?",
    a: ["Héroes del Silencio", "Mecano", "Jarabe de Palo", "El Canto del Loco"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿Quién dirigió La Lista de Schindler?",
    a: ["Martin Scorsese", "Steven Spielberg", "Francis Ford Coppola", "Alfred Hitchcock"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué canción de Luis Fonsi tiene más vistas en YouTube?",
    a: ["Despacito", "Échame la Culpa", "Calma", "No me dudes el amor"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿En qué año se estrenó la primera película de Star Wars?",
    a: ["1975", "1977", "1979", "1980"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué cantante es conocida como la Reina del Pop?",
    a: ["Beyoncé", "Madonna", "Rihanna", "Lady Gaga"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué película de Disney tiene el personaje Simba?",
    a: ["Frozen", "El Rey León", "Moana", "Encanto"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta \"Shape of You\"?",
    a: ["Justin Bieber", "Ed Sheeran", "Bruno Mars", "The Weeknd"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué director español hizo Pan's Labyrinth?",
    a: ["Pedro Almodóvar", "Alejandro Amenábar", "Guillermo del Toro", "Carlos Saura"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿Qué película ganó el Oscar a Mejor Película en 2020?",
    a: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿Qué grupo musical cantó \"Bohemian Rhapsody\"?",
    a: ["The Beatles", "Led Zeppelin", "Queen", "The Rolling Stones"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿En qué saga cinematográfica aparece el personaje Darth Vader?",
    a: ["El Señor de los Anillos", "Star Wars", "Star Trek", "Matrix"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué cantante española ganó Eurovisión 1968?",
    a: ["Rocío Dúrcal", "Julio Iglesias", "Salomé", "Massiel"],
    c: 3, cat: "Cine y Música"
  },
  {
    q: "¿Qué director hizo Titanic y Avatar?",
    a: ["George Lucas", "James Cameron", "Ridley Scott", "Christopher Nolan"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué película de Pixar trata de emotions internas?",
    a: ["Coco", "Inside Out", "Up", "Ratatouille"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta \"Waka Waka\" del Mundial 2010?",
    a: ["Rihanna", "Shakira", "Beyoncé", "Jennifer Lopez"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿De qué país es originario el sushi?",
    a: ["Corea", "Japón", "China", "Tailandia"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué ingrediente principal tiene la guacamole?",
    a: ["Tomate", "Aguacate", "Cebolla", "Chile"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿En qué país se originó la pizza?",
    a: ["Grecia", "Italia", "Francia", "España"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué bebida fermentada se obtiene de la uva?",
    a: ["Cerveza", "Sidra", "Vino", "Sake"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué fruta es la más consumida del mundo?",
    a: ["Manzana", "Plátano", "Naranja", "Sandía"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿De qué país es originaria la paella?",
    a: ["Andalucía", "Cataluña", "Valencia", "Murcia"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué cereal se usa para hacer la cerveza?",
    a: ["Arroz", "Trigo", "Cebada", "Maíz"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué país produce más café del mundo?",
    a: ["Colombia", "Vietnam", "Brasil", "Etiopía"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué queso italiano se usa en la pizza margarita?",
    a: ["Parmesano", "Mozzarella", "Ricotta", "Gorgonzola"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué postre español se hace con yemas de huevo y azúcar?",
    a: ["Flan", "Tocino de cielo", "Crema catalana", "Arroz con leche"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿En qué país se inventó el chocolate caliente?",
    a: ["Suiza", "Bélgica", "México", "Francia"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué hortaliza es el ingrediente principal del gazpacho?",
    a: ["Pimiento", "Pepino", "Tomate", "Lechuga"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué especia le da el color amarillo a la paella?",
    a: ["Curcuma", "Azafrán", "Pimentón", "Orégano"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué fruto seco es el más producido en España?",
    a: ["Nueces", "Almendras", "Avellanas", "Pistachos"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué bebida típica de Grecia se prepara con anís?",
    a: ["Sambuca", "Ouzo", "Grappa", "Pastis"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿En qué año se fundó Google?",
    a: ["1996", "1998", "2000", "2002"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa creó el iPhone?",
    a: ["Samsung", "Google", "Apple", "Microsoft"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Qué significa 'URL'?",
    a: ["Universal Reference Locator", "Uniform Resource Locator", "Unified Resource Link", "Universal Resource Locator"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿En qué año se lanzó Facebook?",
    a: ["2002", "2004", "2006", "2008"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué lenguaje de programación se usa para crear páginas web?",
    a: ["Python", "Java", "JavaScript", "C++"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Qué es un 'hashtag'?",
    a: ["Un tipo de archivo", "Una etiqueta de contenido", "Un programa", "Un virus"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa creó Windows?",
    a: ["Apple", "Google", "IBM", "Microsoft"],
    c: 3, cat: "Tecnología"
  },
  {
    q: "¿Qué significa 'AI' en tecnología?",
    a: ["Advanced Internet", "Artificial Intelligence", "Automated Input", "Applied Integration"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿En qué año se lanzó Instagram?",
    a: ["2008", "2010", "2012", "2014"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué es el 'cloud computing'?",
    a: ["Computación en la nube", "Computación cuántica", "Computación portátil", "Computación antigua"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa desarrolló ChatGPT?",
    a: ["Google", "Meta", "OpenAI", "Microsoft"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Qué es un 'browser'?",
    a: ["Un tipo de virus", "Un navegador web", "Un procesador", "Un servidor"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿En qué año se fundó Amazon?",
    a: ["1992", "1994", "1996", "1998"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué significa 'WiFi'?",
    a: ["Wireless Fidelity", "Wide Frequency", "Wireless Finder", "Wired Fiber"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué sistema operativo móvil usa Android?",
    a: ["Google", "Apple", "Samsung", "Microsoft"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa compró WhatsApp?",
    a: ["Google", "Meta", "Apple", "Twitter"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué es un 'podcast'?",
    a: ["Un video en vivo", "Un programa de audio descargable", "Una red social", "Un juego online"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿En qué año se lanzó TikTok?",
    a: ["2016", "2018", "2020", "2022"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué es un 'emoji'?",
    a: ["Un archivo", "Un icono digital de expresión", "Un tipo de código", "Un programa"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa creó el navegador Chrome?",
    a: ["Mozilla", "Apple", "Google", "Opera"],
    c: 2, cat: "Tecnología"
  },
];
