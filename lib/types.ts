export type NavMenuType = {
    title: string;
    link: string;
};

export type UserType = {
    id: string;
    phone: string;
    email: string;
    name: string;
    img: any;
    purchases: string;
    wishlist: string;
    discounts: string;
    role: string;
    addresses: AddressType[];
    components: ComponentType;
};

export type AddressType = {
    street: string;
    city: string;
    state: string;
    zip: string;
};

export type ComponentType = {
    id: string;
    title: string;
    content: string;
    author: string;
    img?: any;
    nav_page?: string;
    is_active?: boolean;
    background_color?: string;
    text_color?: string;
    link?: string;
    type?: string;
    tags?: string;
};
