import { z } from "zod";

export const params = z.object({
  id: z.string(),
});

export const contactUpdateSchema = z.object({
  id: z.string().min(1), // ID obrigatório via URL
  body: z
    .object({
      FirstName: z.string().optional(),
      LastName: z.string().optional(),
      Salutation: z.string().optional(),
      MailingStreet: z.string().optional(),
      MailingCity: z.string().optional(),
      MailingState: z.string().optional(),
      MailingPostalCode: z.string().optional(),
      MailingCountry: z.string().optional(),
      Phone: z.string().optional(),
      MobilePhone: z.string().optional(),
      Email: z.string().email().optional(),
      Title: z.string().optional(),
      Department: z.string().optional(),
      Level__c: z.string().optional(),
      Languages__c: z.string().optional(),
      Prequalified__c: z.boolean().optional(),
      Loan_Amount__c: z.number().optional(),
    })
    .strict(),
});
