export interface ContactDetails { 
    address1: string,
    address2: string,
    phone1: string,
    phone2: string,
    email: string,
}

export interface Solution { 
    name: string,
    icon: string,
    description: string,
    services: string[]
}

export interface Sector { 
    name: string
    images: string[]
}

export interface IconElement { 
    icon: string,
    name: string, 
    description: string
}

export interface NumberData { 
    qty: string,
    description: string
}



