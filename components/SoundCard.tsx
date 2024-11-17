"use client";

import { getImageUrl } from "@/lib/api";
import { Link } from "next-view-transitions";
import { AudioLinesIcon } from "lucide-react";
import { formatDuration } from "@/lib/utils";

interface Sound {
  id: string;
  title: string;
  md5_image: string;
  duration: number;
}

export function SoundCard({ sound }: Readonly<{ sound: Sound }>) {
  return (
    <Link
      href={`/sound/${sound.id}`}
      className="group relative overflow-hidden rounded-lg bg-gray-800 transition-transform hover:scale-105"
    >
      <div className="aspect-[3/3]">
        <img
          src={getImageUrl(sound.md5_image)}
          alt={sound.title}
          className="h-full w-full object-cover transition-opacity"
          style={{ viewTransitionName: `poster-${sound.id}` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
          <h3 className="text-lg font-semibold text-white mb-2">
            {sound.title}
          </h3>
          <div className="flex items-center text-yellow-400 mb-2">
            <AudioLinesIcon className="w-4 h-4 mr-1" />
            {formatDuration(sound?.duration)}
          </div>
        </div>
      </div>
    </Link>
  );
}
