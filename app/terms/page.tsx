import PolicyViewer from "../components/policy/PolicyViewer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
};

export default function TermsPage() {
  return (
    <PolicyViewer
      title="利用規約"
      file="terms.txt"
    />
  );
}