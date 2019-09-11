export const genKey = () => {
  return Math.random().toString(16).slice(3, 10);
}