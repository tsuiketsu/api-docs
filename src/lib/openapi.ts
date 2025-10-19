import { createOpenAPI } from "fumadocs-openapi/server";

export const openapi = createOpenAPI({
  // input: [process.env.OPENAPI_JSON_URL!],
  input: ["http://localhost:8000/openapi.json"],
  // input: ["./openapi.json"],
});
