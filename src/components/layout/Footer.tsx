import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/services", label: "Services" },
      { href: "/tint", label: "Tint Preview" },
      { href: "/process", label: "The Process" },
      { href: "/faq", label: "FAQ" },
      { href: "/location", label: "Location & Hours" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span
              aria-hidden
              className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground text-sm font-bold"
            >
              K
            </span>
            {siteConfig.name}
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted">{siteConfig.tagline}</p>
          <div className="mt-6 space-y-1 text-sm text-muted">
            <p>{siteConfig.address.full}</p>
            <p>
              <a href={siteConfig.phoneHref} className="hover:text-accent">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </p>
            <p className="text-xs text-muted/80">Y-tunnus (Business ID): {siteConfig.businessId}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-6">
        <p className="container-page text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
