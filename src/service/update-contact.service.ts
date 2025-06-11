import { conn } from "../config/salesforce";
import { Contact } from "../@types/contact";

class UpdateContactService {
  async execute(id: string, data: Partial<Contact>) {
    const contactToUpdate = { Id: id, ...data };

    // Remove campos undefined
    const cleanData: Partial<Contact> = Object.fromEntries(
      Object.entries(contactToUpdate).filter(([_, v]) => v !== undefined)
    );

    if (!cleanData.Id) {
      throw new Error("ID is required to update a contact.");
    }

    return await conn.sobject("Contact").update(cleanData as Contact);
  }
}

export { UpdateContactService };
