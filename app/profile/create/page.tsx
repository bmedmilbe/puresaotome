import ProfileCreator from "@/app/components/ProfileCreator";
import { metadataService } from "@/lib/services/metadata-service";

export default async function Page() {
  const response = await metadataService.getMetaData();
  return <ProfileCreator initialMetadata={response.data} />;
}
