import { createOpenAPI } from "fumadocs-openapi/server";

export const openapi = createOpenAPI({
  // biome-ignore lint/style/noNonNullAssertion: false
  input: [process.env.NEXT_OPENAPI_JSON_URL!],
});
