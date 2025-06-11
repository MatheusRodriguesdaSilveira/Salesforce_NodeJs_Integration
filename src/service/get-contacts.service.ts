import { conn } from "../config/salesforce";

class GetContactsService {
  async execute() {
    const result = await conn.query<{
      Id: string;
      FirstName: string;
      LastName: string;
      Email: string;
    }>("SELECT Id, FirstName, LastName, Email FROM Contact LIMIT 10");

    return result.records.map((contact: any) => ({
      id: contact.Id,
      name: `${contact.FirstName} ${contact.LastName}`,
      email: contact.Email,
    }));
  }
}

export { GetContactsService };
