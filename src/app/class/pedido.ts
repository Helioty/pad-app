export class Pedido {
    numero: number;
    status: string;
    diaPedidoAberto: string;
    dataEntrega: string;
    endeEntrega: string;
    itens: PedidoIt[];
}

export class PedidoIt {
    produto: string;
    qtd: number;
}
