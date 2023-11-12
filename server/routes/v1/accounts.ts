import { FastifyInstance, FastifyPluginOptions } from "fastify";

export default async (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
): Promise<void> => {
  fastify.get("/example", async (request, reply) => {
    return { message: "Hello, this is an example route!" };
  });
};
