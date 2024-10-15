import { ContactDetails, Solution, Sector, NumberData } from "../models/models"

export const contactDetails: ContactDetails = { 
    address1: 'Calle Valdeón 24',
    address2: '28947 Fuenlabrada, Madrid',
    phone1:'916 158 981',
    phone2:'620 411 079',
    email: 'contacto@botongsign.com',
}

export const solutions: Solution[] = [
    {  name: 'Rotulación', 
        icon: "fa-solid fa-chart-line",
        description: 'xxx.',
    services:  ['letras corpóreas', 'materiales para rótulos como metacrilato, PVC, etc.' ]
},
{  name: 'Digital Signage', 
    icon: "fa-solid fa-chart-line",
    description: 'xxx.',
    services: ['pantallas LED/LCD', 'cajas de luz', 'pantallas para escaparates', 'pantallas para interior de tiendas', 'pantallas para fachadas' ]
},
    { name: 'Diseño corporativo', 
        icon: "fa-solid fa-chart-line",
        description: 'xxx.',
   services: ['desarrollo de indentidad visual corporativa', 'manuales de identidad visual corporativa' ]
},
{  name: 'Diseño mobiliario', 
    icon: "fa-solid fa-chart-line",
    description: 'xxx.',
    services: ['mesas, sillas, etc.', 'expositores empotrados', 'adornoso o elementos decorativos', 'alfombras con figuras personalizadas' ]
},
{  name: 'Iluminación', 
    icon: "fa-solid fa-chart-line",
    description: 'xxx.',
    services: ['luminarias de alta gama', 'letras luminosas', 'iluminación personalizada de alta calidad con transformador lifud', 'cajas de luz' ]
},
    { name: 'Aluminio',
        icon: "fa-solid fa-chart-line",
        description: 'xxx.',
        services: ['perfiles de aluminio', 'paneles decorativos de lauminio', 'planchas de aluminio para fachadas', 'Productos de acero inoxidable', 
            'cerraduras electrónicas' ]
}
]

export const sectors: Sector[] = [
    {  name: 'joyerías', images: []    },
    {  name: 'restaurantes', images: []    },
    {  name: 'concesionarios', images: []    }

]

export const numbers: NumberData[] = [
{  qty: '+20', description: 'años experiencia'},
{  qty: '40.000', description: 'm² fábrica'},
{  qty: '300', description: 'trabajadores'}
]




