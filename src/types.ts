export type MenuItem = { text: string; path: string };
export type Menu = { es: MenuItem[]; en: MenuItem[] };
export type ArtistItem = {
  slug: string;
  name: string;
  photo: string;
  socialMedia: SocialMedia;
};
export type SocialMedia = {
  instagram: string;
  facebook: string;
  tiktok: string;
  threads: string;
  youtube: string;
};
