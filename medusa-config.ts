import { defineConfig, loadEnv } from "@medusajs/framework/utils";
import { resolve } from "path";

const brandModule = resolve("./plugins/medusa-test-plugin/dist/modules/brand")

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  plugins: [
    {
      resolve: "./plugins/medusa-test-plugin",
      options: {},
    },
  ],
  modules: [
    {
      resolve: brandModule,
      options: {},
    },
  ],
});
