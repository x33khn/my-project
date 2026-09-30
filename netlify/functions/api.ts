export default async (req) => {
  return new Response(
    JSON.stringify([
      { id: 1, name: "Test User 1", email: "test1@example.com" },
      { id: 2, name: "Test User 2", email: "test2@example.com" }
    ]),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};
