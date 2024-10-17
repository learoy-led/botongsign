import { ContactDetails, Solution, Sector, NumberData, Customer, IdentitySigns, IconElement } from "../models/data.models"

export const contactDetails: ContactDetails = { 
    address1: 'Calle Valdeón 24',
    address2: '28947 Fuenlabrada, Madrid',
    phone1:'916 158 981',
    phone2:'620 411 079',
    email: 'contacto@botongsign.com',
}

export const solutions: Solution[] = [
    {  name: 'Rotulación', 
        description: 'Desde la distribución de materiales para todo tipo de rótulos hasta su diseño, producción e instalación.',
    services:  ['letras corpóreas', 'materiales para rótulos como metacrilato, PVC, etc.' ],
    image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729175406/rotulacion-profeisonal-botong-sign_qjtkki.webp',
},
{  name: 'Digital Signage', 
    description: 'Fabricamos, distribuimos e instalamos todo tipo de pantallas publicitarias, tanto de LED como LCD.',
    services: ['pantallas LED/LCD', 'cajas de luz', 'pantallas para escaparates', 'pantallas para interior de tiendas', 'pantallas para fachadas' ],
    image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729175793/digital-signage-botong-sign_tk4rzi.webp',
},
    { name: 'Diseño corporativo', 
        description: 'Diseñamos y desarrollamos identidades visuales corporativas únicas y sólidas.',
   services: ['desarrollo de indentidad visual corporativa', 'manuales de identidad visual corporativa' ],
   image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729176232/dise%C3%B1o-corporativo-botong-sign_onbmju.webp',
},
{  name: 'Diseño mobiliario', 
    description: 'Creamos y distribuimos mostradores, expositores, taburetes, paneles y otros elementos decorativos.',
    services: ['mesas, sillas, etc.', 'expositores empotrados', 'adornoso o elementos decorativos', 'alfombras con figuras personalizadas' ],
    image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729175406/mobiliario-tiendas-botong-sign_rhikva.webp',
},
{  name: 'Iluminación', 
    description: 'Productos de alta gama, iluminación personalizada con transformador lifud, etc.',
    services: ['luminarias de alta gama', 'letras luminosas', 'iluminación personalizada de alta calidad con transformador lifud', 'cajas de luz' ],
    image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729175406/iluminacion-comercial-botong-sign_mcfeut.webp',
},
    { name: 'Aluminio',
        description: 'Distribuimos perfiles de aluminio, planchas para fachadas, paneles decorativos, etc.',
        services: ['perfiles de aluminio', 'paneles decorativos de lauminio', 'planchas de aluminio para fachadas', 'Productos de acero inoxidable', 
            'cerraduras electrónicas' ],
            image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729175406/aluminio-calado-para-tiendas-botong-sign_dy9vic.webp',
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

export const customers: Customer[] = [
    {  name: 'pekin-university', logo: 'logos/img46.jpg'},
    {  name: 'pumc-hospital', logo: 'logos/img47.jpg'},
    {  name: 'peninsula-hotel', logo: 'logos/img55.jpg'},
    {  name: 'toyota', logo: 'logos/img63.jpg'},
    {  name: 'volkswagen', logo: 'logos/img64.jpg'},
    {  name: 'bmw', logo: 'logos/img65.jpg'},
    {  name: 'cadillac', logo: 'logos/img66.jpg'},  
    {  name: 'nayuki', logo: '/logos/img67.jpg'},
    {  name: 'heytea', logo: 'logos/img68.jpg'},
    {  name: 'chj-jewellery', logo: 'logos/img69.jpg'},
    {  name: 'chow tai fook', logo: 'logos/frame_49.webp'},
    {  name: 'tesla', logo: 'logos/frame_50.webp'},
    {  name: 'dior', logo: 'logos/frame_51.webp'},
    {  name: 'huawei', logo: 'logos/frame_52.webp'},
    {  name: 'apple', logo: 'logos/frame_53.webp'},
]

export const identitySigns: IdentitySigns[] = [

    {  name: 'Misión', 
        description: 'Nuestra misión es dotar a las marcas de personalidad y hacerla visible.',
    image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/a_90/v1729070693/%E4%BE%A7%E5%86%B2%E5%AD%94%E9%9D%A2%E5%8C%85%E8%BE%B9%E5%87%BA%E5%85%89%E5%AD%97_m02twx.jpg',
},
{  name: 'Visión', 
    description: 'Nuestra visión es escalar la identidad y notoriedad de pequeñas y grandes marcas.',
image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/a_90/v1729070693/%E4%BE%A7%E5%86%B2%E5%AD%94%E9%9D%A2%E5%8C%85%E8%BE%B9%E5%87%BA%E5%85%89%E5%AD%97_m02twx.jpg',
},
{  name: 'Valores', 
    description: 'Nuestros valores son la creatividad, la innovación y la excelencia.',
image: 'https://res.cloudinary.com/dxuseyfxa/image/upload/a_90/v1729070693/%E4%BE%A7%E5%86%B2%E5%AD%94%E9%9D%A2%E5%8C%85%E8%BE%B9%E5%87%BA%E5%85%89%E5%AD%97_m02twx.jpg',
}
]

export const howElements: IconElement[] = [
    {icon: "fa-solid fa-check-double",
name: "Visbilidad",
description: "Potenciamos la notoriedad de tu negocio a través de una sólidad identidad visual.",
},
{  icon: "fa-solid fa-star",
  name: "Excelencia",
  description: "Comprometidos con los clientes más exigentes, elevamos la calidad en cada detalle.",
  },
  {    icon: "fa-solid fa-chart-line",
    name: "Resultados",
    description: "Garantizamos logros tangibles en la mejora de las ventas y la experiencia del cliente.",
    }
]