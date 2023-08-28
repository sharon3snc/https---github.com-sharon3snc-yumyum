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
    ]
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
    ]
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
        ]
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
        ]
    },
    {
        id: 5,
        name: 'Atún al pesto de tomate y albahaca se derrite con ensalada verde mixta italiana',
        image: require('./images/ensalada5.jpeg'),
        time: '30 minutos',
        cal: '400 kcal',
        menu: 'Bajo en calorías',
        restriccion: 'Sin huevo',
        ingredients: [
            {name:'Lechuga', quantity: '100 gr'}, 
            {name:'Pollo', quantity: '200 gr'}],
        instructions: [{step: 1, describe:'Cortar el pollo en trozos de 2cm'}, {step: 2, describe:'Colocar la lechuga en el plato'} ]
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
            {name:'Lechuga', quantity: '100 gr'}, 
            {name:'Pollo', quantity: '200 gr'}],
        instructions: [{step: 1, describe:'Cortar el pollo en trozos de 2cm'}, {step: 2, describe:'Colocar la lechuga en el plato'} ]
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
            {name:'Lechuga', quantity: '100 gr'}, 
            {name:'Pollo', quantity: '200 gr'}],
        instructions: [{step: 1, describe:'Cortar el pollo en trozos de 2cm'}, {step: 2, describe:'Colocar la lechuga en el plato'} ]
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
            {name:'Lechuga', quantity: '100 gr'}, 
            {name:'Pollo', quantity: '200 gr'}],
        instructions: [{step: 1, describe:'Cortar el pollo en trozos de 2cm'}, {step: 2, describe:'Colocar la lechuga en el plato'} ]
    },

  ];
  
  export default recipes;
