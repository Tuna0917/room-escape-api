import { buildServer } from "./server";

const port = Number(process.env.PORT);
const host = process.env.HOST;

const server = buildServer();

server.listen({ port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  if (host === "0.0.0.0")
    server.log.debug(`Server listening at http://localhost:${port}`);
});
