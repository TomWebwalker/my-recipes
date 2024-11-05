import { defineConfig } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();

loadEnvConfig(projectDir);

export default defineConfig({
  schema: "./db/schema/*",
  dialect: "mysql",
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: +process.env.DB_PORT!,
    user: process.env.DB_USER!,
    database: process.env.DB_NAME!,
    password: process.env.DB_PASS!,
  },
});
