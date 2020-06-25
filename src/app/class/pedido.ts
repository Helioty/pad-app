export class Pedido {
    numero: number;
    status: string;
    dataEntrega: string;
    itens: PedidoIt[];
}

export class PedidoIt {
    produto: string;
    qtd: number;
}
