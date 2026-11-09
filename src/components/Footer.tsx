import Link from "next/link";
import { LogoWordmark } from "./Logo";
import { siteConfig, socialLinks } from "@/lib/site-data";
import { mainNavLinks } from "@/lib/navigation";
import { SocialIcon } from "@/lib/social-icons";

const serviceLinks = [
  { label: "Investment strategy", href: "/services" },
  { label: "Property research", href: "/services" },
  { label: "Property sourcing", href: "/services" },
  { label: "Off-market access", href: "/services" },
  { label: "Negotiation & auctions", href: "/services" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="mx-auto w-full max-w-[1240px] px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div>
            <LogoWordmark height={88} />
            <p className="mt-6 max-w-sm text-[13px] leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                Services
              </h3>
              <ul className="mt-4 space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[12.5px] text-white/68 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5">
                {mainNavLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[12.5px] text-white/68 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-[12.5px] text-white/68">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="transition-colors hover:text-white">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="leading-relaxed text-white/55">
                  {siteConfig.address}
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                  Follow us
                </h3>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-white/70 transition-colors hover:border-gold/50 hover:text-gold-soft"
                    >
                      <SocialIcon icon={social.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-white/10 pt-8 text-[11.5px] leading-relaxed text-white/42 md:grid-cols-2">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Licensed Real
            Estate Agency · {siteConfig.licence}
          </p>
          <p>
            All investment decisions involve risk. Past performance is not indicative of future
            results. This website does not constitute financial advice. Please consider your own
            circumstances before making any investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
