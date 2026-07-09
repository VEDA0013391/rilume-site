import type { Metadata } from "next";
import CommandsClient from "./CommandsClient";

export const metadata: Metadata = {
  title: "コマンド",
};

export default function CommandsPage() {
  return <CommandsClient />;
}