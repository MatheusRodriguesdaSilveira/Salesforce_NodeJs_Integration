import { FastifyInstance } from "fastify";
import { GetContactsController } from "./controller/get-contacts.controller";
import { UpdateContactController } from "./controller/update-contact.controller";
import { GetContactIdController } from "./controller/get-contact-id.controller";

export async function appRoutes(fastify: FastifyInstance) {
  fastify.get("/contacts", new GetContactsController().handle);
  fastify.get("/contacts/:id", new GetContactIdController().handle);
  fastify.put("/contacts/:id", new UpdateContactController().handle);
}
