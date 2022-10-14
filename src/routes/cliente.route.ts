import { Router } from 'express';
import { DataSource } from 'typeorm';

import { connToDS } from '../database/connection';
import { Cliente } from '../entity/cliente';
import { ClienteController } from '../modules/cliente/cliente.controller';
import { ClienteService } from '../modules/cliente/cliente.service';

export const clienteRouter = Router();

clienteRouter.post("/", async (req, res) => {
  const dataSourceConn: DataSource = await connToDS();
  const clienteRepo = dataSourceConn.getRepository(Cliente);

  const clienteService = new ClienteService(clienteRepo);
  const clienteController = new ClienteController(clienteService);

  return clienteController.create(req, res);
});