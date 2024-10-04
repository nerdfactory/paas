import { Icons } from '@/components/icons'
import { lusitana } from '@/components/ui/fonts';
import { siteConfig } from "@/config/site"

export default function CompanyLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Icons.logo className="h-12 w-12" />
      <p className="text-[44px]">{siteConfig.name}</p>
    </div>
  );
}
