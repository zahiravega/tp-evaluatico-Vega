import { Productos } from "./productos";

export interface Pedido {
   idPedido:string;
    productos:Productos;
    cantidad:number;
    total:number;
    
}
