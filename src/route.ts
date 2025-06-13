import { FastifyInstance } from "fastify";
import { GetContactsController } from "./controller/get-contacts.controller";
import { UpdateContactController } from "./controller/update-contact.controller";
import { GetContactIdController } from "./controller/get-contact-id.controller";
import { CreateContactController } from "./controller/create-contact.controller";

export async function appRoutes(route: FastifyInstance) {
  route.post("/contact", new CreateContactController().handle);
  route.get("/contacts", new GetContactsController().handle);
  route.get("/contacts/:id", new GetContactIdController().handle);
  route.put("/contact/:id", new UpdateContactController().handle);
}
