export function getImageUrl(id: string | null) {
  if (!id) return "/placeholder-avatar.jpg";
  return `https://e-cdns-images.dzcdn.net/images/cover/${id}/500x500-000000-80-0-0.jpg`;
}
