import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  _db?: ReturnType<typeof drizzle<typeof schema>>;
  _sql?: ReturnType<typeof postgres>;
};

function createClient() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Run `vercel env pull .env.local` or set it in your environment.",
    );
  }
  const client = postgres(url, {
    prepare: false,
    max: 1,
  });
  return { client, db: drizzle(client, { schema }) };
}

export function getDb() {
  if (!globalForDb._db || !globalForDb._sql) {
    const { client, db } = createClient();
    globalForDb._sql = client;
    globalForDb._db = db;
  }
  return globalForDb._db;
}

export { schema };
