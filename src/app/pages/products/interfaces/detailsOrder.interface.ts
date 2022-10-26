import { Details } from "./order.interface";
export interface DetailOrder {
        details: Details[];
        orderId: number;
    }


/////////////////////////

// export interface DetailOrder {
//     id: number,
//     orderId: number,
//     quantity: number,
//     productName: string,
// }

// Abaixo um exemplo dos dados que tem na tabela de produtos

// "id": 1,
// "orderId": 1,
// "quantity": 10,
// "productName": "Product name"