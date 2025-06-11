import jsforce from "jsforce";
import dotenv from "dotenv";

dotenv.config();

const conn = new jsforce.Connection({
  loginUrl: process.env.SF_LOGIN_URL,
});

const loginToSalesforce = async () => {
  try {
    await conn.login(process.env.SF_USERNAME!, process.env.SF_PASSWORD!);
    console.log("✅ Connected to Salesforce!");
  } catch (error) {
    console.error("❌ Failed to connect to Salesforce:", error);
  }
};

export { conn, loginToSalesforce };
