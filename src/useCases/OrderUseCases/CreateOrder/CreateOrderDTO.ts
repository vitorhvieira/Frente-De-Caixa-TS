export interface IPedido_produtoDTO {
  produto_id: number;
  quantidade_produto: number;
}

export interface ICreateOrderDTO {
  cliente_id: number;
  observacao: string;
  pedido_produtos: IPedido_produtoDTO[];
}
