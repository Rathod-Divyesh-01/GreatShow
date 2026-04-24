export const dateFormat = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    year: "numeric",
  });
};
