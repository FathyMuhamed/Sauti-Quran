import Image from "next/image";

type Collection = {
  track: {
    id: number;
    artwork_url: string;
    created_at: string;
    permalink_url: string;
    title: string;
    track_authorization: string;
    media: {
      transcodings: {
        url: string;
      }[];
    };
    duration: number;
  };
};

async function getLikes() {
  const res = await fetch(LIKES_URL);
  const json = await res.json();

  const likes = json.collection
    ?.map((like: Collection) => {
      if (!like?.track) return undefined;

      return {
        id: like?.track?.id,
        trackImage: like?.track?.artwork_url,
        created_at: like?.track?.created_at,
        source: like?.track?.permalink_url,
        title: like?.track?.title,
        token: like?.track?.track_authorization,
        url:
          like?.track?.media?.transcodings[0].url +
          "?client_id=52pzplEGEeRDl0dMsr2k51EB0TdVWyrf&track_authorization=" +
          like?.track?.track_authorization,
        duration: like?.track?.duration,
      };
    })
    .filter(Boolean);

  return {
    likes: likes,
    totalLikes: likes?.length,
  };
}

export default async function Home() {
  const { likes, totalLikes } = await getLikes();

  if (!likes) return <div>Loading...</div>;

  console.log(likes);
  return (
    <div>
      <h2>Likes {totalLikes}</h2>
      {likes.map((like: any) => (
        <div key={like.id}>
          <Image
            src={like.trackImage}
            alt={like.title}
            width={200}
            height={200}
            priority={false}
          />
          <button
            type="button"
            role="button"
            onClick={() => {
              const audio = new Audio(like.url);
              audio.play();
            }}
          >
            Play
          </button>
          <audio controls>
            <source src={like.url} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </div>
  );
}

// https://api-v2.soundcloud.com/media/soundcloud:tracks:293440585/e50a3014-cb6c-4635-bce9-36f9fcdc4492/stream/hls?client_id=52pzplEGEeRDl0dMsr2k51EB0TdVWyrf&track_authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJnZW8iOiJFRyIsInN1YiI6IiIsInJpZCI6IiIsImlhdCI6MTczMTAxMjA3Mn0.IiiHMCqrQOJvTYzHl9xbgBO8FgjKsmCQTRqiCP9KeX8
