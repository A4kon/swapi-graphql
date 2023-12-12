import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import Keyv from 'keyv';
import KeyvRedis from '@keyv/redis';
import { RedisConfigInterface } from '../env/redis/redis.config.interface';

@Injectable()
export class RedisCacheService {
  constructor(
    private config: ConfigService,
    private keyv: Keyv,
    private readonly redis: Redis,
  ) {
    const redisConfig = this.config.get('redis') as RedisConfigInterface;
    if (!redisConfig) {
      throw new Error('Missing Redis Credentials');
    }
    this.redis = new Redis({
      port: redisConfig.port,
      host: redisConfig.host,
      username: redisConfig.username,
      password: redisConfig.password,
    });

    this.keyv = new Keyv({
      store: new KeyvRedis(this.redis),
    });
  }

  async get<T = unknown>(key: string): Promise<T | undefined> {
    return (await this.keyv.get(key)) as T | undefined;
  }

  async set(key: string, value: unknown, ttl?: number): Promise<void> {
    await this.keyv.set(key, value, ttl);
  }
}
