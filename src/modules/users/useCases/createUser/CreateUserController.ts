import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { email, name } = request.body;

      const user = this.createUserUseCase.execute({ email, name });

      return response.status(201).send(user);
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
  }
}

export { CreateUserController };
