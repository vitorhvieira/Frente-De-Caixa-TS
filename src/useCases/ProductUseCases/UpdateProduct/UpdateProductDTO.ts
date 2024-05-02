export interface IUpdateProductDTO {
  descricao?: string;
  valor?: number;
  categoria_id?: number;
  quantidade_estoque?: number;
  produto_img?: string | null;
}
