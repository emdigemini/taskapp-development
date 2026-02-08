export const transformDate = (date) => {
  return new Date(date).toLocaleDateString("en-us", {
    month: "short",
    year: "numeric",
    day: "numeric"
  })
}