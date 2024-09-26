import { FastifyInstance, FastifyPluginAsync } from 'fastify';

const example: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.get('/', async (request, reply) => {
    return 'this is an example';
  });
};

export default example;