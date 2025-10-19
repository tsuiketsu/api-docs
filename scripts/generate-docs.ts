import { generateFiles } from "fumadocs-openapi";
import { rimraf } from "rimraf";
import { openapi } from "@/lib/openapi";

const out = "./content/docs/(api)";

async function generate() {
  await rimraf(out, {
    filter(v) {
      return !v.endsWith("meta.json");
    },
  });

  await generateFiles({
    input: openapi,
    output: out,
    groupBy: "tag",
  });
}

void generate();
