export interface TipoUsuarioDto {
  id: number;
}

export interface EnderecoDto {
  id?: number;
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

export interface ListClienteDto {
  skip?: number;
  take?: number;
  search?: string;
}

export interface FindClienteDto {
  id: number;
}

export interface DestroyClienteDto {
  id: number;
}

export interface UpdateClienteDto {
  id: number;
  pessoa: {
    cpf: string;
    nome: string;
    dataNasc?: string;
    telefone: string;
    celular?: string;
    email: string;
    senha: string;
    tipoUsuario: TipoUsuarioDto;
    endereco: EnderecoDto;
  };
}
