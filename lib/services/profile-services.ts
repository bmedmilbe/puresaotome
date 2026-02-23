import { apiRequest } from "../api-client";
import { ProfileTag } from "./metadata-service";

export const profileServices = {
  saveTag: (tagId: number) =>
    apiRequest<ProfileTag>("/bespoketour/customertags", {
      method: "POST",
      body: JSON.stringify({ bespoke_tag: tagId }),
    }),
  saveSelectedProfile: (selectedProfileId: number) =>
    apiRequest("...", {
      method: "POST",
      body: JSON.stringify({ profile_id: "..." }),
    }),
};
