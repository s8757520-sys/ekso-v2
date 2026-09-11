import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

// Health-check
fastify.get('/api/health', async () => {
  return { status: 'ok', timestamp: Date.now() };
});

// Версия
fastify.get('/api/version', async () => {
  return { version: '0.1.0' };
});

// Запуск
const start = async () => {
  try {
    await fastify.listen({ port: 8080, host: '0.0.0.0' });
    console.log('Server запущен на http://localhost:8080');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
