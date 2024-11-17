import { getImageUrl } from "@/lib/api";
import { AudioLinesIcon } from "lucide-react";
import { formatDuration } from "@/lib/utils";

export function SoundDetails({ sound }: { sound: any }) {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <div
          className="absolute inset-0 h-[50vh] md:h-[60vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${getImageUrl(sound.md5_image)})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/30" />
        </div>

        <div className="relative pt-24 px-4 md:pt-32 lg:pt-40 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full max-w-[300px] mx-auto md:mx-0 md:w-1/3 lg:w-1/4 flex-shrink-0">
              <div className="aspect-[2/3] relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={getImageUrl(sound.md5_image)}
                  alt={sound.title}
                  className="w-full h-full object-cover"
                  style={{ viewTransitionName: `poster-${sound.id}` }}
                />
              </div>
            </div>

            <div className="flex-1 text-white space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {sound.title_short}
                </h1>
              </div>

              <div className="flex flex-wrap gap-4 text-sm md:text-base">
                <div className="flex items-center text-yellow-400">
                  <AudioLinesIcon className="w-5 h-5 mr-1" />
                  <span>{formatDuration(sound.duration)}</span>
                </div>
              </div>
              {/* <audio controls>
                <track kind="captions" />
                <source src={sound?.preview} type="audio/mp3" />
              </audio> */}

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {sound?.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
