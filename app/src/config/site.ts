import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "PaaS",
  author: "duksis",
  description:
    "Platform as a Service for all your infrastructure needs",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://github.com/duksis",
  },
  links: {
    github: "https://github.com/nerdfactory/paas",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
