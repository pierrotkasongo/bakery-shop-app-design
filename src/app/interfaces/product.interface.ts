import { Variety } from "./variety.interface";

export interface Product {
    id: number;
    name: string;
    description: string;
    rating: number;
    category_id: number;
    image: string;
    saller_id: number;
    default_price: number | null;
    varieties : Variety [];
}
