import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateContactService } from "../service/update-contact.service";
import { contactUpdateSchema, params } from "../config/schema";

class UpdateContactController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    try {
      const bodySchema = params;
      const { id } = bodySchema.parse(req.params);
      const parsed = contactUpdateSchema.parse({ id, body: req.body });

      const updateContactService = new UpdateContactService();
      const result = await updateContactService.execute(parsed.id, parsed.body);

      return res.send(result);
    } catch (error) {
      console.error("Error updating contact:", error);
      return res.status(400).send({
        error: error instanceof Error ? error.message : "Invalid data",
      });
    }
  }
}

export { UpdateContactController };
