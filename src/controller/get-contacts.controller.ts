import { FastifyRequest, FastifyReply } from "fastify";
import { GetContactsService } from "../service/get-contacts.service";

class GetContactsController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    try {
      const getContacts = new GetContactsService();
      const contacts = await getContacts.execute();
      return res.send(contacts);
    } catch (err) {
      console.error("Erro:", err);
      res.status(500).send("Erro ao conectar no Salesforce");
    }
  }
}

export { GetContactsController };
