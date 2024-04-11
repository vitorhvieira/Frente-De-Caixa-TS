export interface ICreateClientDTO {
  nome: string;
  email: string;
  cpf: string;
  cep?: string;
  rua?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
}
