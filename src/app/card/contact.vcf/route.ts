import { siteConfig } from "@/lib/site-data";

export const dynamic = "force-static";

const vCard = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Magaranti;Amir Thapa;;;",
  `FN:${siteConfig.contact}`,
  `ORG:${siteConfig.name}`,
  "TITLE:Director & Licensed Buyer's Agent",
  `TEL;TYPE=CELL,VOICE:${siteConfig.phoneRaw}`,
  `EMAIL;TYPE=WORK:${siteConfig.email}`,
  `URL:${siteConfig.url}`,
  "ADR;TYPE=WORK:;;60 Mooramba Ave;North Gosford;NSW;2250;Australia",
  "END:VCARD",
  "",
].join("\r\n");

export function GET() {
  return new Response(vCard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="amir-thapa-magaranti.vcf"',
    },
  });
}
