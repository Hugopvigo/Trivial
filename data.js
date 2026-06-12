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
    q: "¿Cuál es la capital de Brasil?",
    a: ["Río de Janeiro", "São Paulo", "Brasilia", "Salvador"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene más habitantes de Europa?",
    a: ["Rusia", "Alemania", "Francia", "Reino Unido"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿En qué país está la Torre Eiffel?",
    a: ["Bélgica", "Francia", "Suiza", "España"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es el río más largo del mundo?",
    a: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Qué país atraviesa el Círculo Polar Ártico?",
    a: ["Suecia", "Noruega", "Finlandia", "Todos los anteriores"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Australia?",
    a: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué cordillera hay en Suiza?",
    a: ["Apeninos", "Alpes", "Pirineos", "Cárpatos"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es el país más grande de África?",
    a: ["Sudáfrica", "Argelia", "Congo", "Egipto"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué mar hay entre España y África?",
    a: ["Mar Negro", "Mar Rojo", "Mediterráneo", "Mar Cantábrico"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país está El Cairo?",
    a: ["Marruecos", "Egipto", "Libia", "Argelia"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Italia?",
    a: ["Milán", "Roma", "Nápoles", "Turín"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué océano está entre Asia y América?",
    a: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué continente está Ecuador?",
    a: ["América del Norte", "América del Sur", "África", "Asia"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Portugal?",
    a: ["Oporto", "Cascais", "Lisboa", "Faro"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué desierto hay en Namibia?",
    a: ["Sahara", "Kalahari", "Namib", "Gobi"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país están los fiordos noruegos?",
    a: ["Suecia", "Noruega", "Finlandia", "Dinamarca"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Polonia?",
    a: ["Varsovia", "Cracovia", "Gdansk", "Poznan"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Qué río atraviesa Madrid?",
    a: ["Ebro", "Guadiana", "Tajo", "Manzanares"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿En qué país está la Estatua de la Libertad?",
    a: ["Francia", "Estados Unidos", "Reino Unido", "Canadá"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es el país más pequeño de Sudamérica?",
    a: ["Uruguay", "Paraguay", "Surinam", "Guyana"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué montañas separan España de Francia?",
    a: ["Sierra Nevada", "Pirineos", "Cordillera Cantábrica", "Sistema Central"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Grecia?",
    a: ["Atenas", "Tesalónica", "Patras", "Heraclión"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene más lagos del mundo?",
    a: ["Canadá", "Rusia", "EEUU", "Finlandia"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿En qué país está el Machu Picchu?",
    a: ["Bolivia", "Perú", "Ecuador", "Colombia"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Irlanda?",
    a: ["Cork", "Galway", "Dublín", "Limerick"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué mar baña a Israel?",
    a: ["Mar Negro", "Mar Rojo", "Mar Mediterráneo", "Mar Caspio"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es el río más largo de España?",
    a: ["Duero", "Tajo", "Guadalquivir", "Ebro"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está la torre de Pisa?",
    a: ["España", "Italia", "Francia", "Grecia"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué cadena de montañas hay en Japón?",
    a: ["Alpes", "Himalaya", " Andes", "Ninguna de las anteriores"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Suecia?",
    a: ["Gotemburgo", "Estocolmo", "Malmö", "Upsala"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país es el más cálido del mundo?",
    a: ["Australia", "India", "Libia", "Brasil"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país está el Big Ben?",
    a: ["Francia", "Inglaterra", "Escocia", "Gales"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Austria?",
    a: ["Salzburgo", "Viena", "Innsbruck", "Graz"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué océano es el más profundo?",
    a: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país se encuentra el Sinaí?",
    a: ["Jordania", "Israel", "Egipto", "Líbano"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Bulgaria?",
    a: [" Sofía", "Plovdiv", "Varna", "Burgas"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Qué estrecho separa Europa de África?",
    a: ["Bósforo", "Gibraltar", "Mallaca", "Davis"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es el lago más profundo del mundo?",
    a: ["Lago Superior", "Lago Baikal", "Lago Tanganica", "Lago Victoria"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está el Monte Vesubio?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Croacia?",
    a: ["Zagreb", "Split", "Dubrovnik", "Rijeka"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene más fronteras terrestres?",
    a: ["Rusia", "China", "Brasil", "Francia"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Filipinas?",
    a: ["Cebú", "Manila", "Davao", "Quezon"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está el Coliseo Romano?",
    a: ["Grecia", "Italia", "España", "Francia"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es el río más largo de América?",
    a: ["Misisipi", "Missouri", "Amazonas", "Orinoco"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Finlandia?",
    a: ["Turku", "Helsinki", "Tampere", "Oulu"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está la Sagrada Familia?",
    a: ["Francia", "España", "Italia", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué océano baña la costa este de Estados Unidos?",
    a: ["Pacífico", "Atlántico", "Índico", "Ártico"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Noruega?",
    a: ["Bergen", "Oslo", "Trondheim", "Stavanger"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué mar es el más salado del mundo?",
    a: ["Mediterráneo", "Rojo", "Muerto", "Negro"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país está la Torre de Londres?",
    a: ["Francia", "Irlanda", "Escocia", "Inglaterra"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de República Checa?",
    a: ["Brno", "Praga", "Ostrava", "Plzen"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué cordillera hay en América del Sur?",
    a: ["Alpes", "Himalaya", "Andes", "Rocosas"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es el país más pequeño de Europa?",
    a: ["San Marino", "Liechtenstein", "Ciudad del Vaticano", "Mónaco"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país está la Gran Mezquita de Córdoba?",
    a: ["España", "Portugal", "Francia", "Marruecos"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Dinamarca?",
    a: ["Odense", "Aarhus", "Copenhague", "Aalborg"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Bélgica?",
    a: ["Amberes", "Gante", "Bruselas", "Brujas"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Países Bajos?",
    a: ["Róterdam", "La Haya", "Ámsterdam", "Utrecht"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país está la Fontana di Trevi?",
    a: ["Italia", "España", "Francia", "Grecia"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Turquía?",
    a: ["Estambul", "Ankara", "Izmir", "Antalya"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Hungría?",
    a: ["Budapest", "Debrecen", "Szeged", "Miskolc"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿En qué país está el Partenón?",
    a: ["Italia", "Grecia", "España", "Turquía"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Rumanía?",
    a: ["Bucarest", "Cluj", "Timisoara", "Iasi"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Bielorrusia?",
    a: ["Minsk", "Grodno", "Brest", "Gomel"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Qué cordillera hay en Italia?",
    a: ["Alpes", "Apeninos", "Pirineos", "Balcanes"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Eslovaquia?",
    a: ["Kosice", "Bratislava", "Presov", "Zilina"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está Stonehenge?",
    a: ["Escocia", "Gales", "Irlanda", "Inglaterra"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Lituania?",
    a: ["Kaunas", "Vilnius", "Klaipeda", "Siauliai"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Letonia?",
    a: ["Daugavpils", "Riga", "Liepaja", "Jelgava"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está la Alhambra?",
    a: ["España", "Portugal", "Marruecos", "Francia"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Eslovenia?",
    a: ["Maribor", "Celje", "Liubliana", "Koper"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Estonia?",
    a: ["Tartu", "Narva", "Pärnu", "Tallin"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿En qué país está la Ópera de Sídney?",
    a: ["Nueva Zelanda", "Australia", "Inglaterra", "Francia"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Chipre?",
    a: ["Limassol", "Nicosia", "Larnaca", "Famagusta"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Malta?",
    a: ["Valletta", "Birgu", "Sliema", "St. Julian's"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿En qué país están los Castillos del Loira?",
    a: ["España", "Italia", "Francia", "Portugal"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Islandia?",
    a: ["Akureyri", "Reikiavik", "Kopavogur", "Hafnarfjordur"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Luxemburgo?",
    a: ["Esch-sur-Alzette", "Luxemburgo", "Diekirch", "Echternach"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está la Universidad de Bolonia?",
    a: ["España", "Italia", "Francia", "Grecia"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Serbia?",
    a: ["Novi Sad", "Belgrado", "Kragujevac", "Nis"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Bosnia?",
    a: ["Mostar", "Sarajevo", "Banja Luka", "Tuzla"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país están las lagoas de las Routes?",
    a: ["Francia", "Italia", "España", "Grecia"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Montenegro?",
    a: ["Podgorica", "Cetinje", "Budva", "Kotor"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Macedonia del Norte?",
    a: ["Bitola", "Escopia", "Ohrid", "Kumanovo"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está el Golden Gate?",
    a: ["Canadá", "México", "Estados Unidos", "Inglaterra"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Albania?",
    a: ["Durres", "Tirana", "Vlorë", "Scar"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Moldavia?",
    a: ["Chisinau", "Balti", "Tiraspol", "Galați"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿En qué país está elaws?",
    a: ["Canadá", "Estados Unidos", "Australia", "Inglaterra"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Armenia?",
    a: ["Gyumri", "Vanadzor", "Ereván", "Garni"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Azerbaiyán?",
    a: ["Bakú", "Ganja", "Sumqayit", "Mingechevir"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿En qué país está la Sagrada Familia?",
    a: ["España", "Francia", "Italia", "Portugal"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Georgia (país)?",
    a: ["Batumi", "Tiflis", "Kutaisi", "Rustavi"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Kazajistán?",
    a: ["Almaty", "Astana", "Shymkent", "Karaganda"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país están las pirámides de Teotihuacán?",
    a: ["Guatemala", "Perú", "México", "Colombia"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Uzbekistán?",
    a: ["Samarcanda", "Bukhara", "Taskent", "Nukus"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Turkmenistán?",
    a: ["Dashoguz", "Mary", "Turkmenabat", "Asjabad"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿En qué país está el Monte Kilimanjaro?",
    a: ["Kenia", "Tanzania", "Etiopía", "Uganda"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Kirguistán?",
    a: ["Osh", "Jalal-Abad", "Richka", "Bishkek"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Tayikistán?",
    a: ["Khujand", "Kulob", "Qurghonteppa", "Dushanbe"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿En qué país está el Mar Muerto?",
    a: ["Jordania", "Israel", "Palestina", "Todos los anteriores"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Nepal?",
    a: ["Pokhara", "Kathmand", "Lalitpur", "Biratnagar"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Sri Lanka?",
    a: ["Colombo", "Sri Jayawardenepura", "Kandy", "Galle"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está el templo de Angkor Wat?",
    a: ["Tailandia", "Vietnam", "Camboya", "Laos"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Myanmar?",
    a: ["Yangón", "Naipyido", "Mandalay", "Bagan"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Bangladés?",
    a: ["Chittagong", "Dhaka", "Khulna", "Sylhet"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está la mezquita azul de Delhi?",
    a: ["Pakistán", "India", "Bangladés", "Afganistán"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Laos?",
    a: ["Luang Prabang", "Vientiane", "Pakse", "Thakkek"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Camboya?",
    a: ["Siem Reap", "Phnom Penh", "Battambang", "Sihanoukville"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está la ciudad de Petra?",
    a: ["Jordania", "Israel", "Egipto", "Siria"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital deBután?",
    a: ["Paro", "Thimphu", "Punakha", "Bumthang"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Maldivas?",
    a: ["Addu", "Malé", "Fuvahmulah", "Kudahuvadhoo"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está la ciudad de Dubai?",
    a: ["Abu Dhabi", "Dubái", "Sharya", "Ras Al Khaimah"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Brunéi?",
    a: ["Bandar Seri Begawan", "Kuala Belait", "Seria", "Tutong"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Timor Oriental?",
    a: ["Dili", "Baucau", "Lospalos", "Maliana"],
    c: 0, cat: "Geografía"
  },
  {
    q: "¿En qué país está la antigua Palmira?",
    a: ["Irak", "Irán", "Siria", "Jordania"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Qatar?",
    a: ["Al Rayyan", "Doha", "Umm Salal", "Al Wakrah"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Baréin?",
    a: ["Muharraq", "Manama", "Riffa", "Sitra"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está la ciudad de Trelew?",
    a: ["Chile", "Argentina", "Uruguay", "Brasil"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Kuwait?",
    a: ["Al Ahmadi", "Hawalli", "Kuwait", "Salmiya"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Omán?",
    a: ["Salalah", "Mascate", "Sohar", "Nizwa"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país están las ruinas de Cartago?",
    a: ["Argelia", "Marruecos", "Túnez", "Libia"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Yemen?",
    a: ["Adén", "Taiz", "Saná", "Hodeida"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Libano?",
    a: ["Trípoli", "Beirut", "Tiro", "Biblos"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está elaws?",
    a: ["Canadá", "Estados Unidos", "México", "Guatemala"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Jordania?",
    a: ["Irbid", "Amman", "Zarqa", "Aqaba"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Siria?",
    a: ["Alepo", "Homs", "Damasco", "Latakia"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país está la Patagonia?",
    a: ["Chile", "Argentina", "Ambos", "Ninguno"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Irak?",
    a: ["Mosul", "Basora", "Bablad", "Erbil"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Israel?",
    a: ["Haifa", "Tel Aviv", "Jerusalén", "Eilat"],
    c: 2, cat: "Geografía"
  },
  {
    q: "¿En qué país está elaws?",
    a: ["Canadá", "Estados Unidos", "Australia", "Reino Unido"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Arabia Saudí?",
    a: ["Yida", "Riad", "La Meca", "Medina"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Emiratos Árabes Unidos?",
    a: ["Dubái", "Abu Dhabi", "Sharjah", "Ajman"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿En qué país está la ciudad de Fez?",
    a: ["Argelia", "Marruecos", "Túnez", "Mauritania"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de Canadá?",
    a: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿Qué país tiene forma de bota?",
    a: ["Grecia", "Italia", "España", "Portugal"],
    c: 1, cat: "Geografía"
  },
  {
    q: "¿Cuál es la capital de México?",
    a: ["Guadalajara", "Monterrey", "Cancún", "Ciudad de México"],
    c: 3, cat: "Geografía"
  },
  {
    q: "¿En qué país está la Guerra de las Galias?",
    a: ["Italia", "Francia", "España", "Alemania"],
    c: 1, cat: "Historia"
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
  {
    q: "¿Qué siglo pintó Velázquez Las Meninas?",
    a: ["XVI", "XVII", "XVIII", "XIX"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué escritor francés escribió Los Miserables?",
    a: ["Balzac", "Hugo", "Zola", "Dumas"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién compuso El Lago de los Cisnes?",
    a: ["Bach", "Mozart", "Tchaikovsky", "Chopin"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿En qué país se celebra el Carnaval de Río?",
    a: ["Argentina", "Uruguay", "Brasil", "Colombia"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué arquitecto diseñó la Sagrada Familia?",
    a: ["Rafael", "Gaudi", "Goya", "Domènech i Muntaner"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué autor escribió El Código Da Vinci?",
    a: ["John Grisham", "Dan Brown", "Michael Crichton", "James Patterson"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué instrumento tocaba Ludwig van Beethoven?",
    a: ["Violín", "Piano", "Flauta", "Clavecín"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué escultor hizo El Pensador?",
    a: ["Miguel Ángel", "Bernini", "Rodin", "Donatello"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién escribió Crimen y Castigo?",
    a: ["Dostoievski", "Turgueniev", "Gógol", "Chéjov"],
    c: 0, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué cuadro pintó Velázquez en 1656?",
    a: ["La rendición de Breda", "Las Hilanderas", "La Venus del espejo", "Todos los anteriores"],
    c: 3, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué poeta español escribió Fermín?",
    a: ["Alberti", "Lorca", "Cernuda", "Hernández"],
    c: 3, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué grupo cantó La Camioneta Gris?",
    a: ["Los Chichos", "Los Chunguitos", "Los Browns", "Los Mustang"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién pintó La Maja Desnuda?",
    a: ["Goya", "Velázquez", "Ribera", "Goya"],
    c: 0, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué película dirigió Pedro Almodóvar?",
    a: ["El Origen", "Todo sobre mi madre", "Blade Runner", "Gladiator"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién escribió La Regenta?",
    a: ["Galdós", "Clarín", "Bécquer", "Pereda"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué compositor alemán creó los Brandenbugsues?",
    a: ["Bach", "Handel", "Telemann", "Schütz"],
    c: 0, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué ballet compuso Tchaikovsky?",
    a: ["El Lago de los Cisnes", "Cascanueces", "La Bella Durmiente", "Peer Gynt"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién pintó La Lectura?",
    a: ["Picasso", "Matisse", "Bonnard", "Vuillard"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué escritores forman la Generación del 98?",
    a: ["Galdós, Pereda, Alarcón", "Unamuno, Azorín, Maeztu, A. Machado", "Baroja, Valle-Inclán, Pío Baroja", "Ninguna es correcta"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué animal es el más venenoso del mundo?",
    a: ["Escorpión", "Serpiente negra", "Medusa caja", "Araña viuda negra"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Cuántas alas tiene un abejorro?",
    a: ["2", "4", "6", "8"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué tipo de animal es una gamba?",
    a: ["Pez", "Crustáceo", "Molusco", "Insecto"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuánto tarda la Tierra en dar una vuelta al Sol?",
    a: ["365 días", "366 días", "360 días", "364 días"],
    c: 0, cat: "Naturaleza"
  },
  {
    q: "¿Qué mamífero pon huevos?",
    a: ["Murciélago", "Ornitorrinco", "Delfín", "Koala"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuántas patas tiene una oruga?",
    a: ["6", "8", "12", "16"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué gas expulsan las plantas en la fotosíntesis?",
    a: ["Dióxido de carbono", "Nitrógeno", "Oxígeno", "Metano"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal es símbolo de la sabiduría en Occidente?",
    a: ["Búho", "Cuervo", "Lechuza", "Águila"],
    c: 0, cat: "Naturaleza"
  },
  {
    q: "¿Cuánto dura la vida media de una avispa?",
    a: ["1 semana", "1 mes", "3 meses", "6 meses"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal es el más alto del mundo?",
    a: ["Jirafa", "Elefante", "Dromedario", "Avestruz"],
    c: 0, cat: "Naturaleza"
  },
  {
    q: "¿Qué estrella está más cerca de la Tierra?",
    a: ["Sirio", "Alfa Centauri", "El Sol", "Betelgeuse"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué país tiene más especies de aves?",
    a: ["Australia", "Brasil", "Colombia", "Perú"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué insecto puede recorrer más distancia sin parar?",
    a: ["Libélula", "Mariposa monarca", "Abeja", "Saltamontes"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuál es el felino más grande del mundo?",
    a: ["León", "Tigre", "Jaguar", "Leopardo"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal construye dams más elaborados?",
    a: ["Ratas", "Castores", "Nutrias", "Mapaches"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuántas vértebras tiene el cuello de una jirafa?",
    a: ["5", "6", "7", "8"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué reptiles voladores existieron?",
    a: ["Pterodáctilos", "Dimorphodon", "Ambos", "Ninguno"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal tiene la lengua más larga en proporción a su cuerpo?",
    a: ["Camaleón", "Oso hormiguero", "Pico de anchoa", "Murciélago"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿De qué color son las flores de la lavanda?",
    a: ["Blanco", "Rosa", "Morado", "Amarillo"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal es conocido por dormir de pie?",
    a: ["Vaca", "Caballo", "Jirafa", "Todas las anteriores"],
    c: 3, cat: "Naturaleza"
  },
  {
    q: "¿Qué actor ha ganado más Oscars de la historia?",
    a: ["Daniel Day-Lewis", "Jack Nicholson", "Katharine Hepburn", "Meryl Streep"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿Qué grupo español cantó Eres tú?",
    a: ["Mecano", "Héroes del Silencio", "Cantis", "Los Chichos"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿Qué director creó Jurassic Park?",
    a: ["Steven Spielberg", "James Cameron", "George Lucas", "Ridley Scott"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿Qué actriz interpretó a Blancanieves en la película de Disney?",
    a: ["Adriana", "Miriam", "Ilene", "Pamela"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿Qué bandaamericana cantó Smells Like Teen Spirit?",
    a: ["Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿Qué actor hizo de Wolverine en X-Men?",
    a: ["Patrick Stewart", "Ian McKellen", "Hugh Jackman", "James McAvoy"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿Qué actriz protagonizó Pretty Woman?",
    a: ["Meg Ryan", "Julia Roberts", "Sandra Bullock", "Cameron Diaz"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué película animada tiene una rata como protagonista?",
    a: ["La Ratoncita Pérez", "Ratatouille", "Stuart Little", "Los Paracaidistas"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué actor fue Hannibal Lecter?",
    a: ["Anthony Hopkins", "Brian Cox", "Mads Mikkelsen", "Todos los anteriores"],
    c: 3, cat: "Cine y Música"
  },
  {
    q: "¿Qué director hizo Inception?",
    a: ["Christopher Nolan", "Denis Villeneuve", "Ridley Scott", "Steven Spielberg"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué actor español ganó un Oscar?",
    a: ["Javier Bardem", "Penélope Cruz", "Antonio Banderas", "Javier Bardem y Penélope Cruz"],
    c: 3, cat: "Cine y Música"
  },
  {
    q: "¿En qué película aparece el personaje Jack Sparrow?",
    a: ["El Señor de los Anillos", "Piratas del Caribe", "Peter Pan", "Narnia"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué actor protagónico de Forrest Gump?",
    a: ["Brad Pitt", "Tom Hanks", "Morgan Freeman", "Robin Williams"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué país se originó la pasta?",
    a: ["España", "Italia", "Grecia", "Francia"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿De qué animal viene el jamón ibérico?",
    a: ["Cerdo", "Vaca", "Cabra", "Oveja"],
    c: 0, cat: "Gastronomía"
  },
  {
    q: "¿Qué vitamina tiene la naranja?",
    a: ["Vitamina A", "Vitamina B", "Vitamina C", "Vitamina D"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué aceite se usa más en España?",
    a: ["Girasol", "Oliva", "Maíz", "Soja"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué legumbre se usa en el cocido madrileño?",
    a: ["Lentejas", "Garbanzos", "Alubias", "Habas"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué ingrediente principal lleva la tortilla española?",
    a: ["Arroz", "Patatas", "Pasta", "Pan"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿De qué país es originario el sushi?",
    a: ["Corea", "Japón", "China", "Tailandia"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué fruta es el mango?",
    a: ["Cítrico", "Tropical", "Baya", "Pomelo"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué líquido se usa para freír en banyak cultures?",
    a: ["Agua", "Vinagre", "Aceite", "Alcohol"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué tipo de queso es el roquefort?",
    a: ["De pasta suave", "De pasta dura", "De pasta azul", "De pasta fresca"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué bebida es el chuño?",
    a: ["Café", "Té", "Chocolate", "Zumo"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué país produce más trigo del mundo?",
    a: ["Rusia", "EEUU", "China", "India"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué alimento aporta más proteína por 100g?",
    a: ["Arroz", "Pollo", "Lentejas", "Huevos"],
    c: 3, cat: "Gastronomía"
  },
  {
    q: "¿Qué significa HTML?",
    a: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué lenguaje de programación usa Elon Musk para Tesla?",
    a: ["C++", "Python", "Java", "Ruby"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Cuántos bits tiene un byte?",
    a: ["4", "8", "16", "32"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa creó el primer smartphone moderno?",
    a: ["Nokia", "BlackBerry", "Apple", "Samsung"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Qué sistema operativo usa el iPhone?",
    a: ["Android", "iOS", "Windows", "Linux"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué tecnología permite pagar sin contacto?",
    a: ["Bluetooth", "NFC", "WiFi", "GPS"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué lenguaje de programación creó Guido van Rossum?",
    a: ["Java", "JavaScript", "Python", "Ruby"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Cuántos TB hay en un PB?",
    a: ["512", "1000", "1024", "2048"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Qué protocolo usa la web segura (https)?",
    a: ["HTTP", "SSL/TLS", "FTP", "SMTP"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa creó Amazon Prime Video?",
    a: ["Google", "Microsoft", "Amazon", "Apple"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Qué lenguaje de programación es de tipado dinámico?",
    a: ["C", "C++", "Java", "Python"],
    c: 3, cat: "Tecnología"
  },
  {
    q: "¿Cuántos núcleos tiene un procesador quad-core?",
    a: ["2", "4", "8", "16"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué dispositivo permite conectar varios aparatos a internet por cable?",
    a: ["Switch", "Router", "Modem", "Todos los anteriores"],
    c: 3, cat: "Tecnología"
  },
  {
    q: "¿Qué significa USB?",
    a: ["Universal Serial Bus", "Unique System Bus", "Universal System Bus", "Unified Serial Bus"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa creó TikTok?",
    a: ["Tencent", "ByteDance", "Alibaba", "Baidu"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué lenguaje de programación es el más usado en desarrollo web?",
    a: ["Python", "JavaScript", "Java", "C++"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué dispositivo almacena datos de forma permanente?",
    a: ["RAM", "ROM", "SSD", "Cache"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa lanzó Alexa?",
    a: ["Google", "Apple", "Amazon", "Microsoft"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Qué significa CPU?",
    a: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Core Processing Unit"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué compañía creó PlayStation?",
    a: ["Nintendo", "Microsoft", "Sony", "Sega"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Qué lenguaje de programación usa Google?",
    a: ["Go", "Dart", "Both A y B", "Ninguno"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Quién fue el cofundador de Microsoft junto a Bill Gates?",
    a: ["Steve Jobs", "Paul Allen", "Steve Wozniak", "Paul Gardner"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué significa RAM?",
    a: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Real Access Memory"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿En qué año se lanzó el primer iPhone?",
    a: ["2005", "2006", "2007", "2008"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Qué significa HTML?",
    a: ["HyperText Markup Language", "HighText Markup Language", "HyperText Making Language", "Home Tool Markup Language"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Quién creó el lenguaje de programación Java?",
    a: ["James Gosling", "Brendan Eich", "Guido van Rossum", "Bjarne Stroustrup"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué significa PDF?",
    a: ["Portable Document Format", "Portable Data File", "Personal Document Format", "Public Document Format"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa creó la consola Xbox?",
    a: ["Sony", "Nintendo", "Microsoft", "Sega"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿En qué año se fundó Apple?",
    a: ["1974", "1976", "1978", "1980"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Quién inventó Python?",
    a: ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Ken Thompson"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué significa VPN?",
    a: ["Virtual Private Network", "Virtual Public Network", "Virtual Personal Network", "Very Private Network"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Cuántos bits tiene un byte?",
    a: ["4", "8", "16", "32"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Quién inventó el ratón de ordenador?",
    a: ["Douglas Engelbart", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué significa LCD?",
    a: ["Liquid Crystal Display", "Light Crystal Display", "Liquid Color Display", "Light Color Display"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿En qué año se creó YouTube?",
    a: ["2003", "2004", "2005", "2006"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Qué significa SEO?",
    a: ["Search Engine Optimization", "Site Engine Optimization", "Search Electronic Order", "System Engine Optimization"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Quién envió el primer correo electrónico?",
    a: ["Ray Tomlinson", "Bill Gates", "Tim Berners-Lee", "Vint Cerf"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué significa HDMI?",
    a: ["High Definition Multimedia Interface", "High Digital Media Interface", "High Definition Media Input", "Hyper Digital Media Interface"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Quién creó la Raspberry Pi?",
    a: ["Raspberry Pi Foundation", "Arduino", "BBC", "Intel"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa inventó el Bluetooth?",
    a: ["Ericsson", "Nokia", "Motorola", "Samsung"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué significa DNS?",
    a: ["Domain Name System", "Digital Name System", "Domain Network Service", "Data Name Server"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa creó el navegador Firefox?",
    a: ["Mozilla", "Google", "Apple", "Opera"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué significa ISP?",
    a: ["Internet Service Provider", "Internet System Provider", "Information Service Provider", "Internet Security Provider"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Quién inventó la impresora 3D?",
    a: ["Chuck Hull", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué significa SSD?",
    a: ["Solid State Drive", "Simple Storage Device", "System Storage Drive", "Serial State Drive"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Quién inventó el teclado QWERTY?",
    a: ["Christopher Latham Sholes", "Thomas Edison", "Alexander Graham Bell", "Samuel Morse"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Quién creó el protocolo HTTP?",
    a: ["Tim Berners-Lee", "Vint Cerf", "Ray Tomlinson", "Marc Andreessen"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa fabrica los procesadores Ryzen?",
    a: ["Intel", "AMD", "Qualcomm", "Nvidia"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué significa OLED?",
    a: ["Organic Light Emitting Diode", "Organic Light Emitting Display", "Organic Light Emission Diode", "Organic Light Electronic Display"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Quién fue el cofundador de Apple con Steve Jobs?",
    a: ["Steve Wozniak", "Bill Gates", "Paul Allen", "Ronald Wayne"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué significa IoT?",
    a: ["Internet of Things", "Internet of Technology", "Information of Things", "Internal of Things"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué empresa creó Kotlin?",
    a: ["Google", "JetBrains", "Microsoft", "Oracle"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué significa API?",
    a: ["Application Programming Interface", "Application Process Interface", "Advanced Programming Interface", "Automated Process Interface"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿En qué año se lanzó el primer Macintosh?",
    a: ["1982", "1984", "1986", "1988"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Quién inventó el transistor?",
    a: ["John Bardeen", "William Shockley", "Walter Brattain", "Todos los anteriores"],
    c: 3, cat: "Tecnología"
  },
  {
    q: "¿Qué significa GUI?",
    a: ["Graphical User Interface", "General User Interface", "Global User Interface", "Graphic Universal Interface"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿En qué año se lanzó Windows 95?",
    a: ["1993", "1995", "1997", "1999"],
    c: 1, cat: "Tecnología"
  },
  {
    q: "¿Qué significa SATA?",
    a: ["Serial ATA", "Simple Advanced Technology Attachment", "Serial Advanced Transfer Array", "System Advanced Technology Attachment"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Quién creó el lenguaje de programación C?",
    a: ["Dennis Ritchie", "Ken Thompson", "Brian Kernighan", "Bjarne Stroustrup"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué significa JPEG?",
    a: ["Joint Photographic Experts Group", "Joint Picture Electronic Group", "Java Picture Encoding Group", "Joint Photographic Encoding Group"],
    c: 0, cat: "Tecnología"
  },
  {
    q: "¿Qué protocolo se usa para enviar correos electrónicos?",
    a: ["HTTP", "FTP", "SMTP", "TCP"],
    c: 2, cat: "Tecnología"
  },
  {
    q: "¿Cuál es el mamífero más lento del mundo?",
    a: ["Elefante", "Perezoso", "Erizo", "Tortuga"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué ave no puede volar y es muy rápida corriendo?",
    a: ["Pingüino", "Avestruz", "Kiwi", "Emú"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuál es la flor nacional de Japón?",
    a: ["Rosa", "Cerezo", "Loto", "Peonía"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal cambia de color para camuflarse?",
    a: ["Serpiente", "Camaleón", "Leopardo", "Tigre"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué insecto produce la miel?",
    a: ["Avispa", "Abeja", "Mosca", "Abejorro"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuántos estómagos tiene una vaca?",
    a: ["1", "2", "4", "6"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué árbol produce bellotas?",
    a: ["Pino", "Haya", "Roble", "Aliso"],
    c: 2, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal hiberna durante el invierno?",
    a: ["Oso", "Lobo", "Águila", "Ciervo"],
    c: 0, cat: "Naturaleza"
  },
  {
    q: "¿Qué criatura marina tiene cinco brazos?",
    a: ["Pulpo", "Estrella de mar", "Pez rape", "Medusa"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué fenómeno natural se mide con la escala de Richter?",
    a: ["Huracán", "Terremoto", "Tsunami", "Tornado"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuál es el ecosistema más grande de la Tierra?",
    a: ["Selva amazónica", "Océanos", "Sahara", "Taiga"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuál es el metal más abundante en la corteza terrestre?",
    a: ["Hierro", "Aluminio", "Cobre", "Oro"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal tiene el corazón más grande?",
    a: ["Elefante", "Ballena azul", "Jirafa", "Hipopótamo"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Cuál es la especie de árbol más longeva del mundo?",
    a: ["Secuoya", "Pino bristlecone", "Olivo", "Roble"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué ave tiene el pico más grande en proporción a su cuerpo?",
    a: ["Águila", "Tucán", "Flamenco", "Cigüeña"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal tiene la piel más gruesa de los mamíferos terrestres?",
    a: ["Elefante", "Rinoceronte", "Hipopótamo", "Jirafa"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Qué animal tiene el olfato más desarrollado?",
    a: ["Perro", "Oso", "Tiburón", "Elefante"],
    c: 3, cat: "Naturaleza"
  },
  {
    q: "¿Qué insecto es conocido por brillar en la noche?",
    a: ["Luciérnaga", "Mariposa nocturna", "Escarabajo", "Grillo"],
    c: 0, cat: "Naturaleza"
  },
  {
    q: "¿Cuál es el mineral más duro después del diamante?",
    a: ["Corindón", "Topacio", "Cuarzo", "Granito"],
    c: 0, cat: "Naturaleza"
  },
  {
    q: "¿Qué mamífero es el único que puede volar?",
    a: ["Ardilla voladora", "Murciélago", "Gallina", "Avestruz"],
    c: 1, cat: "Naturaleza"
  },
  {
    q: "¿Quién escribió La Celestina?",
    a: ["Cervantes", "Fernando de Rojas", "Lope de Vega", "Quevedo"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "En qué museo está expuesta La Gioconda?",
    a: ["Uffizi", "El Prado", "El Louvre", "British Museum"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién compuso El Mesías?",
    a: ["Mozart", "Vivaldi", "Handel", "Bach"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué escritor uruguayo escribió 'El Aleph'?",
    a: ["Borges", "Cortázar", "Onetti", "García Márquez"],
    c: 0, cat: "Arte y Literatura"
  },
  {
    q: "¿En qué siglo vivió William Shakespeare?",
    a: ["XV", "XVI-XVII", "XVIII", "XIX"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién pintó El Nacimiento de Venus?",
    a: ["Miguel Ángel", "Botticelli", "Rafael", "Leonardo"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué banda grabó el álbum Abbey Road?",
    a: ["The Rolling Stones", "The Beatles", "Led Zeppelin", "Pink Floyd"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién escribió Rayuela?",
    a: ["Borges", "Cortázar", "Rulfo", "Neruda"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué escultor creó El Pensador?",
    a: ["Miguel Ángel", "Donatello", "Rodin", "Bernini"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién cantó 'Atrás de las nubes'?",
    a: ["Cártel de Santa", "Café Tacvba", "Caifanes", "Maná"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿En qué país nació Gabriel García Márquez?",
    a: ["México", "Argentina", "Colombia", "Chile"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué movimiento artisticó lideró Dalí?",
    a: ["Impresionismo", "Surrealismo", "Cubismo", "Expresionismo"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién escribió Orgullo y prejuicio?",
    a: ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "Virginia Woolf"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué artista pintó Las Meninas?",
    a: ["Goya", "Velázquez", "El Greco", "Murillo"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién compuso La Four Seasons?",
    a: ["Bach", "Mozart", "Vivaldi", "Handel"],
    c: 2, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué escritor creó a Sherlock Holmes?",
    a: ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe", "Raymond Chandler"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿En qué ciudad está la Ópera de Sídney?",
    a: ["Melbourne", "Sídney", "Brisbane", "Canberra"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién pintó la Capilla Sixtina?",
    a: ["Rafael", "Miguel Ángel", "Leonardo", "Botticelli"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué poeta chileno ganó el Nobel de Literatura?",
    a: ["Pablo Neruda", "Vicente Huidobro", "Nicanor Parra", "Gabriela Mistral"],
    c: 0, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué director hizo Pulp Fiction?",
    a: ["Scorsese", "Tarantino", "Spielberg", "Coppola"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Quién escribre Crónica de una muerte anunciada?",
    a: ["Cortázar", "García Márquez", "Borges", "Vargas Llosa"],
    c: 1, cat: "Arte y Literatura"
  },
  {
    q: "¿Qué faraón construyó la Gran Pirámide de Guiza?",
    a: ["Ramsés II", "Keops", "Tutankamón", "Akenatón"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué año llegó el hombre a la Luna?",
    a: ["1967", "1969", "1971", "1973"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Qué imperio construyó las carreteras romanas?",
    a: ["Imperio Persa", "Imperio Romano", "Imperio Otomano", "Imperio Bizantino"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué año se firmó la paz de Westfalia?",
    a: ["1548", "1618", "1648", "1713"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Quién fue el primer emperador romano?",
    a: ["Julio César", "Augusto", "Nerón", "Tiberio"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué país se inició la Revolución Industrial?",
    a: ["Francia", "Alemania", "Inglaterra", "Italia"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Qué reina francesa fue ejecutada en la Revolución?",
    a: ["Catalina de Médici", "Marie Antoinette", "Isabel I", "Ana de Austria"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué año cayó Constantinopla?",
    a: ["1453", "1492", "1521", "1389"],
    c: 0, cat: "Historia"
  },
  {
    q: "¿Quién fue Napoleón Bonaparte?",
    a: ["Un rey español", "Un emperador francés", "Un papa", "Un explorador"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Qué civilización inventó el papel?",
    a: ["Egipcia", "Romana", "China", "Griega"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿En qué año terminó la Segunda Guerra Mundial en Europa?",
    a: ["1943", "1944", "1945", "1946"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Quién descubrió América en 1492?",
    a: ["Vasco da Gama", "Cristóbal Colón", "Magallanes", "Américo Vespucio"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Qué pueblo originario construyó los templos de Angkor?",
    a: ["Javanés", "Chino", "Jemer", "Tailandés"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿En qué año se disolvió la Unión Soviética?",
    a: ["1989", "1990", "1991", "1993"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Quién pintó la Última Cena?",
    a: ["Miguel Ángel", "Rafael", "Leonardo da Vinci", "Botticelli"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Qué cultura inventó el calendario de 365 días?",
    a: ["Azteca", "Maya", "Inca", "Olmeca"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué año se proclamó la República Española?",
    a: ["1923", "1931", "1936", "1939"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Quién fue Alexander the Great?",
    a: ["Un filósofo griego", "Un rey macedonio", "Un general romano", "Un emperador persa"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué país se inventó la imprenta de Gutenberg?",
    a: ["Italia", "Francia", "Alemania", "Inglaterra"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Qué dinastía gobernó Egipto durante 3000 años?",
    a: ["Ptolemaica", "Faraónica", "Otomana", "Persa"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué año empezó la Primera Guerra Mundial?",
    a: ["1912", "1914", "1916", "1918"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Quién escribió 'La Odisea'?",
    a: ["Sócrates", "Platón", "Homero", "Virgilio"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Qué imperio dominó Sudamérica antes de los españoles?",
    a: ["Azteca", "Maya", "Inca", "Olmeca"],
    c: 2, cat: "Historia"
  },
  {
    q: "En qué año se inauguró el Canal de Panamá?",
    a: ["1904", "1914", "1920", "1930"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Quién fue Marco Polo?",
    a: ["Un emperador chino", "Un explorador veneciano", "Un papa italiano", "Un general romano"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué siglo llegó la peste negra a Europa?",
    a: ["XIII", "XIV", "XV", "XVI"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Qué país fue el primero en abolir la esclavitud?",
    a: ["Estados Unidos", "Inglaterra", "Francia", "España"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué año se firmó el Tratado de Tordesillas?",
    a: ["1452", "1492", "1494", "1500"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Quién fue Cleopatra?",
    a: ["Una emperatriz romana", "Una faraona egipcia", "Una diosa griega", "Una reina persa"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Qué civilización construyó Petra en Jordania?",
    a: ["Romana", "Nabatea", "Egipcia", "Persa"],
    c: 1, cat: "Historia"
  },
  {
    q: "En qué año se celebró la primera Copa Mundial de fútbol?",
    a: ["1928", "1930", "1934", "1938"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Quién fue Juana de Arco?",
    a: ["Una reina francesa", "Una soldado francesa", "Una papa", "Una escritora"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿En qué país nació Platón?",
    a: ["Roma", "Egipto", "Atenas", "Esparta"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Qué inventor creó el teléfono?",
    a: ["Edison", "Tesla", "Graham Bell", "Marconi"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿En qué año se firmó la Declaración de Independencia de EE.UU.?",
    a: ["1774", "1776", "1783", "1789"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Qué cultura construyó los moáis de Pascua?",
    a: ["Polinesia", "Inca", "Maya", "Rapa Nui"],
    c: 3, cat: "Historia"
  },
  {
    q: "¿En qué siglo vivió Dante Alighieri?",
    a: ["XII", "XIII", "XIV", "XV"],
    c: 2, cat: "Historia"
  },
  {
    q: "¿Quién fue Ricardo Corazón de León?",
    a: ["Un papa", "Un rey inglés", "Un emperador alemán", "Un caballero francés"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Qué evento marcó el inicio de la Revolución Francesa?",
    a: ["La ejecución del rey", "La toma de la Bastilla", "La batalla de Waterloo", "El Congreso de Viena"],
    c: 1, cat: "Historia"
  },
  {
    q: "¿Qué gas es el principal componente de la atmósfera terrestre?",
    a: ["Oxígeno", "Nitrógeno", "Argón", "CO₂"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Cuántos cromosomas tiene el ser humano?",
    a: ["23", "44", "46", "48"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué órgano del cuerpo produce insulina?",
    a: ["Hígado", "Riñón", "Páncreas", "Bazo"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuál es la temperatura de ebullición del agua?",
    a: ["50°C", "75°C", "100°C", "120°C"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué planeta es el más cercano al Sol?",
    a: ["Venus", "Mercurio", "Marte", "Júpiter"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Cuántos planetas hay en el sistema solar?",
    a: ["7", "8", "9", "10"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Qué científica descubrió la penicilina?",
    a: ["Marie Curie", "Rosalind Franklin", "Alexander Fleming", "Louis Pasteur"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuál es la unidad de medida de la fuerza?",
    a: ["Julio", "Vatio", "Newton", "Amperio"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué tipo de sangre es el donante universal?",
    a: ["A+", "B+", "AB+", "O-"],
    c: 3, cat: "Ciencia"
  },
  {
    q: "¿Cuántos huesos tiene el cuerpo humano adulto?",
    a: ["186", "206", "226", "256"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Qué planeta tiene los anillos más llamativos?",
    a: ["Júpiter", "Saturno", "Urano", "Neptuno"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Cuál es el metal más abundante en la corteza terrestre?",
    a: ["Hierro", "Cobre", "Aluminio", "Oro"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué vitamina produce la piel con el sol?",
    a: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina E"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuántos dientes tiene un adulto normalmente?",
    a: ["28", "30", "32", "34"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué órgano bombea la sangre?",
    a: ["Pulmón", "Hígado", "Corazón", "Riñón"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuál es la velocidad de la luz en km/s?",
    a: ["150.000", "300.000", "450.000", "600.000"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Qué fuerza nos mantiene pegados a la Tierra?",
    a: ["Magnética", "Nuclear", "Gravitatoria", "Eléctrica"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuántos elementos tiene la tabla periódica?",
    a: ["100", "112", "118", "125"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué científica descubrió la radioactividad?",
    a: ["Rosalind Franklin", "Marie Curie", "Ada Lovelace", "Jane Goodall"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Cuál es la estrella más cercana a la Tierra?",
    a: ["Sirio", "Alpha Centauri", "El Sol", "Polaris"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué gas exhalamos al respirar?",
    a: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Hidrógeno"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuántos músculos tiene el cuerpo humano aproximadamente?",
    a: ["200", "400", "650", "900"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué planeta es conocido como el planeta rojo?",
    a: ["Júpiter", "Venus", "Marte", "Saturno"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuál es el elemento químico más abundante en el universo?",
    a: ["Oxígeno", "Carbono", "Hidrógeno", "Helio"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué animal es el más rápido del mundo?",
    a: ["Guepardo", "Halcón peregrino", "León", "Gacela"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Cuántos litros de sangre tiene el cuerpo humano promedio?",
    a: ["2 litros", "3,5 litros", "5 litros", "7 litros"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué parte de la célula contiene el ADN?",
    a: ["Mitocondria", "Ribosoma", "Núcleo", "Membrana"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuántos años tarda la luz del Sol en llegar a la Tierra?",
    a: ["8 segundos", "8 minutos", "8 horas", "8 días"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Qué número atómico tiene el oxígeno?",
    a: ["4", "6", "8", "10"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué instrumento mide la temperatura?",
    a: ["Barómetro", "Termómetro", "Voltímetro", "Altímetro"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Cuántos planetas enanos hay reconocidos?",
    a: ["3", "5", "7", "9"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Qué hueso del cuerpo humano es el más largo?",
    a: ["Tibia", "Fémur", "Húmero", "Peroné"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Qué es un átomo?",
    a: ["Una molécula", "La unidad básica de la materia", "Una célula", "Un electrón"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Cuánto tiempo tarda la Tierra en dar la vuelta al Sol?",
    a: ["24 horas", "30 días", "365 días", "1000 días"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué descubrió Louis Pasteur?",
    a: ["La vacuna", "La pasteurización", "La penicilina", "La electricidad"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Cuántos sentidos tiene el ser humano?",
    a: ["3", "4", "5", "6"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Qué tipo de estrella es el Sol?",
    a: ["Gigante roja", "Enana amarilla", "Supergigante", "Pulsar"],
    c: 1, cat: "Ciencia"
  },
  {
    q: "¿Qué fórmula química tiene la sal de mesa?",
    a: ["NaCl", "KCl", "CaCO₃", "MgO"],
    c: 0, cat: "Ciencia"
  },
  {
    q: "¿Cuántas vértebras tiene la columna humana?",
    a: ["24", "26", "30", "33"],
    c: 3, cat: "Ciencia"
  },
  {
    q: "¿Qué ciencia estudia los fósiles?",
    a: ["Biología", "Geología", "Paleontología", "Arqueología"],
    c: 2, cat: "Ciencia"
  },
  {
    q: "¿Cuántos sets se necesitan para ganar un partido de tenis masculino en Grand Slam?",
    a: ["2", "3", "4", "5"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿En qué país se inventó el bádminton?",
    a: ["India", "Inglaterra", "China", "Indonesia"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores tiene un equipo de rugby en campo?",
    a: ["11", "13", "15", "17"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Qué deporte practica Tiger Woods?",
    a: ["Tenis", "Golf", "Surf", "Polo"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Cuánto dura un partido de fútbol incluyendo descanso?",
    a: ["80 min", "90 min", "100 min", "120 min"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿En qué país nació Usain Bolt?",
    a: ["Trinidad", "Barbados", "Jamaica", "Cuba"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Qué deporte se jueca con un bumerán?",
    a: ["Cricket", "Golf", "Ninguno", "Bádminton"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Cuántas vueltas tiene el circuito de Mónaco de F1?",
    a: ["50", "60", "70", "80"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Quién tiene más Balones de Oro?",
    a: ["Cristiano Ronaldo", "Lionel Messi", "Pelé", "Maradona"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Qué deporte usa raqueta y pelota en una pista enparedada?",
    a: ["Tenis", "Pádel", "Squash", "Bádminton"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores componen un equipo de voleibol?",
    a: ["5", "6", "7", "8"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿En qué país se celebró el Mundial de 2014?",
    a: ["Sudáfrica", "Brasil", "Rusia", "Qatar"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Qué nadador tiene más medallas olímpicas?",
    a: ["Michael Phelps", "Mark Spitz", "Ryan Lochte", "Ian Thorpe"],
    c: 0, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores hay en un equipo de balonmano?",
    a: ["5", "6", "7", "8"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Qué deporte se practica en Wimbledon?",
    a: ["Golf", "Cricket", "Tenis", "Remo"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Cuántos anillos tiene el símbolo olímpico?",
    a: ["4", "5", "6", "7"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿En qué país se inventó el hockey sobre hielo?",
    a: ["Canadá", "Estados Unidos", "Suecia", "Finlandia"],
    c: 0, cat: "Deportes"
  },
  {
    q: "¿Qué deporte usa un-hole en 18?",
    a: ["Golf", "Minigolf", "Disc golf", "Todos"],
    c: 3, cat: "Deportes"
  },
  {
    q: "¿Cuántos puntos vale un touchdown en fútbol americano?",
    a: ["3", "5", "6", "7"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Quién ganó 7 Tour de Francia consecutivos?",
    a: ["Lance Armstrong", "Eddy Merckx", "Bernard Hinault", "Miguel Induráin"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Qué deporte se practica en un ring?",
    a: ["Karate", "Boxeo", "Judo", "Esgrima"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Cuántos sets ganar para ganar un partido de voleibol?",
    a: ["2", "3", "4", "5"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿En qué país nació Diego Maradona?",
    a: ["Brasil", "Argentina", "Uruguay", "Colombia"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Qué deporte practica Rafael Nadal?",
    a: ["Golf", "Tenis", "Pádel", "Natación"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores forman un equipo de waterpolo?",
    a: ["5", "6", "7", "8"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Qué país ganó el Mundial de fútbol de 2022?",
    a: ["Francia", "Brasil", "Argentina", "Alemania"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Cuánto mide una portería de fútbol?",
    a: ["6x2 m", "7x2,5 m", "8x3 m", "7x3 m"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Qué deporte se practica en un circuito de 42 km?",
    a: ["Ciclismo", "Maratón", "Triatlón", "Atletismo"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores hay en un equipo de béisbol en campo?",
    a: ["7", "8", "9", "10"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Qué tenista tiene más títulos de Grand Slam masculinos?",
    a: ["Federer", "Nadal", "Djokovic", "Sampras"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿En qué deporte se usa un pUCK?",
    a: ["Bádminton", "Hockey sobre hielo", "Cricket", "Golf"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores hay en un equipo de fútbol sala?",
    a: ["4", "5", "6", "7"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Qué deporte se practica en los Juegos Olímpicos de invierno?",
    a: ["Gimnasia", "Natación", "Esquí", "Atletismo"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Cuántos sets ganar para ganar un partido de ajedrez rápido?",
    a: ["1", "2", "3", "4"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Qué deporte usa una red alta en el centro de la pista?",
    a: ["Tenis", "Voleibol", "Bádminton", "Todos"],
    c: 3, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores tiene un equipo de cricket en campo?",
    a: ["9", "10", "11", "12"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Qué nadador español tiene más medallas olímpicas?",
    a: ["Mireia Belmonte", "David Meca", "López Vázquez", "Gemma Mengual"],
    c: 0, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores hay en un equipo de lacrosse?",
    a: ["8", "9", "10", "12"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Qué deporte se practica con un palo y una pelota pequeña?",
    a: ["Golf", "Hockey", "Cricket", "Bádminton"],
    c: 2, cat: "Deportes"
  },
  {
    q: "¿Cuántos jugadores hay en un equipo de bádminton dobles?",
    a: ["1", "2", "3", "4"],
    c: 1, cat: "Deportes"
  },
  {
    q: "¿Qué banda española cantó 'Mentiras'?",
    a: ["Mecano", "Héroes del Silencio", "El Canto del Loco", "La Oreja de Van Gogh"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿Quién dirigió Titanic?",
    a: ["Spielberg", "James Cameron", "Scorsese", "Ridley Scott"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué cantante española venció Eurovisión en 1968?",
    a: ["Rocío Dúrcal", "Massiel", "Julio Iglesias", "Salomé"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda tocó 'Stairway to Heaven'?",
    a: ["AC/DC", "Led Zeppelin", "Deep Purple", "Black Sabbath"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'Despacito'?",
    a: ["J Balvin", "Luis Fonsi", "Maluma", "Ozuna"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué película de Disney tiene a Simba?",
    a: ["Frozen", "El Rey León", "Moana", "Encanto"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué director hizo Matrix?",
    a: ["James Cameron", "Wachowski", "Spielberg", "Nolan"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'La Bicicleta' con Shakira?",
    a: ["Carlos Vives", "Juanes", "Marc Anthony", "Ricky Martin"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿Qué película ganó el Oscar a Mejor Película en 2020?",
    a: ["1917", "Joker", "Parasite", "Once Upon a Time"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'Bohemian Rhapsody'?",
    a: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿Quién compuso la música de 'El Padrino'?",
    a: ["Hans Zimmer", "Ennio Morricone", "John Williams", "Danny Elfman"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué cantante es conocida como la Reina del Pop?",
    a: ["Beyoncé", "Madonna", "Rihanna", "Lady Gaga"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué director español hizo 'Volver'?",
    a: ["Amenábar", "Almodóvar", "Saura", "Bollaró"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'Smells Like Teen Spirit'?",
    a: ["Radiohead", "Nirvana", "Pearl Jam", "Oasis"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'Bailando' con Enrique Iglesias?",
    a: ["Shakira", "Juan Luis Guerra", "Gente de Zona", "Pitbull"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿Qué película de Pixar trata de emotions internas?",
    a: ["Coco", "Inside Out", "Up", "Ratatouille"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'Sweet Child O' Mine'?",
    a: ["Metallica", "Guns N' Roses", "Bon Jovi", "Mötley Crüe"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'Waka Waka' del Mundial 2010?",
    a: ["Rihanna", "Shakira", "Beyoncé", "Jennifer Lopez"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué director hizo El Origen (Inception)?",
    a: ["Spielberg", "Nolan", "Tarantino", "Cameron"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda española cantó 'La Flaca'?",
    a: ["Héroes del Silencio", "Jarabe de Palo", "Mecano", "El Canto del Loco"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién compuso la banda sonora de Star Wars?",
    a: ["Hans Zimmer", "John Williams", "Ennio Morricone", "Danny Elfman"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué cantante puertorriqueño cantó 'Livin' La Vida Loca'?",
    a: ["Marc Anthony", "Enrique Iglesias", "Ricky Martin", "Daddy Yankee"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿Qué película ganó el Oscar a Mejor Película Animada en 2014?",
    a: ["Frozen", "Big Hero 6", "The Lego Movie", "How to Train Your Dragon 2"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'Hotel California'?",
    a: ["Fleetwood Mac", "Eagles", "The Doors", "Lynyrd Skynyrd"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'Vivir mi vida'?",
    a: ["Marc Anthony", "Juanes", "Ricky Martin", "Daddy Yankee"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿Qué director hizo Jurassic Park?",
    a: ["James Cameron", "Steven Spielberg", "Ridley Scott", "George Lucas"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'Yellow'?",
    a: ["Oasis", "Coldplay", "Radiohead", "Blur"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'La Tortura' con Shakira?",
    a: ["Alejandro Sanz", "Juanes", "Enrique Iglesias", "Ricky Martin"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿Qué película tiene el personaje Darth Vader?",
    a: ["Star Trek", "Star Wars", "Blade Runner", "Matrix"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'One'?",
    a: ["U2", "Metallica", "Green Day", "Nirvana"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'Mi Gente' con J Balvin?",
    a: ["Maluma", "Willy William", "Ozuna", "Nicky Jam"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué director hizo Avatar?",
    a: ["Nolan", "James Cameron", "Spielberg", "Zemeckis"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'Wonderwall'?",
    a: ["Blur", "Oasis", "Pulp", "Suede"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'Beso' con ROSALÍA?",
    a: ["Rauw Alejandro", "Bad Bunny", "J Balvin", "Daddy Yankee"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿Qué película ganó el Oscar en 2023?",
    a: ["Top Gun: Maverick", "Everything Everywhere", "Elvis", "All Quiet"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'Billie Jean'?",
    a: ["Prince", "Michael Jackson", "Stevie Wonder", "Whitney Houston"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'Bamboléo'?",
    a: ["Manu Chao", "Gipsy Kings", "Bebo Valdés", "Paco de Lucía"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué director hizo Gladiador?",
    a: ["Scott", "Spielberg", "Nolan", "Cameron"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'Dream On'?",
    a: ["Led Zeppelin", "Aerosmith", "Bon Jovi", "Van Halen"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'Ojitos Lindos' con Bad Bunny?",
    a: ["J Balvin", "Feid", "Maldy", "Wisin y Yandel"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué película tiene a Forrest Gump?",
    a: ["Forrest Gump", "Cast Away", "The Terminal", "Road to Perdition"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'With or Without You'?",
    a: ["Coldplay", "U2", "Depeche Mode", "The Cure"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'Dákiti' con Bad Bunny?",
    a: ["Jhay Cortez", "J Balvin", "Ozuna", "Luny Tunes"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿Qué director hizo Batman: The Dark Knight?",
    a: ["Burton", "Nolan", "Snyder", "Schumacher"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'Nothing Else Matters'?",
    a: ["Iron Maiden", "Metallica", "Black Sabbath", "Judas Priest"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'La Camisa Negra'?",
    a: ["Carlos Vives", "Juanes", "Shakira", "Carlos Santana"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'Purple Rain'?",
    a: ["Michael Jackson", "Prince", "Stevie Wonder", "David Bowie"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'Havana' con Young Thug?",
    a: ["Dua Lipa", "Camila Cabello", "Selena Gomez", "Ariana Grande"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué director hizo Oppenheimer?",
    a: ["Spielberg", "Nolan", "Scorsese", "Villeneuve"],
    c: 1, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'Under Pressure' con Queen?",
    a: ["The Who", "Led Zeppelin", "David Bowie", "Rolling Stones"],
    c: 2, cat: "Cine y Música"
  },
  {
    q: "¿Quién canta 'Bzrp Music Sessions #53'?",
    a: ["Bizarrap y Shakira", "Bizarrap y Quevedo", "Bizarrap y Duki", "Bizarrap y Rauw Alejandro"],
    c: 0, cat: "Cine y Música"
  },
  {
    q: "¿Qué banda canta 'Sweet Dreams'?",
    a: ["Depeche Mode", "New Order", "The Cure", "Duran Duran"],
    c: 0, cat: "Cine y Música"
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
    q: "¿De qué país es originario el tandoori?",
    a: ["Pakistán", "India", "Bangladés", "Nepal"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué dulce típico de Andalucía se hace con aceite de oliva?",
    a: ["Turrón", "Polvorones", "Rosquillas", "Tortas de aceite"],
    c: 3, cat: "Gastronomía"
  },
  {
    q: "¿Qué fruta se usa para hacer el guacamole?",
    a: ["Tomate", "Aguacate", "Limón", "Piña"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué plato japonés se hace con arroz y pescado crudo?",
    a: ["Ramen", "Sushi", "Tempura", "Yakisoba"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué país es el mayor productor de aceite de oliva?",
    a: ["Italia", "Grecia", "España", "Túnez"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué bebida se obtiene de la fermentación de la cebada?",
    a: ["Vino", "Cerveza", "Sidra", "Sake"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué plato francés se hace con cebolla?",
    a: ["Quiche", "Ratatouille", "Sopa de cebolla", "Crème brûlée"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué especia le da el color rojo al pimentón?",
    a: ["Azafrán", "Pimentón", "Curcuma", "Comino"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué postre italiano se hace con café y queso mascarpone?",
    a: ["Panna cotta", "Tiramisú", "Cannoli", "Gelato"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué fruta tropical es la más exportada del mundo?",
    a: ["Piña", "Mango", "Plátano", "Papaya"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué plato mexicano se hace con maíz y carne?",
    a: ["Tacos", "Empanadas", "Arepas", "Pupusas"],
    c: 0, cat: "Gastronomía"
  },
  {
    q: "¿Qué queso español es típico de la zona de Burgos?",
    a: ["Manchego", "Queso de Burgos", "Tetilla", "Idiazábal"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué bebida se hace con uvas fermentadas y sin gas?",
    a: ["Cava", "Champán", "Vino", "Sidra"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué cereal se usa para hacer el pan?",
    a: ["Maíz", "Trigo", "Arroz", "Cebada"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué postre típico de Galicia se hace con leche?",
    a: ["Flan", "Tarta de Santiago", "Arroz con leche", "Crema catalana"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué plato italiano se hace con pasta y albóndigas?",
    a: ["Risotto", "Ragú a la boloñesa", "Penne", "Fettuccine"],
    c: 1, cat: "Gastronomía"
  },
  {
    q: "¿Qué fruta se usa para hacer el limoncello?",
    a: ["Limón", "Naranja", "Pomelo", "Mandarina"],
    c: 0, cat: "Gastronomía"
  },
  {
    q: "¿Qué país es cuna del kimchi?",
    a: ["Japón", "China", "Corea", "Tailandia"],
    c: 2, cat: "Gastronomía"
  },
  {
    q: "¿Qué fruta se usa para hacer la horchata en Valencia?",
    a: ["Almendra", "Arroz", "Chufa", "Avellana"],
    c: 2, cat: "Gastronomía"
  }
];
