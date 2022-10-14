export interface TipoUsuarioDto {
  id: number;
}

export interface EnderecoDto {
  cep: string;
  rua: string;
  estado: string;
  cidade: string;
  bairro: string;
  num: number;
  complemento?: string;
}

export interface CreateClienteDto {
  pessoa: {
    cpf: string;
    nome: string;
    dataNasc?: Date;
    telefone: string;
    celular?: string;
    email: string;
    senha: string;
    tipoUsuario: TipoUsuarioDto;
    endereco: EnderecoDto;
  };
}
