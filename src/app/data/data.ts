import {
  ContactDetails,
  Solution,
  Sector,
  NumberData,
  Customer,
  IdentitySigns,
  Honor,
  HowElement
} from '../models/data.models';

export const contactDetails: ContactDetails = {
  address1: 'Calle Valdeón 24',
  address2: '28947 Fuenlabrada, Madrid',
  phone1: '916 158 981',
  phone2: '620 411 079',
  email: 'contacto@botongsign.com'
};

export const solutions: Solution[] = [
  {
    name: 'Rotulación',
    description:
      'Desde la distribución de materiales para todo tipo de rótulos hasta su diseño, producción e instalación.',
    text: [
      'Además de diseñar, producir e instalar múltiples tipos de rótulos, distribuimos los materiales necesarios para ello.',
      'Letras corpóreas, carteles luminosos, materiales como metacrilato, PVC, etc. Tanto en diseños estándar como personalizados.',
      'Hay muchas opciones de instalación tanto en interior como exterior, ya sea sobre pared o fachada o en suspensión.'
    ],
    // services:  ['letras corpóreas', 'materiales para rótulos como metacrilato, PVC, etc.' ],
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729175406/rotulacion-profeisonal-botong-sign_qjtkki.webp',
    icon: 'fa-solid fa-rupee-sign'
  },
  {
    name: 'Digital Signage',
    description:
      'Fabricamos, distribuimos e instalamos todo tipo de pantallas publicitarias de LED y LCD así como cajas de luz, tanto para interior como para fachadas y escaparates.',
    text: [
      'Disponemos de una vasta oferta de pantallas para publicidad en punto de venta compuesta por los modelos más novedosos del mercado.',
      'Pantallas tanto para interior como para exterior que cubren diferentes necesidades según cada caso: alto brillo, rápido refresco, calidad FHD, etc.',
      'Y además, una serie de tótems de autoservicio y otros dispositivos para mejorar la experiencia de los clientes.'
    ],
    // services: ['pantallas LED/LCD', 'cajas de luz', 'pantallas para escaparates', 'pantallas para interior de tiendas', 'pantallas para fachadas' ],
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729175793/digital-signage-botong-sign_tk4rzi.webp',
    icon: 'fa-solid fa-tachograph-digital'
  },
  {
    name: 'Diseño corporativo',
    description: 'Diseñamos y desarrollamos identidades visuales corporativas únicas y sólidas.',
    text: [
      'Si necesitas comenzar el proceso desde los cimientos, diseñaremos y desarrollaremos una identidad visual corporativa coherente con tus productos o servicios y tus objetivos.',
      'Desde el logotipo hasta el resto de elementos, definiremos una imagen única, sólida y capaz de transmitir los valores de la marca.',
      'Dota a tu producto de personalidad en consonancia con el resto de elementos de la tienda.'
    ],
    //    services: ['desarrollo de indentidad visual corporativa', 'manuales de identidad visual corporativa' ],
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729241560/dise%C3%B1o-identidad-visual-corporativa-botong-sign_xhqdyd.webp',
    icon: 'fa-solid fa-palette'
  },
  {
    name: 'Mobiliario y decoración',
    description:
      'Creamos y distribuimos mostradores, expositores, taburetes, paneles y otros elementos decorativos.',
    text: [
      'Creamos y distribuimos mostradores, asientos, expositores y elementos decorativos para transformar espacios.',
      'Revestimiento de paredes, expositores empotrados, paneles decorativos o separadores de ambientes, alfombras personalizadas, etc.',
      'Encuentra la combinación perfecto de materiales, texturas y colores para maximizar funcionalidad y elegancia.'
    ],
    // services: ['mostradores, asientos, etc.', 'expositores empotrados', 'adornoso o elementos decorativos', 'alfombras con figuras personalizadas', 'revestimiento de paredes' ],
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729175406/mobiliario-tiendas-botong-sign_rhikva.webp',
    icon: 'fa-solid fa-couch'
  },
  {
    name: 'Iluminación',
    description: 'Productos de alta gama, iluminación personalizada con transformador lifud, etc.',
    text: [
      'La iluminación es uno de los puntos más importantes y olvidados a la hora de diseñar espacios comerciales.',
      'Tanto el aspecto de las lámparas y focos como la luz que irradian influye directamente en el amnbiente y la experiencia del cliente.',
      'Elige iluminación de alta gama y personalizada para tus establecimientos.'
    ],
    // services: ['luminarias de alta gama', 'letras luminosas', 'iluminación personalizada de alta calidad con transformador lifud', 'cajas de luz' ],
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729175406/iluminacion-comercial-botong-sign_mcfeut.webp',
    icon: 'fa-solid fa-lightbulb'
  },
  {
    name: 'Aluminio',
    description:
      'Distribuimos perfiles de aluminio, planchas para fachadas, paneles decorativos, etc.',
    text: [
      'Trabajamos el aluminio en todas sus facetas, desde perfiles para ventanas o mobiliario hasta paneles calados decorativos o separadores de ambientes.',
      'Gracias a su alta resistencia a la corrosión, el aluminio es perfecto para proyectos tanto interiores como exteriores, garantizando durabilidad a largo plazo.',
      'Versátil y ligero, el aluminio es idóneo para soluciones tanto estructurales como decorativas, aportando modernidad y resistencia a cualquier espacio.'
    ],
    // services: ['perfiles de aluminio', 'paneles decorativos de lauminio', 'planchas de aluminio para fachadas' ],
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729175406/aluminio-calado-para-tiendas-botong-sign_dy9vic.webp',
    icon: 'fa-solid fa-cubes'
  }
];

export const sectors: Sector[] = [
  {
    name: 'Restaurantes',
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729257345/dise%C3%B1o-y-construccion-restaurantes-botong-sign_pdhuia.webp',
    text: [
      'En Botong Sign contamos con amplia experiencia en el diseño y producción de mobiliario y dispositivos inteligentes para la hostelería.',
      'Además de diseñar y decorar espacios, ofrecemos las soluciones más novedosas para mejorar la experiencia de los clientes: kioscos y tótems de autoservicio, menús digitales, terminales con doble pantalla y otros.',
      'Consulta todas las posibilidades.'
    ],
    icon: 'fa-solid fa-utensils'
  },
  {
    name: 'Joyerías',
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729257345/dise%C3%B1o-y-construccion-joyerias-botong-sign_q7kdfk.webp',
    text: [
      'Además de los materiales comunes a otro tipo de establecimientos, Botong Sign destaca en el sector joyero por su gama de cerraduras electrónicas inteligentes.',
      'Gracias a la tecnología más vanzada, garantizarás máxima seguridad sin necesidad de llaves y con total control.',
      'Estos sistemas permiten abrir cajones y vitrinas en segundos con NFC, Bluetooth, huella dactilar y otros métodos seguros, acceder al registro de aperturas y detectar puertas cerradas de forma incorrecta o por largos períodos.'
    ],
    icon: 'fa-solid fa-gem'
  },
  {
    name: 'Concesionarios',
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729257344/dise%C3%B1o-y-construccion-concesionario-botong-sign_warbaq.webp',
    text: [
      'Otro de los sectores que más demandan los servicios de Botong Sign es el de la automoción.',
      'Contamos con soluciones para grandes espacios.'
    ],
    icon: 'fa-solid fa-car'
  }
];

export const numbers: NumberData[] = [
  { qty: '+20', description: 'años experiencia' },
  { qty: '40.000', description: 'm² fábrica' },
  { qty: '300', description: 'trabajadores' }
];

export const customers: Customer[] = [
  { name: 'pekin-university', logo: 'logos/img46.jpg' },
  { name: 'pumc-hospital', logo: 'logos/img47.jpg' },
  { name: 'peninsula-hotel', logo: 'logos/img55.jpg' },
  { name: 'toyota', logo: 'logos/img63.jpg' },
  { name: 'volkswagen', logo: 'logos/img64.jpg' },
  { name: 'bmw', logo: 'logos/img65.jpg' },
  { name: 'cadillac', logo: 'logos/img66.jpg' },
  { name: 'nayuki', logo: '/logos/img67.jpg' },
  { name: 'heytea', logo: 'logos/img68.jpg' },
  { name: 'chj-jewellery', logo: 'logos/img69.jpg' },
  { name: 'chow tai fook', logo: 'logos/frame_49.webp' },
  { name: 'tesla', logo: 'logos/frame_50.webp' },
  { name: 'dior', logo: 'logos/frame_51.webp' },
  { name: 'huawei', logo: 'logos/frame_52.webp' },
  { name: 'apple', logo: 'logos/frame_53.webp' }
];

export const identitySigns: IdentitySigns[] = [
  {
    name: 'Misión',
    description: 'Nuestra misión es dotar a las marcas de personalidad y hacerla visible.',
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729241560/dise%C3%B1o-logo-rotulacion-botong-sign_vc2qt6.webp'
  },
  {
    name: 'Visión',
    description:
      'Nuestra visión es escalar la identidad y notoriedad de pequeñas y grandes marcas.',
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729241545/mision-botong-sign-dise%C3%B1o-marcas_i5pwpo.webp'
  },
  {
    name: 'Valores',
    description: 'Nuestros valores son la creatividad, la innovación y la excelencia.',
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729241560/innovacion-dise%C3%B1o-tiendas-botong-sign_adnont.webp'
  }
];

export const howElements: HowElement[] = [
  {
    icon: 'fa-solid fa-check-double',
    name: 'Visbilidad',
    description: 'Potenciamos la notoriedad de tu negocio a través de una sólidad identidad visual.'
  },
  {
    icon: 'fa-solid fa-star',
    name: 'Excelencia',
    description:
      'Comprometidos con los clientes más exigentes, elevamos la calidad en cada detalle.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    name: 'Resultados',
    description:
      'Garantizamos logros tangibles en la mejora de las ventas y la experiencia del cliente.'
  }
];

export const honors: Honor[] = [
  {
    name: 'ISO',
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729243028/iso_botong_sign_jbq8vm.webp'
  },
  {
    name: 'CEE',
    image:
      'https://res.cloudinary.com/dxuseyfxa/image/upload/v1729243028/ce_botong_sign_elgf4q.webp'
  }
];
