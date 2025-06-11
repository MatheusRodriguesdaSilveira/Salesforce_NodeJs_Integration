import "dotenv/config";
import Fastify from "fastify";
import { loginToSalesforce } from "./config/salesforce";
import { appRoutes } from "./route";

const fastify = Fastify({ logger: false });

fastify.register(appRoutes);

const PORT = 3333;

const start = async () => {
  try {
    await loginToSalesforce();
    await fastify.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`server running on http://localhost:${PORT} 🚀`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
