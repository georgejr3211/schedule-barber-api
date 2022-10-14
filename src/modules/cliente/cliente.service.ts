import { Repository } from "typeorm";
import { Cliente } from "../../entity/cliente";
import { CreateClienteDto } from "./cliente.dto";

export class ClienteService {
  constructor(private readonly repo: Repository<Cliente>) {}

  async create(cliente: CreateClienteDto) {
    try {
      console.log('cliente', cliente);
      const newCliente = this.repo.create({
        pessoa: {
          nome: cliente.pessoa.nome,
          cpf: cliente.pessoa.cpf,
          email: cliente.pessoa.email,
          telefone: cliente.pessoa.telefone,
          senha: cliente.pessoa.senha,
          tipoUsuario: {
            id: cliente.pessoa.tipoUsuario.id,
          },
          endereco: {
            cep: cliente.pessoa.endereco.cep,
            rua: cliente.pessoa.endereco.rua,
            num: cliente.pessoa.endereco.num,
            complemento: cliente.pessoa.endereco.complemento,
            bairro: cliente.pessoa.endereco.bairro,
            cidade: cliente.pessoa.endereco.cidade,
            estado: cliente.pessoa.endereco.estado,
          },
        },
      });

      return await this.repo.save(newCliente);
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  }
}
