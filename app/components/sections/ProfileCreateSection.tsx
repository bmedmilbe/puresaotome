import { metadataService } from "@/lib/services/metadata-service";
import { mockDelay } from "@/lib/utils";
import ProfileCreator from "../ProfileCreator";

const ProfileCreateSection = async () => {
  await mockDelay(3000);
  const response = await metadataService.getMetaData();
  return <ProfileCreator initialMetadata={response.data} />;
};
export default ProfileCreateSection;
