import { pageMetadata } from "@/lib/metadata";
import { DigitalCard } from "@/components/DigitalCard";
import { siteConfig } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: `${siteConfig.contact} Digital Card`,
  description: `Save the contact details of ${siteConfig.contact}, Director and Licensed Buyer's Agent at ${siteConfig.name}.`,
  path: "/card",
});

export default function CardPage() {
  return <DigitalCard />;
}
