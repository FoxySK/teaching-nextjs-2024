import { CamelCasePlugin, Kysely } from "kysely";
import { dialect } from "../lib/db";
import { DB } from "../lib/db-types";

export function createDb() {
  const db = new Kysely<DB>({
    dialect: dialect,
    plugins: [new CamelCasePlugin()],
  });

  return db;
}
