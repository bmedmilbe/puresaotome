import { apiRequest } from "../api-client";

export type BespokeTag = {
  id: number;
  title: string;
  slug: string;
  image: string;
};
export type ProfileTag = {
  id: number;
  bespoke_tag: BespokeTag;
};
export type ProfileType = {
  id: number;
  title: string;
  slug: string;
  image: string;
  profile_tags: ProfileTag[];
};
export type ProfileTypeSimple = {
  id: number;
  title: string;
  slug: string;
  image: string;
};
export type ProfileTagForBespoke = {
  id: number;
  profile_type: ProfileTypeSimple;
};
export type BespokeTags = {
  id: number;
  title: string;
  slug: string;
  image: string;
  profile_tags: ProfileTagForBespoke[];
};
export type MetaData = {
  profile_types: ProfileType[];
  bespoke_tags: BespokeTags[];
};

export const metadataService = {
  getMetaData: async () => apiRequest<MetaData>(`/bespoketour/metadata`),
};
