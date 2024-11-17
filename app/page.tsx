import { SoundGrid } from "@/components/SoundGrid";

const url =
  "https://deezerdevs-deezer.p.rapidapi.com/search?q=%D8%AA%D9%84%D8%A7%D9%88%D8%A7%D8%AA%20%D9%86%D8%A7%D8%AF%D8%B1%D9%87&limit=15";

async function getPopularQuranListen() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    } as any,
  });
  const data = await response.json();
  return data?.data;
}

export default async function Home() {
  const data = await getPopularQuranListen();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Suggestion listen to Quran
      </h2>
      <SoundGrid sounds={data} />
    </div>
  );
}
