import { SoundCard } from "@/components/SoundCard";

export function SoundGrid({ sounds }: { sounds: any }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {sounds?.map((sound: any) => (
        <SoundCard key={sound.id} sound={sound} />
      ))}
    </div>
  );
}
