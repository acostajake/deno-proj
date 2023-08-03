import { Server } from "https://deno.land/std@0.196.0/http/server.ts";

const port = 3000;


const handler = () => {
  const body = `Hello world!`;
  return new Response(body, { status: 200 });
};

const server = new Server({ port, handler });

await server.listenAndServe();
