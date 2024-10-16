import { FastifyInstance, FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.get("/", async () => {
    const response = {
      message: "Hi",
      timestamp: new Date().toISOString(),
    };

    return response;
  });
};

export default root;
