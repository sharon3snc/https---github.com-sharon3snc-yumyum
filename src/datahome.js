const recipes = [
    {
      id: 1,
      name: 'Pollo asado con queso y pesto de tomates secos sobre ensalada italiana',
      image: require('./images/ensalada1.jpeg'),
      time: '30 minutos',
      cal: '400 kcal',
      menu: 'Bajo en calorías',
      restriccion: 'Sin huevo',
      ingredients: [
        {name:'Vinagre balsámico', quantity: '1/8', unit: 'taza'}, 
        {name:'Lechuga', quantity: '200', unit: 'gr'},
        {name:'Pechuga de pollo', quantity: '300', unit: 'gr'},
        {name:'Pepino', quantity: '1/2', unit: 'unid'},
        {name:'Albahaca', quantity: '30', unit: 'gr'},
        {name:'Queso rallado', quantity: '1/4', unit: 'taza'},
        {name:'Pesto de tomate seco', quantity: '1/8', unit: 'taza'},
        {name:'Tomate', quantity: '1', unit: 'unid'},
        {name:'Pimienta negra', quantity: '', unit: ''},
        {name:'Sal', quantity: '', unit: ''},
        {name:'Aceite de oliva', quantity: '', unit: ''},
    ],
      instructions: [
        {step:1, describe:'Precalienta el horno a 200ºC y coloca la rejilla en el tercio superior del horno.'},
        {step:2, describe:'Corta el pollo en trozos finas y colócalas en una bandeja para hornear.'},
        {step:3, describe: 'Rocía el pollo con aceite y sazona con sal y pimienta. Introdúcelo en la bandeja para hornear durante 8 minutos.'},
        {step:4, describe:'Mientras tanto, lava y seca las verduras frescas: lechuga, tomate, pepino y albahaca.'},
        {step:5, describe:'Corta y coloca en un tazón: la lechuga, el tomate en dados pequeños y el pepino en medias lunas finas.'},
        {step:6, describe:'Separa las hojas de albahaca de los tallos y córtalas en tiras finas. Agrega al tazón, revuelve para combinar la ensalada y reserva.'},
        {step:7, describe:"Cuando el pollo esté casi cocido, retíralo del horno. Unta cada trozo con pesto y espolvorea con queso. Regresa al horno y continúa hasta que el queso se derrita y el pollo esté bien cocido, 2-3 minutos más. Retirar del horno."},
        {step:8, describe:"Para servir, divide la ensalada en platos o tazones y rocía con vinagre balsámico; cubre con pollo. ¡Y a disfrutar!"},
    ],
    comensales:1,
    },
    {
      id: 2,
      name: 'Ensalada de hamburguesa de huevo con queso, totopos y mostaza con miel',
      image: require('./images/ensalada2.jpeg'),
      time: '30 minutos',
      cal: '400 kcal',
      menu: 'Bajo en calorías',
      restriccion: 'Sin lactosa',
      ingredients: [
        {name:'Pepino', quantity: '1/2', unit: 'unid'},
        {name:'Tomate', quantity: '1', unit: 'unid'},
        {name:'Pimiento verde', quantity: '1', unit: 'unid'},
        {name:'Aderezo miel y mostaza', quantity: '1/4', unit: 'taza'},
        {name:'Queso rallado', quantity: '1/4', unit: 'taza'},
        {name:'Lechuga', quantity: '200', unit: 'gr'},
        {name:'Nachos', quantity: '50', unit: 'gr'},
        {name:'Hamburguesas vegetarianas', quantity: '1', unit: 'unid'},
        {name:'Aceite de oliva', quantity: '', unit: ''},
    ],
      instructions: [
        {step: 1, describe:'En una sartén caliente, agrega aceite y las hamburguesas y cocine hasta que estén doradas por un lado, de 4 a 5 minutos.'}, 
        {step: 2, describe:'Mientras tanto, lava y seca los productos frescos: tomate, pepino, pimiento, lechuga. '},
        {step: 3, describe:"Voltea las hamburguesas, cubre con queso y continúa cocinando hasta que el queso se derrita y las hamburguesas estén doradas y bien cocidas, 4-5 minutos más."},
        {step: 4, describe:"Corta los tomates en rodajas, el pepino medias lunas finas y el pimiento en dados pequeños. Agrega al bol de ensalada."},
        {step: 5, describe:'Desmenuza los nachos sobre la ensalada, y añad el aderezo de miel y mostaza.' },
        {step: 6, describe:'Cuando las hamburguesas estén listas, córtelas en tiras y sirve sobre de la ensalada.' }
    ],
    comensales:1,
    },
    {
        id: 3,
        name: 'Tacos de calabacín y judías a la barbacoa con lechuga, pimienta y salsa ranch',
        image: require('./images/ensalada3.jpeg'),
        time: '30 minutos',
        cal: '400 kcal',
        menu: 'Clásico',
        restriccion: 'Sin restricciones',
        ingredients: [
            {name:'Judías pintas', quantity: '1/2', unit: 'lata'},
            {name:'Salsa ranch', quantity: '30', unit: 'ml'}, 
            {name:'Lechuga', quantity: '200', unit: 'gr'},
            {name:'Queso rallado', quantity: '1/4', unit: 'taza'},
            {name:'Tortillas de trigo', quantity: '3', unit: 'unid'},
            {name:'Pimiento amarillo', quantity: '1/2', unit: 'unid'},
            {name:'Calabacín', quantity: '1/2', unit: 'unid'},
            {name:'Salsa barbacoa', quantity: '', unit: ''},
            {name:'Pimienta negra', quantity: '', unit: ''},
            {name:'Aceite de oliva', quantity: '', unit: ''},
            {name:'Cebolla en polvo', quantity: '', unit: ''},
            {name:'Sal', quantity: '', unit: ''},
        ],
        instructions: [
            {step: 1, describe:'Recorta y corta el calabacín en dados pequeños. Lava y seca los productos frescos. '}, 
            {step: 2, describe:'Precalienta una sartén a fuego medio-alto. escurre y enjuaga los frijoles en un colador.'},
            {step: 3, describe:"Una vez que la sartén esté caliente, agrega aceite y revuelve para cubrir el fondo. Agrega el calabacín, los frijoles y las especias; cocina, revolviendo ocasionalmente, hasta que se ablanden, de 4 a 5 minutos."},
            {step: 4, describe:'Corta la lechuga en tiras finas y el pimiento amarillo en dados pequeños. Agrega al un bol, junto con el aderezp y revuelve para combinar la ensalada.' },
            {step: 5, describe:"Cuando los calabacines y las judías estén cocidas, agrega la salsa barbacoa a la sartén y revuelve para combinar. Alejar del calor."},
            {step: 6, describe:"Calienta las totillas, rellénalas con la mezcla de ingredientes calientes y fríos.¡A disfrutar!"},
        ],
        comensales:1,
    },
    {
        id: 4,
        name: 'Ensalada balsámica de rúcula con lentejas, tomate, pepino, aguacate y queso feta',
        image: require('./images/ensalada4.jpeg'),
        time: '20 minutos',
        cal: '400 kcal',
        menu: 'Vegetariano',
        restriccion: 'Sin huevo',
        ingredients: [
            {name:'Aguacate', quantity: '1', unit: 'unid'},
            {name:'Rúcula', quantity: '100', unit: 'gr'},
            {name:'Vinagre balsámico', quantity: '1/4', unit: 'taza'},
            {name:'Queso feta', quantity: '50', unit: 'gr'},
            {name:'Pepino', quantity: '1', unit: 'unid'},
            {name:'Tomate', quantity: '1', unit: 'unid'},
            {name:'Perejil', quantity: '50', unit: 'gr'},
            {name:'Lentejas', quantity: '50', unit: 'gr'},
            {name:'cebolla roja', quantity: '1/2', unit: 'unid'},
        ],
            
        instructions: [
            {step: 1, describe:'Pelar, cortar por la mitad y en dados pequeños la cebolla. Colócala en un tazón mediano.'}, 
            {step: 2, describe:'Escurrir y enjuagar las lentejas. Añadir al bol con la cebolla. Lava y seca los productos frescos.'},
            {step: 3, describe:'Corta el tomate, el aguacate y el pepino en dados pequeños. Pica las hojas de perejil.'},
            {step: 4, describe:'Agrega los ingredientes a un bol, añade el queso feta y el vinagre balsámico y revuelve.'},
            {step: 5, describe:'Sirve la rúcula en platos y cubre con la ensalada de lentejas. ¡A disfrutar!'},
        ],
        comensales:1,
    },
    {
        id: 5,
        name: 'Atún al pesto de tomate y albahaca se derrite con ensalada verde mixta italiana',
        image: require('./images/ensalada5.jpeg'),
        time: '20 minutos',
        cal: '400 kcal',
        menu: 'Bajo en calorías',
        restriccion: 'Sin huevo',
        ingredients: [
            {name:'Pesto de albahaca', quantity: '1/2', unit: 'taza'},
            {name:'ALcaparra', quantity: '1/2', unit: 'cda'},
            {name:'Atún en lata', quantity: '1', unit: 'lata'},
            {name:'Pepino', quantity: '1/2', unit: 'unid'},
            {name:'Queso rallado', quantity: '1/2', unit: 'taza'},
            {name:'Tomate', quantity: '1', unit: 'unid'},
            {name:'Pan integral', quantity: '2', unit: 'unid'},
            {name:'Pimienta negra', quantity: '', unit: ''},
            {name:'Mayonesa', quantity: '', unit: ''},
            {name:'Sal', quantity: '', unit: ''},
        ],
        instructions: [
            {step: 1, describe:'Precaliente el horno para asar a temperatura alta. Tuesta las rebanadas de pan integral en horno o en tostadora.'}, 
            {step: 2, describe:'Abre la lata de atún y escúrrelo. Colócalo en un tazón mediano y desmenúzalo con un tenedor. Condimenta con sal y pimienta.'},
            {step: 3, describe:'Escurrir y picar las alcaparras. Agrega al bol con el atún junto con el pesto, la mayonesa, la sal y la pimienta. Revuelve para combinar la ensalada de atún y reserva.'},
            {step: 4, describe:'Lava y corta el tomate en rodajas finas y el pepino en medias lunas. Condimenta con sal y pimienta. '},
            {step: 5, describe:'Divide la ensalada de atún entre las tostadas y extiéndela en una capa uniforme; cubre con rodajas de tomate y espolvorea con queso.'},
            {step: 6, describe:'Coloca las tostadas en el horno a temperatura alta y espera hasta que el queso se derrita y burbujee.'},
            {step: 7, describe:'Para servir, divide el atún derretido y las verduras mixtas en platos; cubre las verduras con pepino y rocía con el aderezo. ¡A Disfrutar!'}
        ],
        comensales:1,
    },
    {
        id: 6,
        name: 'Ternera a la parrilla con salsa picante de miso y verduras al vapor con sésamo',
        image: require('./images/ensalada6.jpeg'),
        time: '30 minutos',
        cal: '400 kcal',
        menu: 'Clásico',
        restriccion: 'Sin gluten',
        ingredients: [
            {name:'Floretes de brócoli', quantity: '100', unit: 'gr'},
            {name:'Floretes de coliflor', quantity: '100', unit: 'gr'},
            {name:'Filetes de ternera', quantity: '150', unit: 'gr'},
            {name:'Chalote', quantity: '1/2', unit: 'unid'},
            {name:'Pimienta negra', quantity: '', unit: ''},
            {name:'Azúcar morena', quantity: '', unit: ''},
            {name:'Ajo en polvo', quantity: '', unit: ''},
            {name:'Sal', quantity: '', unit: ''},
            {name:'Semillas de sésamo', quantity: '', unit: ''},
            {name:'Aceite de sésamo', quantity: '', unit: ''},
        ],
        instructions: [
            {step: 1, describe:'Precaliente una sartén para parrilla, una parrilla al aire libre o una sartén normal a fuego medio-alto.'}, 
            {step: 2, describe:'Mientras la parrilla se calienta, seca el filete de ternera con toallas de papel y colóquelo en un plato; sazone con sal y pimienta por ambos lados.'},
            {step: 3, describe:'Una vez que la parrilla esté caliente, cúbrala con aceite; agregue el bistec y cocine hasta el punto deseado, de 2 a 5 minutos por lado. Transfiera a un plato limpio, cubra sin apretar con papel de aluminio y deje reposar durante 5 minutos.'}, 
            {step: 4, describe:'Mientras tanto, llene una cacerola mediana con 2 pulgadas de agua caliente (del grifo), cubra y deje hervir a fuego alto.'},
            {step: 5, describe:'Mientras el agua hierve, pela y pica la chalota. Colóquelo en un tazón pequeño junto con la pasta de miso, la salsa de chile y ajo, el aceite, las semillas de sésamo, el azúcar y el ajo en polvo. Revuelva para combinar la salsa de miso picante y reserve.'}, 
            {step: 6, describe:'Una vez que el agua esté hirviendo, reduzca el fuego a medio, luego agregue la coliflor y el brócoli. Vuelva a tapar y cocine al vapor hasta que las verduras estén tiernas, de 5 a 6 minutos.'},
            {step: 7, describe:'Cuando las verduras estén cocidas, escurrirlas y devolverlas a la sartén. Rocíe con aceite, espolvoree con semillas de sésamo y sazone con sal y pimienta; revuelva para cubrir.'}, 
            {step: 8, describe:'Para servir, corta el filete de ternera y rocíe con salsa de miso picante.  Coloca las verduras en platos. ¡A disfrutar!'},
        ],
        comensales:1,
    },
    {
        id: 7,
        name: 'Tazón de fideos de arroz con pollo y maní con guisantes, zanahorias y pepino',
        image: require('./images/ensalada7.jpeg'),
        time: '30 minutos',
        cal: '400 kcal',
        menu: 'Clásico',
        restriccion: 'Sin huevo',
        ingredients: [
            {name:'Pechuga de pollo', quantity: '150', unit: 'gr'},
            {name:'Pepino', quantity: '1/2', unit: 'unid'},
            {name:'Cebolleta', quantity: '1', unit: 'unid'},
            {name:'Mantequilla de cacahuete', quantity: '30', unit: 'gr'},
            {name:'Zanahoria rallada', quantity: '50', unit: 'gr'},
            {name:'Guisantes', quantity: '50', unit: 'gr'},
            {name:'Fideos de arroz', quantity: '100', unit: 'gr'},
            {name:'Pimienta negra', quantity: '', unit: ''},
            {name:'Sal', quantity: '', unit: ''},
            {name:'Salsa de soja', quantity: '', unit: ''},
            {name:'Aceite de sésamo', quantity: '', unit: ''},
        ],
        instructions: [
            {step: 1, describe:'Llene una cacerola mediana hasta la mitad con agua caliente (del grifo), tápela y déjela hervir. Retirar del fuego, destapar y agregar los fideos de arroz. Remoje durante 10 minutos o según las instrucciones del paquete. Escurrir en un colador y enjuagar con agua fría.'}, 
            {step: 2, describe:'Mientras tanto, lava y seca los productos frescos. Recorte y corte las cebollas verdes en forma transversal en trozos finos. Colóquelo en un tazón pequeño.'},
            {step: 3, describe:'Reduzca a la mitad los guisantes en forma transversal. Agregue al bol con las cebollas verdes y reserve.'},
            {step: 4, describe:'Precalienta una sartén a fuego medio-alto.Mientras la sartén se calienta, seque el pollo con toallas de papel y córtelo en trozos pequeños. Condimentar con sal y pimienta.'},
            {step: 5, describe:'Una vez que la sartén esté caliente, agregue aceite y revuelva para cubrir el fondo. Agregue el pollo y cocine, revolviendo ocasionalmente, hasta que esté dorado y casi cocido, de 3 a 4 minutos.'},
            {step: 6, describe:'Agregue las cebollas verdes y los guisantes a la sartén. Cocine, revolviendo ocasionalmente, hasta que las verduras estén tiernas y el pollo bien cocido, de 3 a 4 minutos.'},
            {step: 7, describe:'Mientras tanto, usando una tabla de cortar limpia, recorte y corte el pepino por la mitad a lo largo, luego córtelo transversalmente en medias lunas finas.'},
            {step: 8, describe:'Cuando el pollo y las verduras estén cocidos, agregue la salsa de maní, el agua y la salsa de soja a la sartén. Continúe cocinando, revolviendo ocasionalmente, hasta que la salsa esté bien caliente y espesa un poco, 2-3 minutos más.'},
            {step: 9, describe:'Agregue los fideos escurridos a la sartén, mezcle para combinar todos los ingredientes y retire del fuego.'} ,
            {step: 10, describe: 'Para servir, divida los fideos con salsa, el pollo y las verduras en tazones; cubra con pepino y zanahorias. ¡A disfrutar!'} 
        ],
        comensales:1,
    },
    {
        id: 8,
        name: 'Sopa Cremosa De Pimiento Rojo Asado Con Tomate, Pepino Y Hummus Pita',
        image: require('./images/ensalada8.jpeg'),
        time: '30 minutos',
        cal: '400 kcal',
        menu: 'Vegano',
        restriccion: 'Sin huevo',
        ingredients: [
            {name:'Caldo de pollo', quantity: '200', unit: 'ml'},
            {name:'Pepino', quantity: '1/2', unit: 'unid'},
            {name:'Ajo', quantity: '1', unit: 'diente'},
            {name:'Nata para cocinar', quantity: '30', unit: 'ml'},
            {name:'Hummus', quantity: '50', unit: 'gr'},
            {name:'Queso parmesano', quantity: '1/2', unit: 'taza'},
            {name:'Pimientos en conserva', quantity: '100', unit: 'gr'},
            {name:'Tomate', quantity: '2', unit: 'unid'},
            {name:'Pan de pita', quantity: '2', unit: 'unid'},
            {name:'Sal', quantity: '', unit: ''},
            {name:'Pimienta negra', quantity: '', unit: ''},
        ],
        instructions: [
            {step: 1, describe:'Pela los ajos. Escurrir los pimientos asados. Agrega a la licuadora junto con el caldo, la crema, la sal y la pimienta. Licue la sopa hasta que quede suave, 1-2 minutos.'}, 
            {step: 2, describe:'Vierta la sopa en una olla grande y cocine a fuego medio-alto, revolviendo ocasionalmente. Una vez que hierva a fuego lento, retirar del fuego.'},
            {step: 3, describe:'Mientras tanto, lave, seque y corte los tomates en rodajas finas. Haz lo mismo con el pepeino. Colócalos en un plato y sazona con sal y pimienta.'},
            {step: 4, describe:'Corta las pitas por la mitad y abre con cuidado los bolsillos. Unte cada bolsillo con hummus y luego rellénelo con rodajas de tomate y pepino.'},
            {step: 5, describe:'Divida la sopa en tazones y espolvoree con queso parmesano; sirva con bolsillos de pita a un lado. ¡A disfrutar!'}
        ],
        comensales:1,
    },

  ];
  
  export default recipes;
