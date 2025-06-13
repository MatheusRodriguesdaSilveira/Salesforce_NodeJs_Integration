import { FastifyRequest, FastifyReply } from "fastify";
import { CreateContactService } from "../service/create-contact.service";
import { contactCreateSchema } from "../config/schema";

class CreateContactController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    try {
      const bodySchema = contactCreateSchema.parse({ body: req.body });
      const createContactService = new CreateContactService();

      const result = await createContactService.execute(bodySchema.body);

      return res.send(result);
    } catch (error) {
      console.error("Error in create a contact:", error);
      return res.status(400).send({
        error: error instanceof Error ? error.message : "Invalid data",
      });
    }
  }
}

export { CreateContactController };
