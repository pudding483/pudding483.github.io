// 1. export interface ...    摰儔敶Ｙ?/??
// 2. import ...              撘??鞈?
// 3. const typedConfig = ... ??憪????典??
// 4. export const ...        頛詨蝯血隞?獢蝙??
export interface SiteConfig {
  title: string;
  subtitle: string;
  description: string;
  keywords: string | string[];
  author: string;
  language: string;
  icon?: string;
}

export interface SidebarConfig {
  position: "left" | "right";
  avatar: string;
}

export interface MenuConfig {
  name: string;
  url: string;
}

export interface BannerSrcSetConfig {
  enable: boolean;
  srcset: {
    src: string;
    media: string;
  }[];
}

// ?ㄐ?啣?銝????批蝧餉陌???interface嚗? config.ts ??瑽皜
export interface TranslationConfig {
  enable: boolean;
}

// ?啣?摨憭批?嚗?箏??
export interface BottomBannerConfig {
  enable: boolean;
  src: string;
}

export interface FooterConfig {
  // since: number;
  since: number | string; // ?迂 string 憿?嚗停?賢神 撟港遢/?遢
  powered: boolean;
  count: boolean;
  busuanzi: boolean;
}

export interface AnalyticsConfig {
  // baidu_analytics: string | false;
  google_analytics: string | false;
  clarity: string | false;
}

export interface SocialConfig {
  email?: string;
  github?: string;
  google?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  pinterest?: string;
  youtube?: string;
  vimeo?: string;
  flickr?: string;
  dribbble?: string;
  behance?: string;
  bilibili?: string;
  weibo?: string;
  zhihu?: string;
  douban?: string;
  reddit?: string;
  tumblr?: string;
  medium?: string;
  deviantart?: string;
  telegram?: string;
  discord?: string;
  steam?: string;
}

export interface ValineConfig {
  enable: boolean;
  appId: string;
  appKey: string;
  pageSize: number;
  avatar: string;
  lang: string;
  placeholder: string;
  guest_info: string;
  recordIP: boolean;
  highlight: boolean;
  visitor: boolean;
  serverURLs: string;
}

export interface WalineConfig {
  enable: boolean;
  serverURL: string;
  lang: string;
  locale: any;
  emoji: string[];
  meta: string[];
  requiredMeta: string[];
  wordLimit: number;
  pageview: boolean;
}

export interface GitalkConfig {
  enable: boolean;
  clientID: string;
  clientSecret: string;
  repo: string;
  owner: string;
  admin: string[];
}

export interface GiscusConfig {
  enable: boolean;
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
  mapping: string;
  strict: number | string;
  reactionsEnabled: number | string;
  emitMetadata: number | string;
  inputPosition: string;
}

export interface UtterancesConfig {
  enable: boolean;
  repo: string;
  issue_term: string;
  theme: string;
}

export interface TwikooConfig {
  enable: boolean;
  envId: string;
  region: string;
}

export interface DisqusConfig {
  enable: boolean;
  shortname: string;
  count: boolean;
}

export interface FriendConfig {
  name: string;
  avatar: string;
  url: string;
  desc: string;
}

export interface CopyrightConfig {
  enable: boolean;
  content: {
    author: boolean;
    link: boolean;
    title: boolean;
    date: boolean;
    updated: boolean;
    license: boolean;
    license_type: string;
  };
}

export interface PreloaderConfig {
  enable: boolean;
  text: string;
  rotate: boolean;
}

export interface FireworkConfig {
  enable: boolean;
  disable_on_mobile: boolean;
  options: Record<string, any>;
}

export interface HomeCategoriesConfig {
  enable: boolean;
  content: {
    categories: string;
    cover?: string;
  }[];
}

export interface TriangleBadgeConfig {
  enable: boolean;
  type: string;
  link: string;
}

export interface OutdateConfig {
  enable: boolean;
  daysAgo: number;
}

export interface SponsorConfig {
  enable: boolean;
  qr?: { name: string; src: string }[];
}

import config from "../config";

const typedConfig = config as {
  site: SiteConfig;
  sidebar: SidebarConfig;
  widgets: string[];
  menu: MenuConfig[];
  banner: string;
  banner_srcset: BannerSrcSetConfig;
  translation: TranslationConfig; // ?啣???憛?撠??批蝧餉陌?
  bottom_banner: BottomBannerConfig;
  footer: FooterConfig;

  social: SocialConfig;
  analytics: AnalyticsConfig;
  valine: ValineConfig;
  waline: WalineConfig;
  gitalk: GitalkConfig;
  giscus: GiscusConfig;
  utterances: UtterancesConfig;
  twikoo: TwikooConfig;
  disqus: DisqusConfig;

  friend: FriendConfig[];
  copyright: CopyrightConfig;
  preloader: PreloaderConfig;

  firework: FireworkConfig;
  home_categories: HomeCategoriesConfig;
  triangle_badge: TriangleBadgeConfig;
  outdate: OutdateConfig;
  share: string[];
  sponsor: SponsorConfig;
};

export const SITE = typedConfig.site;
export const SIDEBAR = typedConfig.sidebar;
export const WIDGETS = typedConfig.widgets;
export const MENU = typedConfig.menu;
export const BANNER = typedConfig.banner;
export const BANNER_SRCSET = typedConfig.banner_srcset;
export const TRANSLATION = typedConfig.translation; // ?啣???憛?撠??批蝧餉陌?
export const BOTTOM_BANNER = typedConfig.bottom_banner; // ?啣?摨憭批?嚗??
export const FOOTER = typedConfig.footer;

export const SOCIAL = typedConfig.social;
export const ANALYTICS = typedConfig.analytics;
export const VALINE = typedConfig.valine;
export const WALINE = typedConfig.waline;
export const GITALK = typedConfig.gitalk;
export const GISCUS = typedConfig.giscus;
export const UTTERANCES = typedConfig.utterances;
export const TWIKOO = typedConfig.twikoo;
export const DISQUS = typedConfig.disqus;

export const FRIEND = typedConfig.friend;
export const COPYRIGHT = typedConfig.copyright;
export const PRELOADER = typedConfig.preloader;

export const FIREWORK = typedConfig.firework;
export const HOME_CATEGORIES = typedConfig.home_categories;
export const TRIANGLE_BADGE = typedConfig.triangle_badge;
export const OUTDATE = typedConfig.outdate;
export const SHARE = typedConfig.share;
export const SPONSOR = typedConfig.sponsor;

// let _BASE_URL = import.meta.env.BASE_URL;
// // normalize BASE_URL, make sure it starts with '/' and does not end with '/'
// if (_BASE_URL.endsWith("/")) {
//   _BASE_URL = _BASE_URL.slice(0, -1);
// }
// if (!_BASE_URL.startsWith("/")) {
//   _BASE_URL = `/${_BASE_URL}`;
// }
// export const BASE_URL = _BASE_URL;

// ?踹??箇 '/undefined/undefined' ??瘜?
let _BASE_URL = import.meta.env.BASE_URL ?? "/";

// 1. 憒??敺??/嚗??餅?
if (_BASE_URL.endsWith("/")) {
  _BASE_URL = _BASE_URL.slice(0, -1);
}

// 2. ?芣???_BASE_URL "銝蝛? 銝?"銝隞?/ ?" ????銝?/
// ?見憒??臬?寧??_BASE_URL 撠望?靽??箇征摮葡 ""嚗?????"//"
if (_BASE_URL && !_BASE_URL.startsWith("/")) {
  _BASE_URL = `/${_BASE_URL}`;
}

export const BASE_URL = _BASE_URL;

export const SITE_URL = import.meta.env.SITE.endsWith("/")
  ? import.meta.env.SITE.slice(0, -1)
  : import.meta.env.SITE;

