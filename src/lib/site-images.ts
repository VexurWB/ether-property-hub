export const siteImages = {
  logo: "/images/optimised/ether-logo-transparent.webp",
  hero: "/images/optimised/hero.webp",
  amir: "/images/optimised/amir-portrait.webp",
  about: "/images/optimised/hero.webp",
  contact: "/images/optimised/contact.webp",
  aboutServices: "/images/about-services.png",
  projects: {
    dubbo: "/images/optimised/project-dubbo.webp",
    caboolture: "/images/optimised/project-caboolture.webp",
    "fortitude-valley": "/images/optimised/project-fortitude-valley.webp",
    kallangur: "/images/optimised/project-kallangur.webp",
    thornlie: "/images/optimised/project-thornlie.webp",
    greenfields: "/images/optimised/project-greenfields.webp",
    mildura: "/images/optimised/project-mildura.webp",
  },
  clients: {
    // Real property photography (their portfolio / brand assets).
    // The old client-*.png files were 200×200 contact icons, not photos.
    family: "/images/optimised/project-greenfields.webp",
    interstate: "/images/optimised/project-mildura.webp",
    investors: "/images/optimised/hero.webp",
  },
} as const;

export const processStepImages = [
  "/images/optimised/hero.webp",
  "/images/optimised/project-dubbo.webp",
  "/images/optimised/amir-portrait.webp",
] as const;

export const contactImage = siteImages.contact;
