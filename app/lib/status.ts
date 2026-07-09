import clientPromise from "./mongodb";

export interface Status {
  recordedAt: Date;
  guildCount: number;
  memberCount: number;
}

export async function getLatestStatus(): Promise<Status | null> {
  const client = await clientPromise;

  const db = client.db();

    return await db.collection<Status>("status").findOne(
    {},
    {
        sort: {
        recordedAt: -1,
        },
    }
    );
}