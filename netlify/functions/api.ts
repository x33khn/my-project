export default async (req) => {
  return new Response(JSON.stringify({ status: "Function is working!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
