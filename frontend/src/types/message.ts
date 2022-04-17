export type Message = {
    msg: string;
    user_email: string;
}

export type MessagePage ={
    content: Message[];
    lat: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}