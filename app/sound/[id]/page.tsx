import { SoundDetails } from "@/components/SoundDetails";
import { getSoundDetails } from "@/lib/api";

export default async function SoundPage({
  params,
}: {
  params: { id: string };
}) {
  const sound = await getSoundDetails(params.id);
  return <SoundDetails sound={sound} />;
}
