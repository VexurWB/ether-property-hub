export const siteImages = {
  logo: "/images/ether-logo-transparent.png",
  hero: "/images/hero.jpeg",
  amir: "/images/amir-portrait.png",
  about: "/images/hero.jpeg",
  contact: "/images/contact.png",
  aboutServices: "/images/about-services.png",
  projects: {
    dubbo: "/images/project-dubbo.jpeg",
    caboolture: "/images/project-caboolture.jpeg",
    "fortitude-valley": "/images/project-fortitude-valley.jpeg",
    kallangur: "/images/project-kallangur.jpeg",
    thornlie: "/images/project-thornlie.jpeg",
    greenfields: "/images/project-greenfields.jpeg",
    mildura: "/images/project-mildura.jpeg",
  },
  clients: {
    // Real property photography (their portfolio / brand assets).
    // The old client-*.png files were 200×200 contact icons, not photos.
    family: "/images/project-greenfields.jpeg",
    interstate: "/images/project-mildura.jpeg",
    investors: "/images/hero.jpeg",
  },
} as const;

export const processStepImages = [
  "/images/hero.jpeg",
  "/images/project-dubbo.jpeg",
  "/images/amir-portrait.png",
] as const;

export const contactImage = siteImages.contact;
