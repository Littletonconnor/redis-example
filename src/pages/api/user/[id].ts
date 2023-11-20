import redis from "@/lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

const database = {
  1: "Connor",
  2: "Sarah",
  3: "John",
} as const;

// Examples:
// Set key: await redis.set("foo", "bar");
// Get key: await redis.key("foo");
// Get all keys: await redis.keys("*");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  if (!id) {
    res.status(400).json({ message: "Missing id" });
    return;
  }

  if (typeof id !== "string") {
    res.status(400).json({ message: "Invalid id" });
    return;
  }

  const cachedKey = await redis.get(id.toString());

  if (cachedKey) {
    res.end(
      `Key was retrieved from redis cache: ${cachedKey}\nRedis keys currently stored: ${await redis.keys(
        "*"
      )}`
    );
    return;
  }

  const user = (database as any)[id];

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  const MAX_AGE = 60_000 * 60; // 1 hour
  const EXPIRY_MS = `PX`; // milliseconds

  await redis.set(id.toString(), user, EXPIRY_MS, MAX_AGE);

  res.end(
    `Key was retrieved from Database: ${user}\nRedis keys currently stored: ${await redis.keys(
      "*"
    )}`
  );
}
