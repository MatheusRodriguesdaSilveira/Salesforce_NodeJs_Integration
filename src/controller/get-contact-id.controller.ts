import { FastifyRequest, FastifyReply } from "fastify";
import { params } from "../config/schema";
import { GetContactIdService } from "../service/get-contact-id.service";

class GetContactIdController {
  handle = async (req: FastifyRequest, res: FastifyReply) => {
    const bodySchema = params;
    const { id } = bodySchema.parse(req.params);

    const getContactIdService = new GetContactIdService();

    try {
      const result = await getContactIdService.execute(id);
      return res.send(result);
    } catch (error) {
      console.error("Error catch contact:", error);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  };
}

export { GetContactIdController };
