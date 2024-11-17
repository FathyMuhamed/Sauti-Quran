export function getImageUrl(id: string | null) {
  if (!id) return "/placeholder-avatar.jpg";
  return `https://e-cdns-images.dzcdn.net/images/cover/${id}/500x500-000000-80-0-0.jpg`;
}

export async function getSoundDetails(id: string) {
  const res = await fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();
  return data;
}
