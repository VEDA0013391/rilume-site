import Link from "next/link";
import {
    FaDiscord,
    FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/app/lib/site";

export default function Footer() {
    return (
        <footer className="border-t border-sky-100 bg-sky-50">

            <div className="mx-auto max-w-6xl px-6 py-10">

                <div className="flex flex-col items-center gap-6">

                    <div className="flex gap-6">

                        <a href={siteConfig.twitter_url}>
                            <FaXTwitter size={24} />
                        </a>

                        <a href={siteConfig.discord_url}>
                            <FaDiscord size={24} />
                        </a>

                        <a href={siteConfig.github_url}>
                            <FaGithub size={24} />
                        </a>

                    </div>

                    <p className="text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} ryo_001339 All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}