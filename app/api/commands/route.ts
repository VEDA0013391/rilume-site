// コマンド情報取得API
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://discord.com/api/v10/applications/${process.env.DISCORD_APPLICATION_ID}/commands`,
    {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      },

      next: {
        revalidate: 300,
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      {
        error: "Failed",
      },
      {
        status: res.status,
      }
    );
  }

  const data = await res.json();

  return NextResponse.json(data);
}