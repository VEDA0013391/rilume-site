import PolicyViewer from "../components/policy/PolicyViewer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <PolicyViewer
      title="プライバシーポリシー"
      file="privacy-policy.txt"
    />
  );
}