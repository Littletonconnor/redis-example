import Redis, { RedisOptions } from "ioredis";

// Usage:
//  You must first have redis cli brew install redis on your machine.
//  Then you can run redis-server to start the redis server.
//  redis-cli to start the redis cli.
//  flushall to clear all keys.

export function createRedisInstance() {
  try {
    const options: RedisOptions = {
      port: process.env.REDIS_URL as unknown as number,
      host: process.env.REDIS_HOST as string,
      lazyConnect: true,
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: (times: number) => {
        if (times > 3) {
          throw new Error(`[Redis] Could not connect after ${times} attempts`);
        }

        return Math.min(times * 200, 1000);
      },
    };

    const redis = new Redis(options);

    redis.on("error", (error: unknown) => {
      console.warn("[Redis] Error connecting", error);
    });

    return redis;
  } catch (e) {
    throw new Error(`[Redis] Could not create a Redis instance`);
  }
}

const redis = createRedisInstance();
export default redis;
