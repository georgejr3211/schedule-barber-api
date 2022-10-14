import { Request, Response } from 'express';

import { ClienteService } from './cliente.service';

export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  async create(req: Request, res: Response) {
    try {
      const cliente = await this.clienteService.create(req.body);
      res.status(201).json(cliente);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
