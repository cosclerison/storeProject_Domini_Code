export interface Details {
    productId: number;
    productName: string;
    quantity: number;
}

export interface Order {
    name: string,
    shippingAddress: string,
    city: string,
    date: string,
    pickup: boolean
    id: number,
}

// export interface DetailOrder {
//     details: Details[];
//     orderId: number;
// }


///////////////////////////////////////


// export interface Order {
//     id: number,
//     name: string,
//     date: string,
//     shippingAddress: string,
//     city: string,
//     pickup: boolean
// }

// Abaixo um exemplo dos dados que tem na tabela de produtos

// "id": 1,
// "name": "Dominicode",
// "date": "01/12/1995",
// "shippingAddress": "Av. de la Granvia de Hospitalet, 115",
// "city": "Barcelona",
// "pickup": true