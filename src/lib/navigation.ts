export type NavLink = { href: string; label: string; path: string };
export type NavGroup = { label: string; links: readonly NavLink[] };
export type NavItem = NavLink | NavGroup;

const aboutLink = { href: "/about", label: "About", path: "/about" };
const projectsLink = { href: "/projects", label: "Projects", path: "/projects" };
const teamLink = { href: "/team", label: "Team", path: "/team" };
const servicesLink = { href: "/services", label: "Services", path: "/services" };
const contactLink = { href: "/contact", label: "Contact", path: "/contact" };

export const resourcesNavLinks: readonly NavLink[] = [
  { href: "/reviews", label: "Reviews", path: "/reviews" },
  { href: "/faq", label: "FAQ", path: "/faq" },
  { href: "/blog", label: "Blog", path: "/blog" },
];

/** Header navigation: Reviews, FAQ and Blog sit under a Resources dropdown. */
export const primaryNavItems: readonly NavItem[] = [
  aboutLink,
  projectsLink,
  teamLink,
  servicesLink,
  { label: "Resources", links: resourcesNavLinks },
  contactLink,
];

/** Flat list of every page link (footer). */
export const mainNavLinks: readonly NavLink[] = [
  aboutLink,
  projectsLink,
  teamLink,
  servicesLink,
  ...resourcesNavLinks,
  contactLink,
];

export function isNavGroup(item: NavItem): item is NavGroup {
  return "links" in item;
}

export function isNavActive(path: string, pathname: string) {
  return pathname === path || pathname.startsWith(`${path}/`);
}
