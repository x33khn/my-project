import { getDatabase } from "@netlify/database";

export default async (req: Request) => {
  try {
    const db = getDatabase();

    // 1. Ensure table exists on this preview branch
    await db.sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100)
      );
    `;

    // 2. Query users
    const users = await db.sql`SELECT * FROM users LIMIT 10`;

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
