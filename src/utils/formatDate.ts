type formatSpecificDateProps = { day: number; month: string; year: number };

export const formatSpecificDate = (date: Date): formatSpecificDateProps => {
  const day = date.getDate(); // Day of the month
  const month = date.toLocaleString("default", { month: "short" }); // Short month name (e.g., Jan)
  const year = date.getFullYear(); // Full year
  return { day: day, month: month, year: year };
};

export const LATESTPOST = [
  {
    title: "We’ve Been Nominate...",
    content: "Advice, News",
    date: { year: 2022, month: 1, day: 10 },
  },
  {
    title: "We Were Invited to the Ho...",
    content: "Advice, News",
    date: { year: 2022, month: 1, day: 10 },
  },
  {
    title: "Floating Grace MD Present...",
    content: "Advice, News",
    date: { year: 2022, month: 11, day: 29 },
  },
  {
    title: "Mother’s Day Sunday...",
    content: "Advice, News",
    date: { year: 2022, month: 2, day: 22 },
  },
  {
    title: "Floating Grace MD Present...",
    content: "Advice, News",
    date: { year: 2022, month: 11, day: 29 },
  },
];
