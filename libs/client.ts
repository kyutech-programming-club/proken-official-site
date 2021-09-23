import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "proken-officcial-site",
  apiKey: process.env.API_KEY,
});
