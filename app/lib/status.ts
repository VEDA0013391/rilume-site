import { unstable_cache } from "next/cache";
import clientPromise from "./mongodb";

export interface Status {
  recordedAt: Date;
  guildCount: number;
  memberCount: number;
}

async function fetchLatestStatus(): Promise<Status | null> {
  const client = await clientPromise;
  const db = client.db();

  return db.collection<Status>("status").findOne(
    {},
    {
      sort: {
        recordedAt: -1,
      },
    }
  );
}

export async function getLatestStatus(): Promise<Status | null> {
  const now = new Date();

  const slot =
    `${now.getFullYear()}-` +
    `${now.getMonth()}-` +
    `${now.getDate()}-` +
    `${Math.floor(now.getHours())}-` +
    `${now.getMinutes() < 30 ? 0 : 1}`;

  const cached = unstable_cache(
    fetchLatestStatus,
    ["status", slot],
    {
      revalidate: false,
    }
  );

  return cached();
}