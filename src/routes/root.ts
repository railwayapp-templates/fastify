import { FastifyInstance, FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.get('/', async (request, reply) => {

    const response = {
      message: 'Welcome to Fastify Hello World API on Railway',
      timestamp: new Date().toISOString(),
    };

    return response;
  });
};

export default root;