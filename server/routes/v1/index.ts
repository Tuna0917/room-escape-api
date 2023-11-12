import { FastifyInstance, FastifyPluginOptions } from "fastify";
import accounts from "./accounts";

export default async (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
): Promise<void> => {
  fastify.register(accounts, { prefix: "account" });
};
