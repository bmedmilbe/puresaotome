"use server";
import { ProfileTag } from "@/lib/services/metadata-service";
import { profileServices } from "@/lib/services/profile-services";
import { ActionResponse } from "./auth";

export const saveTagsAction = async (
  tags: number[],
): Promise<ActionResponse> => {
  try {
    const requests = tags.map((tag) => profileServices.saveTag(tag));
    await Promise.all(requests);
    return { success: true, message: "All private vaults are synchronized!" };
  } catch (error) {
    return {
      success: false,
      error: "Database synchronization failed",
      message: "Database synchronization failed",
    };
  }
};
