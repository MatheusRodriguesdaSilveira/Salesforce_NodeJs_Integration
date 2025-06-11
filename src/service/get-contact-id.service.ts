import { conn } from "../config/salesforce";

class GetContactIdService {
  async execute(id: string) {
    try {
      const result = await conn.sobject("Contact").retrieve(id);
      if (!result) {
        throw new Error(`Contact with ID ${id} not found`);
      }
      return result;
    } catch (error) {
      console.error("Error retrieving contact:", error);
      throw new Error("Failed to retrieve contact");
    }
  }
}

export { GetContactIdService };
