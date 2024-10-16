import { ContactDetails, Solution, Sector, NumberData } from "../models/data.models"

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
        description: 'Desde la distribución de materiales para todo tipo de rótulos hasta su diseño, producción e instalación.',
    services:  ['letras corpóreas', 'materiales para rótulos como metacrilato, PVC, etc.' ],
    image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/a_90/v1729070693/%E4%BE%A7%E5%86%B2%E5%AD%94%E9%9D%A2%E5%8C%85%E8%BE%B9%E5%87%BA%E5%85%89%E5%AD%97_m02twx.jpg',
},
{  name: 'Digital Signage', 
    icon: "fa-solid fa-chart-line",
    description: 'Fabricamos, distribuimos e instalamos todo tipo de pantallas publicitarias, tanto de LED como LCD.',
    services: ['pantallas LED/LCD', 'cajas de luz', 'pantallas para escaparates', 'pantallas para interior de tiendas', 'pantallas para fachadas' ],
    image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729070958/M-02_zg3nnh.jpg',
},
    { name: 'Diseño corporativo', 
        icon: "fa-solid fa-chart-line",
        description: 'Diseñamos y desarrollamos identidades visuales corporativas únicas y sólidas.',
   services: ['desarrollo de indentidad visual corporativa', 'manuales de identidad visual corporativa' ],
   image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729071867/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20231114221207_bu0plh.jpg',
},
{  name: 'Diseño mobiliario', 
    icon: "fa-solid fa-chart-line",
    description: 'Creamos y distribuimos mostradores, expositores, taburetes, paneles y otros elementos decorativos.',
    services: ['mesas, sillas, etc.', 'expositores empotrados', 'adornoso o elementos decorativos', 'alfombras con figuras personalizadas' ],
    image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729071177/1728887977643_cyudnw.png',
},
{  name: 'Iluminación', 
    icon: "fa-solid fa-chart-line",
    description: 'Productos de alta gama, iluminación personalizada con transformador lifud, etc.',
    services: ['luminarias de alta gama', 'letras luminosas', 'iluminación personalizada de alta calidad con transformador lifud', 'cajas de luz' ],
    image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729071622/WhatsApp_Image_2024-10-16_at_11.38.25_vuj41j.jpg',
},
    { name: 'Aluminio',
        icon: "fa-solid fa-chart-line",
        description: 'Distribuimos perfiles de aluminio, planchas para fachadas, paneles decorativos, etc.',
        services: ['perfiles de aluminio', 'paneles decorativos de lauminio', 'planchas de aluminio para fachadas', 'Productos de acero inoxidable', 
            'cerraduras electrónicas' ],
            image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729071083/1728802462059_pufb1t.png',
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




