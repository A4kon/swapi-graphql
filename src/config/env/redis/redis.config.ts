import { registerAs } from '@nestjs/config';
import { RedisConfigInterface } from './redis.config.interface';

export default registerAs<RedisConfigInterface>('redis', () => ({
  host: process.env['REDIS_HOST'] as RedisConfigInterface['host'],
  port: parseInt(process.env['REDIS_PORT']) as RedisConfigInterface['port'],
  username: process.env['REDIS_USERNAME'] as RedisConfigInterface['username'],
  password: process.env['REDIS_PASSWORD'] as RedisConfigInterface['password'],
}));
