import Image from "next/image";
import { Montserrat, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { ShareCardButton } from "./ShareCardButton";
import styles from "./DigitalCard.module.css";

const nameFont = Playfair_Display({ subsets: ["latin"], weight: ["700"], display: "swap" });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const rows = [
  {
    label: "Mobile",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneRaw}`,
    icon: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />,
  },
  {
    label: "WhatsApp",
    value: "Message Me Directly",
    href: `https://wa.me/61${siteConfig.phoneRaw.slice(1)}`,
    external: true,
    icon: <path d="M21 11.5a8.4 8.4 0 0 1-12.2 7.5L3 21l2-5.8A8.4 8.4 0 1 1 21 11.5z" />,
  },
  {
    label: "Email",
    value: "Amir@etherpropertyhub.com.au",
    href: `mailto:${siteConfig.email}`,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  },
  {
    label: "Website",
    value: "etherpropertyhub.com.au",
    href: siteConfig.url,
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
];

export function DigitalCard() {
  return (
    <main className={`${styles.page} ${bodyFont.className}`}>
      <article className={styles.card}>
        <header className={styles.hero}>
          <span className={styles.cornerTop} aria-hidden="true" />
          <span className={styles.cornerBottom} aria-hidden="true" />
          <div className={styles.brand}>
            <span className={styles.logoTile}>
              <Image src={siteImages.logo} alt="" width={55} height={58} unoptimized />
            </span>
            <span>
              <span className={styles.brandName}>{siteConfig.name}</span>
              <span className={styles.brandTag}>{siteConfig.tagline}</span>
            </span>
          </div>
          <span className={styles.rule} aria-hidden="true" />
          <h1 className={`${styles.name} ${nameFont.className}`}>{siteConfig.contact}</h1>
          <p className={styles.role}>Director &amp; Licensed Buyer&apos;s Agent</p>
          <p className={styles.about}>Helping investors find high-performing properties across Australia</p>
          <p className={styles.location}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            North Gosford, NSW · Australia-Wide
          </p>
        </header>

        <div className={styles.rows}>
          {rows.map((row) => (
            <a
              key={row.label}
              href={row.href}
              className={styles.row}
              {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className={styles.rowIcon}>
                <svg {...iconProps}>{row.icon}</svg>
              </span>
              <span className={styles.rowText}>
                <span className={styles.rowLabel}>{row.label}</span>
                <span className={styles.rowValue}>{row.value}</span>
              </span>
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <a href="/card/contact.vcf" download="amir-thapa-magaranti.vcf" className={styles.saveButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Save to contacts
          </a>
          <ShareCardButton
            title={`${siteConfig.contact} | ${siteConfig.name}`}
            text={`Contact details for ${siteConfig.contact}, ${siteConfig.name}`}
          />
        </div>
      </article>
    </main>
  );
}
