interface ThemedLogo {
    dark: string
    light: string
  }
  
  interface Logo {
    src: string | ThemedLogo
    alt?: string
  }
  
  interface Link {
    label: string
    url: string
    icon?: string
  }
  
  export enum FaviconType {
    ico = 'image/x-icon',
    gif = 'image/gif',
    jpeg = 'image/jpeg',
    jpg = 'image/jpeg',
    png = 'image/png',
    svg = 'image/svg+xml',
  }
  
  interface Favicon {
    href: string
    type: FaviconType
  }
  
  interface Friend {
    name: string
    url: string
    bio: string
    avatar: string
    desc: string
  }
  
  export interface SiteConfig {
    title: string // website title
    url: string
    description: string // website description info
    logo?: Logo // website logo image
    lang?: string
    tagline?: string // website tagline
    favicon?: Favicon
    social?: Link[] // social media accounts
    friends?: Friend[]
  }