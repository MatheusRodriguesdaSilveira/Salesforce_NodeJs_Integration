import { Contact } from "../@types/contact";
import { conn } from "../config/salesforce";

class CreateContactService {
  async execute(data: Partial<Contact>) {
    const contactData = { ...data };

    if (!data) {
      throw new Error("Contact data is required");
    }

    return await conn.sobject("Contact").create(contactData as Contact);
  }
}

export { CreateContactService };
