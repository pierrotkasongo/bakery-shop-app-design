import { Product } from "../interfaces/product.interface";

export const products: Product [] = [
    {id: 1, name: 'Epargne Populaire', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni, quia dolorum earum aspernatur nam inventore", rating: 4.5, image: 'assets/categories/products/epargne-1.jpg',
        category_id: 1, saller_id: 1, default_price: 20, cut_price: 500, type: 'veg', varieties: [{id: 1, unit: 'kg', quantity: 0.5, price:20, is_default: true} ]
    },
    {id: 2, name: 'Livret A', description: "Deleniti voluptatum tempora sit excepturi laudantium voluptates corporis", rating: 20000, image: 'assets/categories/products/epargne-2.png', 
        category_id: 1, saller_id: 1, default_price: 10, cut_price: 350, type: 'veg', varieties: [{id: 5, unit: 'kg', quantity: 15, price:11, is_default: false} ] },
    {id: 3, name: 'Assurance Vie', description: "Molestias. Sequi expedita omnis minus aperiam.", rating: 1500, image: 'assets/categories/products/epargne-3.png', 
        category_id: 2, saller_id: 1, default_price: 5, cut_price: 420, type: 'non-veg', varieties: [{id: 1, unit: 'kg', quantity: 0.5, price: 100, is_default: true } ]}
]