export default function (time) {
  if (!time) return
  const date = new Date(time * 1000);
  return date.toLocaleDateString();
}