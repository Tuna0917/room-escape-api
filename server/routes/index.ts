import { FastifyInstance, FastifyPluginOptions } from "fastify";

export default async (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
): Promise<void> => {
  fastify.get("/", async (request, reply) => {
    reply.code(200).send({ server: "less" });
  });
  fastify.get("/health-check", async (request, reply) => {
    reply.send(200);
  });
};
