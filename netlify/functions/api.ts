import { getDatabase } from "@netlify/database";

export default async (req: Request) => {
  const db = getDatabase();

  // Run SQL queries against Netlify Database directly
  const users = await db.sql`SELECT * FROM users LIMIT 10`;

  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" }
  });
};
