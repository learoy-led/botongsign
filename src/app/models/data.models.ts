export interface ContactDetails { 
    address1: string,
    address2: string,
    phone1: string,
    phone2: string,
    email: string,
}

export interface Solution { 
    name: string,
    description: string,
    text: string[],
    // services: string[],
    image: string,
    icon: string
}

export interface Sector { 
    name: string,
    image: string,
    text: string[],
    icon: string
}

export interface HowElement { 
    icon: string,
    name: string, 
    description?: string
}

export interface NumberData { 
    qty: string,
    description: string
}

export interface Customer { 
    name: string,
    logo: string
}

export interface IdentitySigns { 
    name: string,
    description: string,
    image: string
}

export interface Honor { 
    name: string,
    image: string
}


