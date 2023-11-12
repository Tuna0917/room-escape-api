import fastify from "fastify";
import simpleRoute from "./routes";
import v1Route from "./routes/v1";

export function buildServer() {
  const server = fastify({
    logger: {
      enabled: process.env.NODE_ENV === "develop",
      level: "debug",
      transport: {
        target: "pino-pretty",
        options: {
          translateTime: "HH:MM:ss Z",
          ignore: "pid,hostname",
          colorize: true,
        },
      },
    },
  });

  server.register(simpleRoute);
  server.register(v1Route, { prefix: "v1" });

  return server;
}
